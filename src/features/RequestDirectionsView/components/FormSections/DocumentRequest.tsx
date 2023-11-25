import { FC, useState } from "react";

import { Group, Flex, Text, Image, Stack } from "@mantine/core";
import { Dropzone, FileWithPath, MIME_TYPES } from '@mantine/dropzone';
import OutlineButton from "../../../../components/OutlineButton/OutlineButton";
import { Icon } from "@iconify/react";

interface DocumentRequestProps {
    examplelink: string;
    open: () => void;
}

const DocumentRequest: FC<DocumentRequestProps> = ({ examplelink, open }) => {
    const [files, setFiles] = useState<FileWithPath[]>([]);

    return (
        <>
            <Group>
                <a href={examplelink} target="_blank">
                    <OutlineButton>
                        Зразок
                    </OutlineButton>
                </a>
                <OutlineButton onClick={open}>
                    Інструкція
                </OutlineButton>
            </Group>
            <Stack gap={24} style={{
                boxShadow: "0px 4px 16px 0px rgba(17, 34, 17, 0.05)",
                padding: "16px",
                borderRadius: "12px"
            }}>
                <Flex style={{borderRadius: "24px"}} align="center" justify="center" h={52} bg="#E4FDE0">
                    <Text fw={700}>
                        Для продовження завантажте заповнений бланк
                    </Text>
                </Flex>
                <Dropzone
                    onDrop={(files) => setFiles(files)}
                    accept={[MIME_TYPES.doc, MIME_TYPES.docx, MIME_TYPES.pdf]}
                    styles={{
                        root: {
                            border: "2px dashed #02808F",
                            borderRadius: "24px"
                        }
                    }}
                >
                    <Stack justify="center" align="center" mih={188} style={{ pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                            <Icon width={72} height={72} color="green" icon="clarity:success-standard-solid" />
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                            <Icon width={72} height={72} color="red" icon="ic:sharp-error" />
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <Image
                                w={72}
                                h={72}
                                src="/images/Plus.png"
                                alt="dropzone"
                            />
                        </Dropzone.Idle>
                        <div>
                            <Text fw={500} size="sm" c="dimmed" inline mt={7}>
                                {files.length > 0 ? files.map(file => file.name).join(", ") : "Завантажити"}
                            </Text>
                        </div>
                    </Stack>
                </Dropzone>
            </Stack>
        </>
    )
}

export default DocumentRequest;