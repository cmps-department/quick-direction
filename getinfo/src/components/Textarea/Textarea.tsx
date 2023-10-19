import { FC } from "react";
import { Textarea as MantineTextarea, TextareaProps } from "@mantine/core";
import classes from "./textarea.module.scss";

const Textarea: FC<TextareaProps> = ({...props}) => {
    return <MantineTextarea
        radius="xl"
        classNames={classes}
        {...props}
    />
}

export default Textarea;