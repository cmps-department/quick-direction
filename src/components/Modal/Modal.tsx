import { ReactNode } from "react";
import { Modal as ModalBase, Text } from "@mantine/core";

type ModalProps = {
    title: string;
    opened: boolean;
    onClose: () => void;
    children: ReactNode
};

export default function Modal({ title, opened, onClose, children }: ModalProps) {
    return (
        <ModalBase.Root opened={opened} onClose={onClose} centered>
            <ModalBase.Overlay opacity={0.2} />
            <ModalBase.Content radius={10} pt={24} pb={24}>
                <ModalBase.Header pb={29} pt={0}>
                    <ModalBase.Title w={'100%'}>
                        <Text fz={14} fw={700}>{title}</Text>
                    </ModalBase.Title>
                </ModalBase.Header>
                { children }
            </ModalBase.Content>
        </ModalBase.Root>
    );
}