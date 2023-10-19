import { Group, Flex, Text, Image, Stack } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';
import OutlineButton from "../../../../components/OutlineButton/OutlineButton";


const ExtraPoints = () => {
    return (
        <>
            <Group>
                <OutlineButton>
                    Зразок
                </OutlineButton>
                <OutlineButton>
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
                    onDrop={(files) => console.log('accepted files', files)}
                    onReject={(files) => console.log('rejected files', files)}
                    maxSize={3 * 1024 ** 2}
                    accept={IMAGE_MIME_TYPE}
                    styles={{
                        root: {
                            border: "2px dashed #02808F",
                            borderRadius: "24px"
                        }
                    }}
                >
                    <Stack justify="center" align="center" mih={188} style={{ pointerEvents: 'none' }}>
                        <Dropzone.Accept>
                        {/*<IconUpload
                            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
                            stroke={1.5}
                        />*/}
                        </Dropzone.Accept>
                        <Dropzone.Reject>
                        {/*<IconX
                            style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
                            stroke={1.5}
                        />*/}
                        </Dropzone.Reject>
                        <Dropzone.Idle>
                            <Image
                                w={72}
                                h={72}
                                src="/images/Plus.png"
                            />
                        </Dropzone.Idle>

                        <div>
                            <Text fw={500} size="sm" c="dimmed" inline mt={7}>
                                Завантажити
                            </Text>
                        </div>
                    </Stack>
                </Dropzone>
            </Stack>
        </>
    )
}

export default ExtraPoints;