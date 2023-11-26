import { Dispatch, FC, SetStateAction, useEffect, useRef } from "react";
import { Flex, Stack, Text, Button, FileButton, UnstyledButton, Paper, Box } from "@mantine/core";
import { Controller } from "react-hook-form";

import styles from "./styles.module.scss";
import TextInput from "../../../../components/TextInput/TextInput";
import { Icon } from "@iconify/react";
import ChatMenu from "../ChatMenu";
import LeftMessage from "../LeftMessage/LeftMessage";
import RightMessage from "../RightMessage/RightMessage";
import { useSession } from "next-auth/react";
import useChatForm from "../../hooks/useChat";
import { useMessages } from "../../hooks/useMessages";
import { useRequest } from "../../hooks/useRequest";

interface ChatProps {
    requestId: number;
    setActiveRequestId: Dispatch<SetStateAction<number | null>>
}

const Chat: FC<ChatProps> = ({ requestId, setActiveRequestId }) => {
    const { data: session } = useSession();
    const {
        form: {
            control,
            setValue,
            handleSubmit
        },
        onSubmit,
        isLoading
    } = useChatForm(requestId);
    const { messages } = useMessages(requestId);
    const { request } = useRequest(requestId);

    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chatRef) return;
        if (!chatRef.current) return;
        chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages]);

    return (
        <Stack pt={25} gap={24} className={`${styles.chat} ${request ? styles.active : null}`}>
            <Flex
                className={`${styles.request}`}
                p={24}
                align="center"
                justify="space-between"
            >
                <Flex align="center" gap={14}>
                    <Text fw={600} fz={18} c="#02808F">{`${request?.direction?.name} - ${request?.subDirection?.name}`}</Text>
                </Flex>
                <Flex gap={5}>
                    <Text fz={18}>{request?.studentGroup}</Text>
                    <Text fz={18} fw={700}>{`${request?.name} ${request?.surname}`}</Text>
                    <ChatMenu requestId={request?.id!} currentStatus={request?.status!} setActiveRequestId={setActiveRequestId}  />
                </Flex>
            </Flex>

            <Paper shadow='xl' className={styles.msger}>
                <main ref={chatRef} className={styles.msgerChat}>
                    {
                        messages.length > 0
                            ? messages.map((message) => {
                                return message.userId === session?.user.userId
                                    ? <RightMessage key={message.id} message={message} />
                                    : <LeftMessage key={message.id} message={message} />
                            })
                            : <Box className={styles.noMessages}>
                                <Text c="gray" fz={20} fw={700}>Повідомлень поки що немає...</Text>
                            </Box>
                    }
                </main>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Flex align="center" gap={24} p={24}>
                        <Controller
                            name={"text"}
                            control={control}
                            render={({ field, fieldState }) => (
                                <TextInput
                                    value={field.value}
                                    onChange={field.onChange}
                                    error={fieldState.error && fieldState.error.message}
                                    w="70%"
                                    placeholder="Повідомлення..."
                                />
                            )}
                        />
                        <FileButton multiple onChange={files => setValue("files", files)} accept="application/doc,application/pdf,application/docx">
                            {(props) => (
                                <UnstyledButton className={styles.clip} {...props}>
                                    <Icon width={24} height={24} icon="heroicons:paper-clip-solid" />
                                </UnstyledButton>
                            )}
                        </FileButton>
                        <Button loading={isLoading} radius="xl" h={48} w="30%" color="#02808F" type="submit">
                            Надіслати
                        </Button>
                    </Flex>
                </form>
            </Paper>
        </Stack>
    )
}

export default Chat;