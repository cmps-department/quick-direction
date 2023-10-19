import { FC } from "react";
import { TextInput as MantineTextInput, TextInputProps } from "@mantine/core";
import classes from "./textInput.module.scss";

const TextInput: FC<TextInputProps> = ({...props}) => {
    return <MantineTextInput radius="xl" classNames={classes} {...props} />
}

export default TextInput;