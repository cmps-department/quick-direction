import { Button, Group, Stack, Text } from "@mantine/core";
import Image from "next/image";
import React, { FC, ReactNode } from "react";
import { useModalStore } from "@/store/modal.store";

import styles from "./delete.module.scss";

interface IDeleteModal {
    onConfirm: (payload: any) => Promise<unknown>;
    text: (payload: any) => string | React.ReactNode;
    loading: boolean;
    children?: ReactNode;
}

const DeleteModal: FC<IDeleteModal> = ({ onConfirm, text, loading, children }) => {
    const payload = useModalStore((state) => state.payload);
    const setClose = useModalStore((state) => state.setClose);

    const handleSubmit = async () => {
        await onConfirm(payload);
        setClose();
    };

    return (
        <Stack align="center" gap={24}>
            <Image width={95} height={95} src="/images/Delete.png" alt="Success" />
            {children || (
                <Text c={"var(--red-color)"} fz={20} fw={700}>
                    {text(payload)}
                </Text>
            )}
            <Group>
                <Button
                    fz={18}
                    fw={600}
                    w={138}
                    h={48}
                    radius={"xl"}
                    color={"var(--accent-color)"}
                    loading={loading}
                    className={styles.cancelBtn}
                    onClick={setClose}
                >
                    Відміна
                </Button>
                <Button
                    fz={18}
                    fw={600}
                    w={97}
                    h={48}
                    radius={"xl"}
                    color={"var(--red-color)"}
                    loading={loading}
                    className={styles.yesBtn}
                    onClick={handleSubmit}
                >
                    Так
                </Button>
            </Group>
        </Stack>
    );
};

export default DeleteModal;
