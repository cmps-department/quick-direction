import React, { FC, useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useDisclosure } from '@mantine/hooks';
import { Flex, NumberInput, Stack, Text, ColorInput, Space, Divider } from '@mantine/core';
import Frame from '../../components/Frame/Frame';
import Textarea from '../../components/Textarea/Textarea';
import CustomButton from '../../components/CustomButton/CustomButton';
import SuccessModal from '../../components/SuccessModal/SuccessModal';
import DeleteModal from './components/DeleteModal/DeleteModal';
import Container from '../../components/Container/Container';

import TextInput from '../../components/TextInput/TextInput';
import ArrowButtons from './components/ArrowButtons/ArrowButtons';
import SubCategory from './components/SubCategory/SubCategory';
import useCreateCategory from './hooks/useCreateCategory';
import { ICategory, IGetCategory, ISubCategory } from '../../interfaces/category.interface';
import useGetCategory from './hooks/useGetCategory';
import Loading from '../../components/Loading/Loading';
import useDeleteCategory from '../CategoriesView/hooks/useDeleteCategory';
import useUpdateCategory from './hooks/useUpdateCategory';
import useFormValidationC from './hooks/useFormValidationC';
import generateValidationSC from './hooks/generateValidationSC';

import styles from './createC.module.scss';

const CreateCategoryView: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const createCategory = useCreateCategory();
  const updateCategory = useUpdateCategory();
  const { data, isLoading, refetch } = useGetCategory(id);
  const { deleteCategory } = useDeleteCategory();

  const [isSuccessModalOpen, { open: openSuccessModal, close: closeSuccessModal }] = useDisclosure(false);
  const [isDeleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] = useDisclosure(false);

  const [amountSub, setAmountSub] = useState<number>(1);
  const [defaultData, setDefaultData] = useState<IGetCategory>({
    id: 0,
    name: '',
    description: '',
    professor: '',
    color: '#0000ff',
    subDirections: [],
    createdAt: '',
    updatedAt: '',
  });

  const validationSchemaC = useFormValidationC();

  const validationSchemaSC = useMemo(() => {
    return Array.from({ length: amountSub }, (_, index) => generateValidationSC(index));
  }, [amountSub]);

  const mergedSchema = useMemo(() => {
    return Yup.object().shape({
      ...validationSchemaC.fields,
      ...validationSchemaSC.reduce((acc, schema) => {
        return Object.keys(schema.fields).reduce((innerAcc, key) => {
          return {
            ...innerAcc,
            [key]: Yup.reach(schema, key),
          };
        }, acc);
      }, {}),
    });
  }, [validationSchemaC.fields, validationSchemaSC]);

  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
    resolver: yupResolver(mergedSchema),
  });

  const handleAdd = async (data: any) => {
    console.log(data);
    const createData: ICategory = {
      name: data.nameD,
      description: data.descriptionD,
      professor: data.professorMail,
      color: defaultData.color,
      subDirections: [],
    };
    const subDir: ISubCategory[] = [];
    for (let i = 0; i < amountSub; i++) {
      const obj: ISubCategory = {
        name: data[`nameSD_${i}`],
        description: data[`descriptionSD_${i}`],
        examplelink: data[`examplelinkSD_${i}`],
        additionalInfo: data[`additionalInfoSD_${i}`],
        downloadFile: data[`downloadFileSD_${i}`],
        textField: data[`textFieldSD_${i}`],
      };
      if (id !== null && id !== undefined && defaultData.subDirections[i]?.id) {
        obj.id = defaultData.subDirections[i]?.id;
      }
      subDir.push(obj);
    }
    createData.subDirections = [...subDir];
    let response;

    try {
      if (typeof id === 'number' || typeof id === 'string') {
        const updateData = { ...createData, id: +id };
        response = await updateCategory.mutateAsync(updateData);
      } else {
        response = await createCategory.mutateAsync(createData);
      }
    } catch (error) {
      console.error(error);
    } finally {
      openSuccessModal();
      setTimeout(() => {
        router.push('/admin/categories');
      }, 1500);
    }
  };

  const handleDelete = async (answer: boolean) => {
    closeDeleteModal();
    if (answer && id) {
      const result = await deleteCategory(+id);
      setTimeout(() => {
        router.push('/admin/categories');
      }, 1000);
    }
  };

  useEffect(() => {
    refetch();
  }, [id, refetch]);

  useEffect(() => {
    if (data) {
      setAmountSub(data.subDirections.length);
      setDefaultData(data);
    } else {
      setAmountSub(1);
      setDefaultData({
        id: 0,
        name: '',
        description: '',
        professor: '',
        color: '#0000ff',
        subDirections: [],
        createdAt: '',
        updatedAt: '',
      });
    }
  }, [data]);

  useEffect(() => {
    reset();
  }, [defaultData]);

  return (
    <Container>
      <Frame className={styles.frame}>
        <Loading visible={isLoading} />
        <form onSubmit={handleSubmit(handleAdd)}>
          <Stack gap={24}>
            <Flex align={'center'} justify={'space-between'} gap={24} wrap={'wrap'}>
              <Text fz={28} fw={700}>
                {id ? 'Редагування категорії' : 'Нова категорія'}
              </Text>
              <ColorInput
                value={defaultData.color}
                onChange={e => setDefaultData({ ...defaultData, color: e })}
                className={styles.colorInput}
                radius="xl"
                placeholder="Колір категорії"
              />
            </Flex>
            <Divider style={{ borderTop: '4px solid #02808F', marginBottom: '24px' }} maw={608} w="100%" />
            <Text fz={20} fw={700}>
              Назва категорії{' '}
              <Text fz={20} fw={700} span c="red">
                *
              </Text>
            </Text>
            <TextInput
              error={errors?.nameD ? errors.nameD.message : null}
              defaultValue={defaultData.name}
              req={register('nameD')}
              placeholder="Введіть назву категорії"
              withAsterisk
            />

            <Text fz={20} fw={700}>
              Опис{' '}
              <Text fz={20} fw={700} span c="red">
                *
              </Text>
            </Text>
            <Textarea
              error={errors?.descriptionD ? errors.descriptionD.message : null}
              defaultValue={defaultData.description}
              req={register('descriptionD')}
              styles={{
                input: {
                  minHeight: '160px',
                },
              }}
              placeholder="Введіть опис..."
              withAsterisk
            />

            <Text fz={20} fw={700}>
              Відповідальний викладач{' '}
              <Text fz={20} fw={700} span c="red">
                *
              </Text>
            </Text>
            <TextInput
              error={errors?.professorMail ? errors.professorMail.message : null}
              defaultValue={defaultData.professor}
              req={register('professorMail')}
              label="Пошта"
              placeholder="Введіть пошту"
            />

            <Text fz={20} fw={700}>
              Підкатегорії{' '}
              <Text fz={20} fw={700} span c="red">
                *
              </Text>
            </Text>
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
                <SubCategory subC={data?.subDirections[index]} index={index} register={register} errors={errors} />
                <Space h="sm" />
                <Divider my="sm" />
              </Stack>
            ))}

            <Flex justify="end" wrap={'wrap'} gap={15}>
              {(id || id === '0') && (
                <CustomButton onClick={openDeleteModal} className={styles.deleteBtn}>
                  Видалити
                </CustomButton>
              )}
              <CustomButton type="submit" disabled={!isValid} className={styles.successBtn}>
                Зберегти
              </CustomButton>
              <SuccessModal opened={isSuccessModalOpen} close={closeSuccessModal} text="Категорія успішно додана" />
              <DeleteModal setAnswer={handleDelete} opened={isDeleteModalOpen} close={closeDeleteModal} />
            </Flex>
          </Stack>
        </form>
      </Frame>
    </Container>
  );
};

export default CreateCategoryView;
