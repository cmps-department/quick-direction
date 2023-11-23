import { FC, useState } from "react";
import { Flex, Stack, Text, Button, FileButton, UnstyledButton } from "@mantine/core";

import { IRequest } from "../..";

import styles from "./styles.module.scss";
import TextInput from "../../../../components/TextInput/TextInput";
import { Icon } from "@iconify/react";
import ChatMenu from "../ChatMenu";

interface ChatProps {
    request: IRequest;
}

const Chat: FC<ChatProps> = ({ request }) => {
    const [file, setFile] = useState<File | null>(null);

    return (
        <Stack pt={25} gap={24} className={`${styles.chat} ${request ? styles.active : null}`}>
            <Flex
                className={`${styles.request}`}
                p={24}
                align="center"
                justify="space-between"
            >
                <Flex align="center" gap={14}>
                    <Text fw={600} fz={18} c="#02808F">{`${request.category} - ${request.subdirection}`}</Text>
                </Flex>
                <Flex gap={5}>
                    <Text fz={18}>{request.userGroup}</Text>
                    <Text fz={18} fw={700}>{request.userName}</Text>
                    <ChatMenu />
                </Flex>
            </Flex>
            <section className={styles.msger}>
                <main className={styles.msgerChat}>
                    <div className={`${styles.msg} ${styles.leftMsg}`}>
                        <div className={styles.msgBubble}>
                            <div className={styles.msgInfo}>
                                <div className={styles.msgInfoName}>Губенко Г.В.</div>
                                <div className={styles.msgInfoTime}>12:45</div>
                            </div>

                            <div className={styles.msgText}>
                                Добрий день, надсилаю Вам свої документи:
                            </div>

                            <Stack mt={10} gap={10}>
                                <Button
                                    w={217}
                                    radius="xl"
                                    variant="outline"
                                    color="#02808F"
                                    leftSection={<Icon width={24} height={24} icon="basil:document-outline" />}
                                >
                                    Документ 1.pdf
                                </Button>
                                <Button
                                    w={217}
                                    radius="xl"
                                    variant="outline"
                                    color="#02808F"
                                    leftSection={<Icon width={24} height={24} icon="basil:document-outline" />}
                                >
                                    Документ 2.pdf
                                </Button>
                            </Stack>
                        </div>
                    </div>

                    <div className={`${styles.msg} ${styles.rightMsg}`}>
                        <div className={styles.msgBubble}>
                            <div className={styles.msgInfo}>
                                <div className={styles.msgInfoName}>Чаплін А.А</div>
                                <div className={styles.msgInfoTime}>12:46</div>
                            </div>

                            <div className={styles.msgText}>
                                Добрий день, є пара нюансів заповнення, очікуйте відповіді.
                            </div>
                        </div>
                    </div>
                </main>

                <form>
                    <Flex align="center" gap={24} p={24}>
                        <TextInput w="70%" placeholder="Повідомлення..." />
                        <FileButton onChange={setFile} accept="application/doc,application/pdf,application/docx">
                            {(props) => (
                                <UnstyledButton className={styles.clip} {...props}>
                                    <Icon width={24} height={24} icon="heroicons:paper-clip-solid" />
                                </UnstyledButton>
                            )}
                        </FileButton>
                        <Button radius="xl" h={48} w="30%" color="#02808F" type="submit">Надіслати</Button>
                    </Flex>
                </form>
            </section>
        </Stack>
    )
}

export default Chat;