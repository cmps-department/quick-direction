import { useMemo, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import useCreateForm from "../../hooks/useForm";

import { Container, Stack, Text, Group, Flex, Button, Box } from "@mantine/core";
import TextInput from "../../../../components/TextInput/TextInput";
import Select from "../../../../components/Select/Select";
import { Controller } from "react-hook-form";

import DocumentRequest from "../FormSections/DocumentRequest";
import WrittenRequest from "../FormSections/WrittenRequest";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import useGetCategories from "../../../CategoriesView/hooks/useGetCategories";
import { ISubCategory } from "../../../../interfaces/category.interface";

const RequestForm = () => {
    const [value, setValue] = useState<string | null>();
    const [opened, { open, close }] = useDisclosure(false);
    const {
        form: {
            register,
            control,
            formState: { errors },
            handleSubmit,
            watch
        },
        onSubmit
    } = useCreateForm();

    const { data } = useGetCategories();

    const categories = useMemo(() => {
        if (!data) return [];
        return data.map((category) => ({
            group: category.name,
            items: category.subDirections.map((subCategory) => ({ label: subCategory.name, value: subCategory.id?.toString() as string}))
        }))
    }, [data?.length]);
    
    const directionId = watch("directionId");

    const renderFormSections = () => {
        let subCategory: ISubCategory | undefined;

        data?.forEach((category) => {
            subCategory = category.subDirections.find(subCategory => subCategory.id === directionId) as ISubCategory | undefined;
        });

        if (!subCategory) return null;

        if (subCategory.downloadFile) {
            return <DocumentRequest />
        } else {
            return <WrittenRequest />
        }
    }

    return (
        <>
            <Container maw={1012} px={103} py={64}>
                <form>
                    <Stack gap={24}>
                        <Text fz={20} fw={700}>Введіть свої дані <Text fz={20} fw={700} span c="red">*</Text></Text>
                        <Group grow>
                            <TextInput
                                {...register("surname")}
                                error={errors.surname ? errors.surname.message : null}
                                label="Прізвище"
                                placeholder="Максилюк"
                                withAsterisk
                            />
                            <TextInput
                                {...register("name")}
                                error={errors.name ? errors.name.message : null}
                                label="Ім’я"
                                placeholder="Дмитро"
                                withAsterisk
                            />
                        </Group>
                        <Text fz={20} fw={700}>Введіть корпоративну електронну пошту <Text fz={20} fw={700} span c="red">*</Text></Text>
                        <TextInput
                            {...register("email")}
                            error={errors.email ? errors.email.message : null}
                            placeholder="Maksylyuk@infiz.edu.ua"
                            withAsterisk
                        />
                        <Text fz={20} fw={700}>Оберіть напрямок запиту <Text fz={20} fw={700} span c="red">*</Text></Text>
                        <Controller
                            name={"directionId"}
                            control={control}
                            render={({ field, fieldState }) => (
                                <Select
                                    value={field.value ? field.value.toString() : undefined}
                                    onChange={field.onChange}
                                    error={fieldState.error && fieldState.error.message}
                                    searchable
                                    allowDeselect={false}
                                    label="Прізвище та ім'я екзаменатора"
                                    placeholder="Вибрати зі списку"
                                    data={categories}
                                />
                            )}
                        />
                        {renderFormSections()}
                        <Flex justify="center">
                            <Button onClick={open} h={48} w={398} mt={48} radius="xl" color="#02808F">
                                Подати заявку
                            </Button>
                        </Flex>
                    </Stack>
                </form>
            </Container>
            <ConfirmModal opened={opened} close={close} />
        </>
    )
}

export default RequestForm;