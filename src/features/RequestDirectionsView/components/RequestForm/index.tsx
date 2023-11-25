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
import SuccessModal from "../../../../components/SuccessModal/SuccessModal";

const RequestForm = () => {
    const { data: session } = useSession();
    const [opened, { open, close }] = useDisclosure(false);
    const [isSuccessModalOpen, { open: openSuccessModal, close: closeSuccessModal }] = useDisclosure(false);
    const [additionalInfo, setAdditionalInfo] = useState("");
    const {
        form: {
            control,
            setValue,
            getValues,
            handleSubmit,
            formState: { errors },
            watch
        },
        onSubmit
    } = useCreateForm({openSuccessModal});

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
    
    const subDirectionId = watch("subDirectionId");
    const document = watch("document");

    const FormSection = useMemo(() => {
        let subCategory: ISubCategory | undefined;

        data?.forEach((category) => {
            if (subCategory) return;
            subCategory = category.subDirections.find(subCategory => subCategory.id == subDirectionId) as ISubCategory | undefined;
        });

        if (!subCategory) return null;

        if (subCategory.downloadFile) {
            setAdditionalInfo(subCategory.additionalInfo);
            return <DocumentRequest
                examplelink={subCategory.examplelink}
                open={open}
                value={getValues("document")}
                setValue={setValue}
                fieldError={errors.document}
            />
        } else {
            return <WrittenRequest control={control} />
        }
    }, [subDirectionId, errors, document]);

    return (
        <>
            <Container maw={1012} px={103} py={64}>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                            name={"subDirectionId"}
                            control={control}
                            render={({ field, fieldState }) => (
                                <Select
                                    value={field.value ? field.value.toString() : undefined}
                                    onChange={value => {
                                        field.onChange(parseInt(value!));
                                        setValue("directionId", data?.find(direction =>
                                            direction.subDirections.find(subDirection => subDirection.id === parseInt(value as string))
                                        )?.id!);
                                    }}
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
                            <Button type="submit" h={48} w={398} mt={48} radius="xl" color="#02808F">
                                Подати заявку
                            </Button>
                        </Flex>
                    </Stack>
                </form>
            </Container>
            <ConfirmModal additionalInfo={additionalInfo} opened={opened} close={close} />
            <SuccessModal opened={isSuccessModalOpen} close={closeSuccessModal} text="Категорія успішно додана" />
        </>
    )
}

export default RequestForm;