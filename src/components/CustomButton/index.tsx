import React, { FC, PropsWithChildren } from "react";
import styles from "./styles.module.scss";
import { Button } from "@mantine/core";

interface IButton {
    onClick?: React.MouseEventHandler;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    type?: "button" | "submit";
}

const CustomButton: FC<PropsWithChildren<IButton>> = ({ children, onClick = () => {}, className = "", style, disabled = false, type = "button" }) => {
    if (disabled) {
        return (
            <Button className={`${styles.isDisabled}`} style={{ style }}>
                {children}
            </Button>
        );
    }
    return (
        <Button className={`${styles.customBtn} ${className}`} style={{ style }} onClick={onClick} type={type}>
            {children}
        </Button>
    );
};

export default CustomButton;
