import { useEffect } from "react";
import useEditForm, { subCategoryDefaultValue } from "../../hooks/useForm";
import { Controller, FormProvider } from "react-hook-form";
import { Box, ColorInput, Divider, Group, Stack, Text } from "@mantine/core";
import Textarea from "@/components/Textarea/Textarea";
import TextInput from "@/components/TextInput/TextInput";
import CustomButton from "@/components/CustomButton";

import classes from "./styles.module.scss";
import EditSubCategoryForm from "../EditSubcategoryForm";
import { useRouter } from "next/router";
import useData from "@/hooks/useData";
import Loading from "@/components/Loading";

const EditCategoryForm = () => {
    const { form, onSubmit } = useEditForm();
    const router = useRouter();
    const { id } = router.query;

    const { data, isLoading } = useData<IGetCategory>({
        queryKey: ["CATEGORIES", { id }],
        path: `/api/directions/${id}`,
    });

    useEffect(() => {
        if (data) form.reset({ ...data });
    }, [data]);

    const subcategories = form.watch("subDirections");

    return (
        <Box pos={"relative"}>
            <Loading visible={isLoading} />
            <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <Stack gap={24}>
                        <Group align={"center"} justify={"space-between"}>
                            <Text fz={28} fw={700}>
                                Редагування категорії
                            </Text>
                            <Controller
                                name={"color"}
                                control={form.control}
                                render={({ field, fieldState }) => (
                                    <ColorInput
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={fieldState.error && fieldState.error.message}
                                        radius="xl"
                                        placeholder="Колір категорії"
                                    />
                                )}
                            />
                        </Group>

                        <Divider style={{ borderTop: "4px solid #02808F", marginBottom: "24px" }} maw={608} w="100%" />

                        <Text fz={20} fw={700}>
                            Назва категорії{" "}
                            <Text fz={20} fw={700} span c="red">
                                *
                            </Text>
                        </Text>
                        <Controller
                            name={"name"}
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <TextInput
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={fieldState.error && fieldState.error.message}
                                    placeholder="Введіть назву категорії"
                                    withAsterisk
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
                            name={"description"}
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
                            Відповідальний викладач{" "}
                            <Text fz={20} fw={700} span c="red">
                                *
                            </Text>
                        </Text>
                        <Controller
                            name={"professor"}
                            control={form.control}
                            render={({ field, fieldState }) => (
                                <TextInput
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={fieldState.error && fieldState.error.message}
                                    label="Пошта"
                                    placeholder="Введіть пошту"
                                />
                            )}
                        />

                        <Group mb={24} align="center" justify="space-between">
                            <Text fz={20} fw={700}>
                                Підкатегорії{" "}
                                <Text fz={20} fw={700} span c="red">
                                    *
                                </Text>
                            </Text>
                            <CustomButton
                                onClick={() => form.setValue("subDirections", [...subcategories, subCategoryDefaultValue])}
                                className={classes.successBtn}
                            >
                                Додати підкатегорію
                            </CustomButton>
                        </Group>

                        {subcategories.map((_, idx) => (
                            <EditSubCategoryForm key={idx} id={idx} />
                        ))}

                        <Group justify="end" wrap={"wrap"} gap={15}>
                            <CustomButton type="submit" className={classes.successBtn}>
                                Зберегти
                            </CustomButton>
                        </Group>
                    </Stack>
                </form>
            </FormProvider>
        </Box>
    );
};

export default EditCategoryForm;
