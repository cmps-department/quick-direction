import { FC } from "react";
import { TextInput as MantineTextInput, TextInputProps } from "@mantine/core";
import classes from "./textInput.module.scss";

interface IReg {
    req?: any
}

const TextInput: FC<IReg & TextInputProps> = ({ req, ...props }) => {
    return <MantineTextInput
        {...req} 
        radius="xl"
        styles={{
            error: {
                marginLeft: 12
            }
        }}
        classNames={classes} {...props}
    />
}

export default TextInput;