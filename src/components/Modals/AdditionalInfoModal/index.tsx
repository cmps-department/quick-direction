import React, { FC, ReactNode } from "react";
import { Button, Stack, Text } from "@mantine/core";
import { useModalStore } from "@/store/modal.store";

interface IDeleteModal {
    text: (payload: any) => string | React.ReactNode;
    children?: ReactNode;
}

const AdditionalInfoModal: FC<IDeleteModal> = ({ text, children }) => {
    const payload = useModalStore((state) => state.payload);
    const setClose = useModalStore((state) => state.setClose);

    return (
        <Stack gap={24}>
            <Text fz={20} fw={700}>
                Увага до обраного напряму!
            </Text>
            {children || <Text>{text(payload)}</Text>}
            <Button onClick={setClose} h={48} w={"100%"} radius="xl" color="#02808F">
                Зрозуміло
            </Button>
        </Stack>
    );
};

export default AdditionalInfoModal;
