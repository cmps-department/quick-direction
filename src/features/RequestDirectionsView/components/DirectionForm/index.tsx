import { Container, Stack, Text, Group, Flex, Button } from "@mantine/core";
import TextInput from "../../../../components/TextInput/TextInput";
import Select from "../../../../components/Select/Select";
import ExtraPoints from "../FormSections/ExtraPoints";
import WrittenRequest from "../FormSections/WrittenRequest";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import ConfirmModal from "../ConfirmModal/ConfirmModal";

const directions = [
    {value: "1", label: "Запит на нарахування додаткових балів"},
    {value: "2", label: "Письмове звернення"},
]

const FormSections = {
    "1": ExtraPoints,
    "2": WrittenRequest
}

const DirectionForm = () => {
    const [value, setValue] = useState<string | null>();
    const [opened, { open, close }] = useDisclosure(false);

    const FormSection = FormSections[value as keyof typeof FormSections];

    return (
        <>
            <Container maw={1012} px={103} py={64}>
                <form>
                    <Stack gap={24}>
                        <Text fz={20} fw={700}>Введіть свої дані <Text fz={20} fw={700} span c="red">*</Text></Text>
                        <Group grow>
                            <TextInput
                                label="Прізвище"
                                placeholder="Максилюк"
                                withAsterisk
                            />
                            <TextInput
                                label="Ім’я"
                                placeholder="Дмитро"
                                withAsterisk
                            />
                        </Group>
                        <Text fz={20} fw={700}>Введіть корпоративну електронну пошту <Text fz={20} fw={700} span c="red">*</Text></Text>
                        <TextInput
                            placeholder="Maksylyuk@infiz.edu.ua"
                            withAsterisk
                        />
                        <Text fz={20} fw={700}>Оберіть напрямок запиту <Text fz={20} fw={700} span c="red">*</Text></Text>
                        <Select
                            value={value}
                            onChange={setValue}
                            placeholder="Оберіть напрямок"
                            data={directions}
                        />
                        {FormSection ? <FormSection /> : null }
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

export default DirectionForm;