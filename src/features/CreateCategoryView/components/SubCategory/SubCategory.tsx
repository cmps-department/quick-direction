import { Flex, Text } from '@mantine/core';
import React from 'react';
import TextInput from '../../../../components/TextInput/TextInput';
import Textarea from '../../../../components/Textarea/Textarea';
import Checkbox from '../../../../components/Checkbox/Checkbox';

const SubCategory = ({ register }: any) => {
    return (
        <>
            <Text fz={20} fw={700}>Назва підкатегорії <Text fz={20} fw={700} span c="red">*</Text></Text>
            <TextInput
                req={register('nameSD', {
                    required: false,
                    minLength: {
                        value: 2,
                        message: 'Мінімум 2 символи!'
                    },
                    maxLength: {
                        value: 50,
                        message: 'Максимум 50 символів!'
                    },
                })}
                placeholder="Введіть назву підкатегорії"
            />

            <Text fz={20} fw={700}>Опис <Text fz={20} fw={700} span c="red">*</Text></Text>
            <Textarea
                req={register('descriptionSD', {
                    required: false,
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

            <Text fz={20} fw={700}>Посилання на зразок</Text>
            <TextInput
                req={register('examplelinkSD', {
                    required: false,
                    minLength: {
                        value: 2,
                        message: 'Мінімум 2 символи!'
                    },
                    maxLength: {
                        value: 50,
                        message: 'Максимум 50 символів!'
                    },
                    pattern: {
                        value: /^(https?:\/\/)/,
                        message: 'Поле не соответсвует формату посилання!'
                    }
                })}
                placeholder="https://"
            />


            <Text fz={20} fw={700}>Інструкція / додаткова інформація</Text>
            <Textarea
                req={register('additionalInfoSD', {
                    required: false
                })}
                styles={{
                    input: {
                        minHeight: "160px"
                    }
                }}
                placeholder="Введіть текст..."
                withAsterisk
            />

            <Text fz={20} fw={700}>Звернення</Text>
            <Flex wrap={'wrap'} gap={64} align={'center'}>
                <Checkbox
                    label={'Завантажити файл'}
                />
                <Checkbox
                    label={'Текстове поле'}
                />
            </Flex>

        </>
    )
}

export default SubCategory
