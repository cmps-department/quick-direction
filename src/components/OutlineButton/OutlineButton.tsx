import { FC, MouseEventHandler } from "react";
import { Button, ButtonProps } from "@mantine/core";
import classes from "./outlineButton.module.scss";

interface OutlineButtonProps extends ButtonProps {
    onClick?: MouseEventHandler;
}

const OutlineButton: FC<OutlineButtonProps> = ({ children }) => {
    return (
        <Button classNames={classes} radius="xl" variant="outline">
            {children}
        </Button>
    )
}

export default OutlineButton;