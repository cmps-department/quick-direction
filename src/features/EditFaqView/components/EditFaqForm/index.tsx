import useEditForm from "../hooks/useForm";
import { Controller } from "react-hook-form";
import { Button, Divider, Group, Stack, Text } from "@mantine/core";
import Textarea from "@/components/Textarea/Textarea";
import TextInput from "@/components/TextInput/TextInput";

import classes from "./styles.module.scss";
import Select from "@/components/Select";
import { useModalStore } from "@/store/modal.store";
import { Modals } from "@/components/Modals/data/modals";
import useData from "@/hooks/useData";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import { useEffect } from "react";

const selectData = [
    { label: "Загальна Інформація", value: "General" },
    { label: "Подача Заявок", value: "Application" },
    { label: "Взаємодія з Дирекцією", value: "Administration" },
    { label: "Технічні Питання", value: "Technical" },
];

const EditFaqForm = () => {
    const { form, onSubmit } = useEditForm();
    const setOpen = useModalStore((state) => state.setOpen);

    const router = useRouter();
    const { id } = router.query;
    const { data, isLoading } = useData<IFaqResponse>({
        queryKey: ["FAQ", { id }],
        path: `/api/faq/${id}`,
    });

    useEffect(() => {
        if (data) {
            form.reset({ ...data });
        }
    }, [data]);

    return (
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack gap={24} pos={"relative"}>
                <Loading visible={isLoading} />
                <Group align={"center"} justify={"space-between"}>
                    <Text fz={28} fw={700}>
                        Редагування питання з відповіддю
                    </Text>
                </Group>

                <Divider style={{ borderTop: "4px solid #02808F", marginBottom: "24px" }} maw={608} w="100%" />

                <Text fz={20} fw={700}>
                    Тип питання{" "}
                    <Text fz={20} fw={700} span c="red">
                        *
                    </Text>
                </Text>
                <Controller
                    name={"questionType"}
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Select
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error && fieldState.error.message}
                            allowDeselect={false}
                            placeholder="Загальні питання"
                            data={selectData}
                        />
                    )}
                />

                <Text fz={20} fw={700}>
                    Текст питання{" "}
                    <Text fz={20} fw={700} span c="red">
                        *
                    </Text>
                </Text>
                <Controller
                    name={"question"}
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <TextInput
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error && fieldState.error.message}
                            placeholder="Введіть текст питання..."
                            withAsterisk
                        />
                    )}
                />

                <Text fz={20} fw={700}>
                    Текст відповіді{" "}
                    <Text fz={20} fw={700} span c="red">
                        *
                    </Text>
                </Text>
                <Controller
                    name={"answer"}
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <Textarea
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error && fieldState.error.message}
                            placeholder="Введіть текст відповіді..."
                            styles={{
                                input: {
                                    minHeight: "160px",
                                },
                            }}
                        />
                    )}
                />

                <Text fz={20} fw={700}>
                    Посилання на зразок
                </Text>
                <Controller
                    name={"documentLink"}
                    control={form.control}
                    render={({ field, fieldState }) => (
                        <TextInput
                            value={field.value}
                            onChange={field.onChange}
                            error={fieldState.error && fieldState.error.message}
                            placeholder="https://"
                            withAsterisk
                        />
                    )}
                />

                <Group justify="end" wrap={"wrap"} gap={15}>
                    <Button
                        variant="outline"
                        fz={18}
                        fw={600}
                        w={160}
                        h={48}
                        radius={"xl"}
                        color={"var(--red-color)"}
                        className={classes.deleteBtn}
                        onClick={() =>
                            setOpen({
                                trigger: Modals.DELETE,
                                payload: {
                                    id,
                                    name: data?.question,
                                },
                            })
                        }
                    >
                        Видалити
                    </Button>
                    <Button type="submit" fz={18} fw={600} w={300} h={48} radius={"xl"} color={"var(--accent-color)"} className={classes.createBtn}>
                        Зберегти
                    </Button>
                </Group>
            </Stack>
        </form>
    );
};

export default EditFaqForm;
