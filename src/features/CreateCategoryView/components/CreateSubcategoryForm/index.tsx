import React, { FC } from "react";
import { Divider, Flex, Space, Stack, Text } from "@mantine/core";
import TextInput from "../../../../components/TextInput/TextInput";
import Textarea from "../../../../components/Textarea/Textarea";
import Checkbox from "../../../../components/Checkbox/Checkbox";
import { CategoryFormState } from "../../hooks/useForm";
import { Controller, useFormContext } from "react-hook-form";

interface CreateSubCategoryFormProps {
    id: number;
}

const CreateSubCategoryForm: FC<CreateSubCategoryFormProps> = ({ id }) => {
    const form = useFormContext<CategoryFormState>();

    return (
        <Stack gap={24}>
            <Space h="xl" />
            <Text fz={20} fw={700}>
                Назва підкатегорії{" "}
                <Text fz={20} fw={700} span c="red">
                    *
                </Text>
            </Text>
            <Controller
                name={`subDirections.${id}.name`}
                control={form.control}
                render={({ field, fieldState }) => (
                    <TextInput
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error && fieldState.error.message}
                        placeholder="Введіть назву підкатегорії"
                    />
                )}
            />

            <Text fz={20} fw={700}>
                Опис{" "}
                <Text fz={20} fw={700} span c="red">
                    *
                </Text>
            </Text>
            <Controller
                name={`subDirections.${id}.description`}
                control={form.control}
                render={({ field, fieldState }) => (
                    <Textarea
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error && fieldState.error.message}
                        styles={{
                            input: {
                                minHeight: "160px",
                            },
                        }}
                        placeholder="Введіть опис..."
                    />
                )}
            />

            <Text fz={20} fw={700}>
                Посилання на зразок
            </Text>
            <Controller
                name={`subDirections.${id}.examplelink`}
                control={form.control}
                render={({ field, fieldState }) => (
                    <TextInput
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error && fieldState.error.message}
                        placeholder="https://"
                    />
                )}
            />

            <Text fz={20} fw={700}>
                Інструкція / додаткова інформація
            </Text>
            <Controller
                name={`subDirections.${id}.additionalInfo`}
                control={form.control}
                render={({ field, fieldState }) => (
                    <Textarea
                        value={field.value}
                        onChange={field.onChange}
                        error={fieldState.error && fieldState.error.message}
                        styles={{
                            input: {
                                minHeight: "160px",
                            },
                        }}
                        placeholder="Введіть текст..."
                    />
                )}
            />

            <Text fz={20} fw={700}>
                Звернення
            </Text>
            <Flex wrap={"wrap"} gap={64} align={"center"}>
                <Controller
                    name={`subDirections.${id}.downloadFile`}
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Checkbox
                            checked={field.value}
                            onChange={(e) => field.onChange(e.currentTarget.checked)}
                            error={fieldState.error && fieldState.error.message}
                            label={"Завантажити файл"}
                        />
                    )}
                />
                <Controller
                    name={`subDirections.${id}.textField`}
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Checkbox
                            checked={field.value}
                            onChange={(e) => field.onChange(e.currentTarget.checked)}
                            error={fieldState.error && fieldState.error.message}
                            label={"Текстове поле"}
                        />
                    )}
                />
            </Flex>
            <Space h="sm" />
            <Divider my="sm" />
        </Stack>
    );
};

export default CreateSubCategoryForm;
