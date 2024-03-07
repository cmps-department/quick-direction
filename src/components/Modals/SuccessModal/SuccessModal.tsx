import { useModalStore } from "@/store/modal.store";
import { Stack, Text } from "@mantine/core";
import Image from "next/image";
import React, { FC, useEffect } from "react";

interface ISuccessModal {
    onSuccess: () => void;
    text: string | React.ReactNode;
}

const SuccessModal: FC<ISuccessModal> = ({ onSuccess, text }) => {
    const setClose = useModalStore((state) => state.setClose);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setClose();
            onSuccess();
        }, 1500);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <Stack align="center" gap={24}>
            <Image width={95} height={95} src="/images/Success.png" alt="Success" />
            <Text c={"var(--accent-color)"} fz={20} fw={700}>
                Готово!
            </Text>
            <Text c={"var(--dark-color)"} fz={18} fw={400}>
                {text}
            </Text>
        </Stack>
    );
};

export default SuccessModal;
