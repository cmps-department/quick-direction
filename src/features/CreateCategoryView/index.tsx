import React, { FC, useState } from 'react';
import PageLayout from '../../layouts/PageLayout';
import Frame from '../../components/Frame/Frame';
import { Flex, Group, Stack, Text } from '@mantine/core';
import TextInput from '../../components/TextInput/TextInput';
import Textarea from '../../components/Textarea/Textarea';
import CustomButton from '../../components/CustomButton/CustomButton';
import Checkbox from '../../components/Checkbox/Checkbox';
import { useDisclosure } from '@mantine/hooks';
import SuccessModal from './components/SuccessModal/SuccessModal';
import DeleteModal from './components/DeleteModal/DeleteModal';
import Container from '../../components/Container/Container';

import styles from './createC.module.scss';
import Navbar from '../header/components/Navbar/Navbar';
import axios from 'axios';
import { ICategory, ISubCategory } from '../../interfaces/category.interface';
import { useRouter } from 'next/router';


export const getCategories = async ({ name, description, professor, color, subDirections }: ICategory) => {
  try {
    const response = await axios.post('/api/directions',
      {
        name,
        description,
        professor,
        color,
        subDirections
      });
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

const CreateCategoryView: FC = () => {

  const [direction, useDirection] = useState<ICategory>({
    name: 'Г',
    description: 'Description',
    professor: 'Proffessor',
    color: 'blue',
    subDirections: []
  });

  const [subDirections, setSubDirections] = useState<ISubCategory>({
    name: 'subDirections',
    additionalInfo: 'Info',
    additionallink: 'http://',
    examplelink: 'examplelink',
    validationField: 'validationField',
    directionId: 1
  })

  const [isSuccessModalOpen, { open: openSuccessModal, close: closeSuccessModal }] = useDisclosure(false);
  const [isDeleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] = useDisclosure(false);

  const { push } = useRouter();

  const createCategories = async () => {
    try {
      const data = await getCategories(direction);
      if(data) {
        openSuccessModal();
        console.log(data);
        setTimeout(() => push('/admin/categories'), 1500);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <PageLayout title={"Create category"}>
      <Navbar className={styles.navbar} />
      <main>
        <Container>
          <Frame className={styles.frame}>
            <form>
              <Stack gap={24}>

                <Text fz={28} fw={700}>
                  Нова (редагування) категорія (-ї)
                </Text>

                <Text fz={20} fw={700}>Назва категорії <Text fz={20} fw={700} span c="red">*</Text></Text>
                <TextInput
                  placeholder="Введіть назву категорії"
                  withAsterisk
                />

                <Text fz={20} fw={700}>Опис <Text fz={20} fw={700} span c="red">*</Text></Text>
                <Textarea
                  styles={{
                    input: {
                      minHeight: "160px"
                    }
                  }}
                  placeholder="Введіть опис..."
                  withAsterisk
                />

                <Text fz={20} fw={700}>Відповідальний викладач <Text fz={20} fw={700} span c="red">*</Text></Text>
                <Group grow>
                  <TextInput
                    label="ФІО викладача"
                    placeholder="ФІО"
                  />
                  <TextInput
                    label="Кафедра"
                    placeholder="Кафедра"
                  />
                </Group>
                <TextInput
                  label="Пошта"
                  placeholder="Введіть пошту"
                />

                <Text fz={20} fw={700}>Підкатегорії <Text fz={20} fw={700} span c="red">*</Text></Text>
                <TextInput placeholder="Кількість" type='number' w={'fit-content'} />

                <Text fz={20} fw={700}>Назва підкатегорії <Text fz={20} fw={700} span c="red">*</Text></Text>
                <TextInput placeholder="Введіть назву підкатегорії" />

                <Text fz={20} fw={700}>Опис <Text fz={20} fw={700} span c="red">*</Text></Text>
                <Textarea
                  styles={{
                    input: {
                      minHeight: "160px"
                    }
                  }}
                  placeholder="Введіть опис..."
                  withAsterisk
                />

                <Text fz={20} fw={700}>Посилання на зразок</Text>
                <TextInput
                  placeholder="https://"
                />

                <Text fz={20} fw={700}>Інструкція / додаткова інформація</Text>
                <Textarea
                  styles={{
                    input: {
                      minHeight: "160px"
                    }
                  }}
                  placeholder="Введіть текст..."
                  withAsterisk
                />

                <Text fz={20} fw={700}>Звернення</Text>
                <Flex className={styles.checkboxGroup} wrap={'wrap'} gap={64} align={'center'}>
                  <Checkbox label={'Завантажити файл'} />
                  <Checkbox label={'Текстове поле'} />
                </Flex>

                <Flex justify="end" wrap={'wrap'} gap={15}>
                  <CustomButton onClick={openDeleteModal} className={styles.deleteBtn}>
                    Видалити
                  </CustomButton>
                  <CustomButton onClick={createCategories} className={styles.successBtn}>
                    Зберегти
                  </CustomButton>
                  <SuccessModal opened={isSuccessModalOpen} close={closeSuccessModal} />
                  <DeleteModal opened={isDeleteModalOpen} close={closeDeleteModal} />
                </Flex>
              </Stack>
            </form>
          </Frame>
        </Container>
      </main>
    </PageLayout >
  )
}

export default CreateCategoryView
