import { useEffect, useMemo, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import useCreateForm from "../../hooks/useForm";

import { Container, Stack, Text, Group, Flex, Button, Box } from "@mantine/core";
import TextInput from "../../../../components/TextInput/TextInput";
import Select from "../../../../components/Select/Select";
import { Controller } from "react-hook-form";

import DocumentRequest from "../FormSections/DocumentRequest";
import WrittenRequest from "../FormSections/WrittenRequest";
import ConfirmModal from "../AdditionalInfoModal/AdditionalInfoModal";
import useGetCategories from "../../../CategoriesView/hooks/useGetCategories";
import { ISubCategory } from "../../../../interfaces/category.interface";
import { useSession } from "next-auth/react";

const RequestForm = () => {
    const { data: session } = useSession();
    const [opened, { open, close }] = useDisclosure(false);
    const [additionalInfo, setAdditionalInfo] = useState("");
    const {
        form: {
            control,
            setValue,
            handleSubmit,
            watch
        },
        onSubmit
    } = useCreateForm();

    const { data } = useGetCategories();

    useEffect(() => {
        setValue("email", session?.user.email!);
    }, [session]);

    const categories = useMemo(() => {
        if (!data) return [];
        return data.map((category) => ({
            group: category.name,
            items: category.subDirections.map((subCategory) => ({ label: subCategory.name, value: subCategory.id?.toString() as string}))
        }))
    }, [data?.length]);
    
    const directionId = watch("directionId");

    const FormSection = useMemo(() => {
        let subCategory: ISubCategory | undefined;

        data?.forEach((category) => {
            subCategory = category.subDirections.find(subCategory => subCategory.id == directionId) as ISubCategory | undefined;
        });

        if (!subCategory) return null;

        if (subCategory.downloadFile) {
            setAdditionalInfo(subCategory.additionalInfo);
            return <DocumentRequest
                examplelink={subCategory.examplelink}
                open={open}
            />
        } else {
            return <WrittenRequest />
        }
    }, [directionId]);

    return (
        <>
            <Container maw={1012} px={103} py={64}>
                <form>
                    <Stack gap={24}>
                        <Text fz={20} fw={700}>Введіть свої дані <Text fz={20} fw={700} span c="red">*</Text></Text>
                        <Group grow>
                            <Controller
                                name={"surname"}
                                control={control}
                                render={({ field, fieldState }) => (
                                    <TextInput
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={fieldState.error && fieldState.error.message}
                                        label="Прізвище"
                                        placeholder="Максилюк"
                                        withAsterisk
                                    />
                                )}
                            />
                            <Controller
                                name={"name"}
                                control={control}
                                render={({ field, fieldState }) => (
                                    <TextInput
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={fieldState.error && fieldState.error.message}
                                        label="Ім’я"
                                        placeholder="Дмитро"
                                        withAsterisk
                                    />
                                )}
                            />
                        </Group>
                        <Text fz={20} fw={700}>Введіть корпоративну електронну пошту <Text fz={20} fw={700} span c="red">*</Text></Text>
                        <Controller
                            name={"email"}
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextInput
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={fieldState.error && fieldState.error.message}
                                    placeholder="Maksylyuk@infiz.edu.ua"
                                    withAsterisk
                                    defaultValue={session?.user.email}
                                />
                            )}
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
                                    nothingFoundMessage={"Напрямок не знайдено"}
                                    allowDeselect={false}
                                    label="Прізвище та ім'я екзаменатора"
                                    placeholder="Вибрати зі списку"
                                    data={categories}
                                />
                            )}
                        />
                        {FormSection}
                        <Flex justify="center">
                            <Button onClick={open} h={48} w={398} mt={48} radius="xl" color="#02808F">
                                Подати заявку
                            </Button>
                        </Flex>
                    </Stack>
                </form>
            </Container>
            <ConfirmModal additionalInfo={additionalInfo} opened={opened} close={close} />
        </>
    )
}

export default RequestForm;