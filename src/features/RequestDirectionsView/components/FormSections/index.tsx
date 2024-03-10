import { FC, useMemo } from "react";

import { useFormContext } from "react-hook-form";

import { RequestFormState } from "../../hooks/useForm";

import BothTypesRequest from "./forms/BothTypesRequest";
import DocumentRequest from "./forms/DocumentRequest";
import WrittenRequest from "./forms/WrittenRequest";
import { Flex, Stack, Text } from "@mantine/core";

interface FormSectionProps {
    categories: IGetCategory[];
}

const FormSection: FC<FormSectionProps> = ({ categories }) => {
    const form = useFormContext<RequestFormState>();
    const subDirectionId = form.watch("subDirectionId");

    const FormSection = useMemo(() => {
        const category = categories?.find((category) => category.subDirections.some((subCategory) => subCategory.id === subDirectionId));
        const subCategory = category?.subDirections.find((subCategory) => subCategory.id === subDirectionId);

        if (!subCategory) {
            return null;
        } else if (subCategory.downloadFile && subCategory.textField) {
            return <BothTypesRequest />;
        }

        if (subCategory.downloadFile) {
            return (
                <Stack
                    gap={24}
                    style={{
                        boxShadow: "0px 4px 16px 0px rgba(17, 34, 17, 0.05)",
                        padding: "16px",
                        borderRadius: "12px",
                    }}
                >
                    <Flex style={{ borderRadius: "24px" }} align="center" justify="center" h={52} bg="#E4FDE0">
                        <Text fw={700}>Для продовження завантажте заповнений бланк</Text>
                    </Flex>
                    <DocumentRequest />
                </Stack>
            );
        } else {
            return (
                <Stack>
                    <Text fz={20} fw={700}>
                        Напишіть звернення{" "}
                        <Text fz={20} fw={700} span c="red">
                            *
                        </Text>
                    </Text>
                    <WrittenRequest />
                </Stack>
            );
        }
    }, []);

    return FormSection;
};

export default FormSection;
