import { FC } from "react";
import { Button, Modal, Stack, Text } from "@mantine/core";


interface AdditionalInfoModal {
    opened: boolean;
    close: () => void;
    additionalInfo: string;
}

const AdditionalInfoModal: FC<AdditionalInfoModal> = ({ opened, close, additionalInfo }) => {
    return (
        <Modal
            opened={opened}
            onClose={close}
            withCloseButton={false}
            styles={{
                content: {
                    minWidth: "930px",
                    padding: "64px"
                }
            }}
        >
            <Stack gap={24}>
                <Text fz={20} fw={700}>Увага до обраного напряму!</Text>
                {additionalInfo}
                <Button onClick={close} h={48} w={"100%"} radius="xl" color="#02808F">
                    Зрозуміло
                </Button>
            </Stack>
        </Modal>
    )
} 

export default AdditionalInfoModal;