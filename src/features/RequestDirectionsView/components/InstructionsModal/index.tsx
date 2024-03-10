import { FC } from "react";
import { Button, Modal, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

interface InstructionsModalProps {
    additionalInfo: string;
}

const InstructionsModal: FC<InstructionsModalProps> = ({ additionalInfo }) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Button
                onClick={open}
                variant="outline"
                color={"var(--accent-color)"}
                c={"var(--accent-color)"}
                style={{ borderWidth: "2px" }}
                radius={"xl"}
            >
                Інструкція
            </Button>

            <Modal
                opened={opened}
                onClose={close}
                withCloseButton={false}
                styles={{
                    content: {
                        minWidth: "930px",
                        padding: "64px",
                    },
                }}
            >
                <Stack gap={24}>
                    <Text fz={20} fw={700}>
                        Увага до обраного напряму!
                    </Text>
                    {additionalInfo}
                    <Button onClick={close} h={48} w={"100%"} radius="xl" color="#02808F">
                        Зрозуміло
                    </Button>
                </Stack>
            </Modal>
        </>
    );
};

export default InstructionsModal;
