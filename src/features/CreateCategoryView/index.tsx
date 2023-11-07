import React, { FC, useState } from 'react';
import PageLayout from '../../layouts/PageLayout';
import Frame from '../../components/Frame/Frame';
import LayoutHF from '../../layouts/LayoutHF';
import { Flex, Group, Stack, Text } from '@mantine/core';
import TextInput from '../../components/TextInput/TextInput';
import Textarea from '../../components/Textarea/Textarea';
import OutlineButton from '../../components/OutlineButton/OutlineButton';
import CustomButton from '../../components/CustomButton/CustomButton';
import Checkbox from '../../components/Checkbox/Checkbox';
import { useDisclosure } from '@mantine/hooks';
import SuccessModal from './components/SuccessModal/SuccessModal';
import DeleteModal from './components/DeleteModal/DeleteModal';
import Container from '../../components/Container/Container';

import styles from './createC.module.scss';
import Navbar from '../header/components/Navbar/Navbar';

interface IDirection {
  name: string,
  description: string,
  professors: string[],
  subDirection: SubDirection[]
}

interface SubDirection {
  name: string,
  additionalInfo: string,
  examplelink: string,
  additionallink: string,
  validationField: string,
  directionId: number
}

const CreateCategoryView: FC = () => {

  const [direction, useDirection] = useState<IDirection>({
    name: '',
    description: '',
    professors: [],
    subDirection: []
  });

  const [isSuccessModalOpen, { open: openSuccessModal, close: closeSuccessModal }] = useDisclosure(false);
  const [isDeleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] = useDisclosure(false);


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
                  withAsterisk />
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
                  <CustomButton onClick={openSuccessModal} className={styles.successBtn}>
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
