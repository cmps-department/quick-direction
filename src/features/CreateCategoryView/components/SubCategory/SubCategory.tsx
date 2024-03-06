import React from 'react';
import { FieldErrors } from 'react-hook-form/dist/types';
import { Flex, Text } from '@mantine/core';
import TextInput from '../../../../components/TextInput/TextInput';
import Textarea from '../../../../components/Textarea/Textarea';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import { ICreateSubCategory } from '../../../../interfaces/category.interface';

interface ISubCategory {
  subC: ICreateSubCategory | undefined;
  register: any;
  index: number;
  errors: FieldErrors;
}

const SubCategory = ({ register, errors, index, subC }: ISubCategory) => {
  return (
    <>
      <Text fz={20} fw={700}>
        Назва підкатегорії{' '}
        <Text fz={20} fw={700} span c="red">
          *
        </Text>
      </Text>
      <TextInput
        error={errors[`nameSD_${index}`]?.message ? errors[`nameSD_${index}`]?.message?.toString() : null}
        req={register(`nameSD_${index}`)}
        defaultValue={subC?.name}
        placeholder="Введіть назву підкатегорії"
      />

      <Text fz={20} fw={700}>
        Опис{' '}
        <Text fz={20} fw={700} span c="red">
          *
        </Text>
      </Text>
      <Textarea
        error={errors[`descriptionSD_${index}`]?.message ? errors[`descriptionSD_${index}`]?.message?.toString() : null}
        req={register(`descriptionSD_${index}`)}
        styles={{
          input: {
            minHeight: '160px',
          },
        }}
        defaultValue={subC?.description}
        placeholder="Введіть опис..."
        withAsterisk
      />

      <Text fz={20} fw={700}>
        Посилання на зразок
      </Text>
      <TextInput req={register(`examplelinkSD_${index}`)} defaultValue={subC?.examplelink} placeholder="https://" />

      <Text fz={20} fw={700}>
        Інструкція / додаткова інформація
      </Text>
      <Textarea
        req={register(`additionalInfoSD_${index}`)}
        styles={{
          input: {
            minHeight: '160px',
          },
        }}
        defaultValue={subC?.additionalInfo}
        placeholder="Введіть текст..."
        withAsterisk
      />

      <Text fz={20} fw={700}>
        Звернення
      </Text>
      <Flex wrap={'wrap'} gap={64} align={'center'}>
        <Checkbox req={register(`downloadFileSD_${index}`)} isChecked={subC?.downloadFile} label={'Завантажити файл'} />
        <Checkbox req={register(`textFieldSD_${index}`)} isChecked={subC?.textField} label={'Текстове поле'} />
      </Flex>
    </>
  );
};

export default SubCategory;
