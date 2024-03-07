import React, { useEffect } from "react";
import { Modal as ModalBase, ModalContentProps, ModalHeaderProps, ModalRootProps } from "@mantine/core";
import { useModalStore } from "@/store/modal.store";

type ModalProps = {
    children: React.ReactNode[] | React.ReactNode;
    triggers: (string | number)[];
    contentProps?: ModalContentProps;
    headerProps?: ModalHeaderProps;
} & Omit<ModalRootProps, "opened" | "onClose" | "onTransitionEnd">;

function ClearState() {
    const open = useModalStore((state) => state.open);
    const reset = useModalStore((state) => state.reset);

    useEffect(() => {
        return () => {
            !open && reset();
        };
    }, [open]);

    return null;
}

export default function Modal({ children, triggers, contentProps, headerProps, ...rest }: ModalProps) {
    const open = useModalStore((state) => state.open);
    const trigger = useModalStore((state) => state.trigger);
    const setClose = useModalStore((state) => state.setClose);

    const opened = open && triggers.includes(trigger);

    return (
        <ModalBase.Root keepMounted={false} opened={opened} onClose={setClose} zIndex={300} shadow="xl" radius="lg" {...rest}>
            <ModalBase.Overlay backgroundOpacity={0.5} />
            <ModalBase.Content miw={"fit-content"} p={"64px"} style={{ textAlign: "center" }} radius={"md"} {...contentProps}>
                <ClearState />
                <ModalBase.Body p={0}>{children}</ModalBase.Body>
            </ModalBase.Content>
        </ModalBase.Root>
    );
}
