import { FC } from "react";
import { TextInput as MantineTextInput, TextInputProps } from "@mantine/core";
import classes from "./styles.module.scss";

const TextInput: FC<TextInputProps> = ({ ...props }) => {
    return (
        <MantineTextInput
            radius="xl"
            styles={{
                error: {
                    marginLeft: 12,
                },
            }}
            classNames={classes}
            {...props}
        />
    );
};

export default TextInput;
