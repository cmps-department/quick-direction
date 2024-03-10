import { FC } from "react";
import { Select as MantineSelect, SelectProps } from "@mantine/core";
import { Icon } from "@iconify/react";
import classes from "./styles.module.scss";

const Select: FC<SelectProps> = ({ ...props }) => {
    return <MantineSelect radius="xl" rightSection={<Icon width={18} height={18} icon="ep:arrow-down-bold" />} classNames={classes} {...props} />;
};

export default Select;
