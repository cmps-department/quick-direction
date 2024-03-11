import { Stack } from "@mantine/core";
import { PropsWithChildren } from "react";

export default function CenteredLayout({ children }: PropsWithChildren) {
    return (
        <Stack gap={0}>
            <Stack p={20} h={"100vh"} align="center" justify="center">
                {children}
            </Stack>
        </Stack>
    );
}
