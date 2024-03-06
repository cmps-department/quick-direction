import { FC } from "react";
import { Text, Image, Stack } from "@mantine/core";
import { Dropzone, MIME_TYPES } from "@mantine/dropzone";
import { Icon } from "@iconify/react";

import { RequestFormState } from "../../../hooks/useForm";
import { useFormContext } from "react-hook-form";

const DocumentRequest: FC = () => {
    const form = useFormContext<RequestFormState>();

    return (
        <Dropzone
            onDrop={(files) => form.setValue("document", files[0])}
            accept={[MIME_TYPES.doc, MIME_TYPES.docx, MIME_TYPES.pdf]}
            maxFiles={1}
            multiple={false}
            styles={{
                root: {
                    border: form.formState.errors.document ? "2px dashed red" : "2px dashed #02808F",
                    borderRadius: "24px",
                },
            }}
        >
            <Stack justify="center" align="center" mih={188} style={{ pointerEvents: "none" }}>
                <Dropzone.Accept>
                    <Icon width={72} height={72} color="green" icon="clarity:success-standard-solid" />
                </Dropzone.Accept>
                <Dropzone.Reject>
                    <Icon width={72} height={72} color="red" icon="ic:sharp-error" />
                </Dropzone.Reject>
                <Dropzone.Idle>
                    <Image w={72} h={72} src="/images/Plus.png" alt="dropzone" />
                </Dropzone.Idle>
                <div>
                    <Text fw={500} size="sm" c={form.formState.errors.document ? "red" : "dimmed"} inline mt={7}>
                        {form.formState.errors.document ? form.formState.errors.document.message : form.getValues("document")?.name || "Завантажити"}
                    </Text>
                </div>
            </Stack>
        </Dropzone>
    );
};

export default DocumentRequest;
