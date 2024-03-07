import { useEffect, useState } from "react";
import useCreateForm, { subCategoryDefaultValue } from "../../hooks/useForm";
import { Controller, FormProvider } from "react-hook-form";
import { ColorInput, Divider, Group, NumberInput, Stack, Text } from "@mantine/core";
import Textarea from "@/components/Textarea/Textarea";
import TextInput from "@/components/TextInput/TextInput";
import ArrowButtons from "../ArrowButtons/ArrowButtons";
import CustomButton from "@/components/CustomButton/CustomButton";

import classes from "./styles.module.scss";
import CreateSubCategoryForm from "../CreateSubcategoryForm";

const CreateCategoryForm = () => {
    const [quantity, setQuantity] = useState(1);
    const { form, onSubmit } = useCreateForm();

    const subcategories = form.watch("subDirections");

    useEffect(() => {
        const formState = form.getValues("subDirections");

        if (quantity > formState.length) {
            form.setValue("subDirections", [...formState, subCategoryDefaultValue]);
        } else {
            formState.pop();
            form.setValue("subDirections", formState);
        }
    }, [quantity]);

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Stack gap={24}>
                    <Group align={"center"} justify={"space-between"}>
                        <Text fz={28} fw={700}>
                            Нова категорія
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

                    <Text fz={20} fw={700}>
                        Підкатегорії{" "}
                        <Text fz={20} fw={700} span c="red">
                            *
                        </Text>
                    </Text>
                    <NumberInput
                        className={classes.inputNumber}
                        value={quantity || 1}
                        onChange={(value) => setQuantity(typeof value === "string" ? parseInt(value) || 1 : value)}
                        rightSection={<ArrowButtons setAmountSub={setQuantity} />}
                        placeholder="Кількість"
                        clampBehavior="strict"
                        radius={"xl"}
                        min={1}
                    />

                    {subcategories.map((_, idx) => (
                        <CreateSubCategoryForm key={idx} id={idx} />
                    ))}

                    <Group justify="end" wrap={"wrap"} gap={15}>
                        <CustomButton type="submit" className={classes.successBtn}>
                            Зберегти
                        </CustomButton>
                    </Group>
                </Stack>
            </form>
        </FormProvider>
    );
};

export default CreateCategoryForm;
