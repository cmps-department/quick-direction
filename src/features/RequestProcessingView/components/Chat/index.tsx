import { FC, useState } from "react";
import { Flex, Stack, Text, Button, FileButton, UnstyledButton, Paper, Box } from "@mantine/core";

import styles from "./styles.module.scss";
import TextInput from "../../../../components/TextInput/TextInput";
import { Icon } from "@iconify/react";
import ChatMenu from "../ChatMenu";
import { IRequest } from "../../../../interfaces/request.interface";
import LeftMessage from "../LeftMessage/LeftMessage";
import RightMessage from "../RightMessage/RightMessage";
import { useSession } from "next-auth/react";

interface ChatProps {
    request: IRequest;
}

const Chat: FC<ChatProps> = ({ request }) => {
    const { data: session } = useSession();
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
                    <Text fw={600} fz={18} c="#02808F">{`${request.direction.name} - ${request.subDirection.name}`}</Text>
                </Flex>
                <Flex gap={5}>
                    <Text fz={18}>{request.studentGroup}</Text>
                    <Text fz={18} fw={700}>{`${request.name} ${request.surname}`}</Text>
                    <ChatMenu />
                </Flex>
            </Flex>

            <Paper shadow='xl' className={styles.msger}>
                <main className={styles.msgerChat}>
                    {
                        request.messages.length > 0
                            ? request.messages.map((message) => {
                                return message.userId === session?.user.userId
                                    ? <RightMessage message={message} />
                                    : <LeftMessage message={message} />
                            })
                            : <Box className={styles.noMessages}>
                                <Text c="gray" fz={20} fw={700}>Повідомлень поки що немає...</Text>
                            </Box>
                    }
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
            </Paper>
        </Stack>
    )
}

export default Chat;