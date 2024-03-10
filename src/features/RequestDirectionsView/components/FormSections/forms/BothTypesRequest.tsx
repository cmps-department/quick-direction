import { Group, Text } from "@mantine/core";
import DocumentRequest from "./DocumentRequest";
import WrittenRequest from "./WrittenRequest";

const BothTypesRequest = () => {
    return (
        <>
            <Text fz={20} fw={700}>
                Напишіть звернення або завантажте лист (pdf){" "}
                <Text fz={20} fw={700} span c="red">
                    *
                </Text>
            </Text>
            <Group gap={24} grow>
                <WrittenRequest />
                <DocumentRequest />
            </Group>
        </>
    );
};

export default BothTypesRequest;
