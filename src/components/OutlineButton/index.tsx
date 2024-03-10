import { FC, MouseEventHandler } from "react";
import { Button, ButtonProps } from "@mantine/core";
import classes from "./styles.module.scss";

interface OutlineButtonProps extends ButtonProps {
  onClick?: MouseEventHandler;
}

const OutlineButton: FC<OutlineButtonProps> = ({ children, ...props }) => {
    return (
        <Button classNames={classes} {...props} radius="xl" variant="outline">
            {children}
        </Button>
    );
};

export default OutlineButton;
