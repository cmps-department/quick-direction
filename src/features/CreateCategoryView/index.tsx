import React, { FC, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form'
import Frame from '../../components/Frame/Frame';
import { Flex, NumberInput, Stack, Text, ColorInput, Space, Divider, Box } from '@mantine/core';
import Textarea from '../../components/Textarea/Textarea';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useDisclosure } from '@mantine/hooks';
import SuccessModal from './components/SuccessModal/SuccessModal';
import DeleteModal from './components/DeleteModal/DeleteModal';
import Container from '../../components/Container/Container';

import styles from './createC.module.scss';
import TextInput from '../../components/TextInput/TextInput';
import ArrowButtons from './components/ArrowButtons/ArrowButtons';
import SubCategory from './components/SubCategory/SubCategory';
import useCreateCategory from './hooks/useCreateCategory';
import { useRouter } from 'next/router';
import { ICategory, IGetCategory, ISubCategory } from '../../interfaces/category.interface';
import { ICreateCategory } from '../../pages/admin/categories/create';
import useGetCategory from './hooks/useGetCategory';
import Loading from '../../components/Loading/Loading';
import useDeleteCategory from '../CategoriesView/hooks/useDeleteCategory';
import useUpdateCategory from './hooks/useUpdateCategory';


const CreateCategoryView: FC<ICreateCategory> = ({ id = null }) => {
  const createCategory = useCreateCategory();
  const updateCategory = useUpdateCategory();
  const { data, isLoading, refetch } = useGetCategory(id);
  const { deleteCategory } = useDeleteCategory();

  const [isSuccessModalOpen, { open: openSuccessModal, close: closeSuccessModal }] = useDisclosure(false);
  const [isDeleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] = useDisclosure(false);

  const [amountSub, setAmountSub] = useState<number>(1);
  const [defaultData, setDefaultData] = useState<IGetCategory>({
    id: 0,
    name: "",
    description: "",
    professor: "",
    color: "#0000ff",
    subDirections: [],
    createdAt: "",
    updatedAt: ""
  });

  const { push } = useRouter();

  const {
    register,
    formState: {
      isValid
    },
    handleSubmit,
    reset
  } = useForm({
    mode: "all"
  })

  const handleAdd = async (data: any) => {
    const createData: ICategory = {
      name: data.nameD,
      description: data.descriptionD,
      professor: data.professorMail,
      color: defaultData.color,
      subDirections: []
    }
    const subDir: ISubCategory[] = [];
    for (let i = 0; i < amountSub; i++) {
      const obj: ISubCategory = {
        name: data[`nameSD_${i}`],
        description: data[`descriptionSD_${i}`],
        examplelink: data[`examplelinkSD_${i}`],
        additionalInfo: data[`additionalInfoSD_${i}`],
        downloadFile: data[`downloadFileSD_${i}`],
        textField: data[`textFieldSD_${i}`]
      };
      if(id !== null && id !== undefined) {
        obj.id = defaultData.subDirections[i]?.id || Math.floor(Math.random()*10000+1)
      }
      subDir.push(obj);
    }
    createData.subDirections = [...subDir];
    let response;

    try {
      if (id === null) {
        response = await createCategory.mutateAsync(createData);
      } else {
        const updateData = { ...createData, id: +id }
        response = await updateCategory.mutateAsync(updateData);
      }
      console.log(response)
    } catch (error) {
      console.error(error);
    } finally {
      openSuccessModal();
      setTimeout(() => {
        push('/admin/categories')
      }, 1500);
    }
  }

  const handleDelete = async (answer: boolean) => {
    closeDeleteModal();
    if (answer && id) {
      const result = await deleteCategory(+id);
      setTimeout(() => {
        push('/admin/categories')
      }, 1000);
    }
  }

  useEffect(() => {
    refetch();
  }, [id, refetch]);

  useEffect(() => {
    reset();
    if (data) {
      setAmountSub(data.subDirections.length);
      setDefaultData(data);
    } else {
      setAmountSub(1);
      setDefaultData({
        id: 0,
        name: "",
        description: "",
        professor: "",
        color: "#0000ff",
        subDirections: [],
        createdAt: "",
        updatedAt: ""
      })
    }
  }, [data]);

  return (
    <Container>
      <Frame className={styles.frame}>
        <Loading visible={isLoading} />
        <form onSubmit={handleSubmit(handleAdd)}>
          <Stack gap={24}>
            <Flex align={'center'} justify={'space-between'}>
              <Text fz={28} fw={700}>
                {id ? "Редагування категорії" : "Нова категорія"}
              </Text>
              <ColorInput
                value={defaultData.color}
                onChange={(e) => setDefaultData({ ...defaultData, color: e })}
                className={styles.colorInput}
                radius="xl"
                placeholder="Колір категорії"
              />
            </Flex>

            <Text fz={20} fw={700}>Назва категорії <Text fz={20} fw={700} span c="red">*</Text></Text>
            <TextInput
              defaultValue={defaultData.name}
              req={register('nameD', {
                required: "Поле обов'язкове до заповнення!",
                minLength: {
                  value: 2,
                  message: 'Мінімум 2 символи!'
                },
                maxLength: {
                  value: 50,
                  message: 'Максимум 50 символів!'
                },
              })}
              placeholder="Введіть назву категорії"
              withAsterisk
            />

            <Text fz={20} fw={700}>Опис <Text fz={20} fw={700} span c="red">*</Text></Text>
            <Textarea
              defaultValue={defaultData.description}
              req={register('descriptionD', {
                required: "Поле обов'язкове до заповнення!",
                minLength: {
                  value: 2,
                  message: 'Мінімум 2 символи!'
                },
                maxLength: {
                  value: 50,
                  message: 'Максимум 50 символів!'
                },
              })}
              styles={{
                input: {
                  minHeight: "160px"
                }
              }}
              placeholder="Введіть опис..."
              withAsterisk
            />

            <Text fz={20} fw={700}>Відповідальний викладач <Text fz={20} fw={700} span c="red">*</Text></Text>
            <TextInput
              defaultValue={defaultData.professor}
              req={register('professorMail', {
                required: true,
                minLength: {
                  value: 2,
                  message: 'Мінімум 2 символи!'
                },
                maxLength: {
                  value: 50,
                  message: 'Максимум 50 символів!'
                },
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Поле не відповідає формату email!'
                }
              })}
              label="Пошта"
              placeholder="Введіть пошту"
            />

            <Text fz={20} fw={700}>Підкатегорії <Text fz={20} fw={700} span c="red">*</Text></Text>
            <NumberInput
              className={styles.inputNumber}
              value={amountSub}
              onChange={e => setAmountSub(e === '' ? 1 : +e)}
              rightSection={<ArrowButtons setAmountSub={setAmountSub} />}
              placeholder="Кількість"
              clampBehavior="strict"
              radius={'xl'}
              min={1}
              max={10}
            />

            {Array.from({ length: amountSub }, (_, index) => (
              <Stack gap={24} key={index}>
                <Space h="xl" />
                <SubCategory subC={data?.subDirections[index]} index={index} register={register} />
                <Space h="sm" />
                <Divider my="sm" />
              </Stack>
            ))}

            <Flex justify="end" wrap={'wrap'} gap={15}>
              {id !== null &&
                <CustomButton onClick={openDeleteModal} className={styles.deleteBtn}>
                  Видалити
                </CustomButton>
              }
              <CustomButton type='submit' disabled={!isValid} className={styles.successBtn}>
                Зберегти
              </CustomButton>
              <SuccessModal opened={isSuccessModalOpen} close={closeSuccessModal} />
              <DeleteModal setAnswer={handleDelete} opened={isDeleteModalOpen} close={closeDeleteModal} />
            </Flex>
          </Stack>
        </form>
      </Frame>
    </Container>
  )
}

export default CreateCategoryView
