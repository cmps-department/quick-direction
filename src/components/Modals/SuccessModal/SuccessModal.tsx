import { useModalStore } from "@/store/modal.store";
import { Stack, Text } from "@mantine/core";
import Image from "next/image";
import React, { FC, ReactNode, useEffect } from "react";

interface ISuccessModal {
    onSuccess: () => void;
    text: (payload: any) => string | React.ReactNode;
    children?: ReactNode;
}

const SuccessModal: FC<ISuccessModal> = ({ onSuccess, text, children }) => {
    const payload = useModalStore((state) => state.payload);
    const setClose = useModalStore((state) => state.setClose);
    const open = useModalStore((state) => state.open);

    useEffect(() => {
        if (open) {
            const timeoutId = setTimeout(() => {
                setClose();
                onSuccess();
            }, 1500);

            return () => clearTimeout(timeoutId);
        }
    }, []);

    return (
        <Stack align="center" gap={24}>
            <Image width={95} height={95} src="/images/Success.png" alt="Success" />
            <Text c={"var(--accent-color)"} fz={20} fw={700}>
                Готово!
            </Text>
            {children || (
                <Text c={"var(--dark-color)"} fz={18} fw={400}>
                    {text(payload)}
                </Text>
            )}
        </Stack>
    );
};

export default SuccessModal;
