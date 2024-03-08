import { Paper } from "@mantine/core";
import React, { FC } from "react";

interface IFrame {
    children: React.ReactNode;
    className?: string;
}

const Frame: FC<IFrame> = ({ children, className }) => {
    return (
        <Paper shadow="xl" radius="lg" className={className}>
            {children}
        </Paper>
    );
};

export default Frame;
