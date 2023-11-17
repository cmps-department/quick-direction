import { Flex, Text } from '@mantine/core';
import React from 'react';
import TextInput from '../../../../components/TextInput/TextInput';
import Textarea from '../../../../components/Textarea/Textarea';
import Checkbox from '../../../../components/Checkbox/Checkbox';
import { ICreateSubCategory } from '../../../../interfaces/category.interface';

interface ISubCategory {
    subC: ICreateSubCategory | undefined,
    register: any,
    index: number
}

const SubCategory = ({ register, index, subC }: ISubCategory) => {

    return (
        <>
            <Text fz={20} fw={700}>Назва підкатегорії <Text fz={20} fw={700} span c="red">*</Text></Text>
            <TextInput
                req={register(`nameSD_${index}`, {
                    required: true,
                    minLength: {
                        value: 2,
                        message: 'Мінімум 2 символи!'
                    },
                    maxLength: {
                        value: 50,
                        message: 'Максимум 50 символів!'
                    },
                })}
                defaultValue={subC?.name}
                placeholder="Введіть назву підкатегорії"
            />

            <Text fz={20} fw={700}>Опис <Text fz={20} fw={700} span c="red">*</Text></Text>
            <Textarea
                req={register(`descriptionSD_${index}`, {
                    required: true,
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
                defaultValue={subC?.description}
                placeholder="Введіть опис..."
                withAsterisk
            />

            <Text fz={20} fw={700}>Посилання на зразок</Text>
            <TextInput
                req={register(`examplelinkSD_${index}`, {
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
                defaultValue={subC?.examplelink}
                placeholder="https://"
            />


            <Text fz={20} fw={700}>Інструкція / додаткова інформація</Text>
            <Textarea
                req={register(`additionalInfoSD_${index}`, {
                    required: false
                })}
                styles={{
                    input: {
                        minHeight: "160px"
                    }
                }}
                defaultValue={subC?.additionalInfo}
                placeholder="Введіть текст..."
                withAsterisk
            />

            <Text fz={20} fw={700}>Звернення</Text>
            <Flex wrap={'wrap'} gap={64} align={'center'}>
                <Checkbox
                    req={register(`downloadFileSD_${index}`, {
                        required: false
                    })}
                    isChecked={subC?.downloadFile}
                    label={'Завантажити файл'}
                />
                <Checkbox
                    req={register(`textFieldSD_${index}`, {
                        required: false
                    })}
                    isChecked={subC?.textField}
                    label={'Текстове поле'}
                />
            </Flex>

        </>
    )
}

export default SubCategory
