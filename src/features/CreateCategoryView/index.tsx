import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form'
import PageLayout from '../../layouts/PageLayout';
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
import { ICategory } from '../../interfaces/category.interface';
import Header from '../Header';


const CreateCategoryView: FC = () => {
  const [isSuccessModalOpen, { open: openSuccessModal, close: closeSuccessModal }] = useDisclosure(false);
  const [isDeleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] = useDisclosure(false);

  const [color, setColor] = useState('#0000ff');
  const [amountSub, setAmountSub] = useState<number>(1);
  
  const createCategory = useCreateCategory();
  const {push} = useRouter();

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
      color: color,
      subDirections: []
    }
    try {
      const result = await createCategory.mutateAsync(createData);
      console.log(result);
    } catch (error) {
      console.error(error);
    } finally {
      openSuccessModal();
      setTimeout(() => {
        push('/admin/categories')
      }, 1500);
    }
  }

  const handleDelete = (answer: boolean) => {
    console.log(answer)
  }

  return (
    <Container>
        <Frame className={styles.frame}>
        <form onSubmit={handleSubmit(handleAdd)}>
            <Stack gap={24}>
            <Flex align={'center'} justify={'space-between'}>
                <Text fz={28} fw={700}>
                Нова (редагування) категорія (-ї)
                </Text>
                <ColorInput
                value={color}
                onChange={setColor}
                className={styles.colorInput}
                defaultValue='#0000ff'
                radius="xl"
                placeholder="Колір категорії"
                />
            </Flex>

            <Text fz={20} fw={700}>Назва категорії <Text fz={20} fw={700} span c="red">*</Text></Text>
            <TextInput
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
                <SubCategory register={register} />
                <Space h="sm" />
                <Divider my="sm" />
                </Stack>
            ))}

            <Flex justify="end" wrap={'wrap'} gap={15}>
                <CustomButton onClick={openDeleteModal} className={styles.deleteBtn}>
                Видалити
                </CustomButton>
                <CustomButton type='submit' disabled={!isValid} onClick={() => { console.log(1) }} className={styles.successBtn}>
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
