import { FC } from "react";
import { Stack } from "@mantine/core";

import styles from "./styles.module.scss";
import dayjs from "dayjs";
import MessageDocument from "../MessageDocument";

interface RightMessageProps {
    message: IMessage;
}

const RightMessage: FC<RightMessageProps> = ({ message }) => {
    return (
        <div className={`${styles.msg} ${styles.rightMsg}`}>
            <div className={styles.msgBubble}>
                <div className={styles.msgInfo}>
                    <div className={styles.msgInfoName}>{`${message.userSurname} ${message.userName}`}</div>
                    <div className={styles.msgInfoTime}>{`${dayjs(message.createdAt).format("HH:MM")}`}</div>
                </div>

                <div className={styles.msgText}>{message.text}</div>

                <Stack mt={10} gap={10}>
                    {message.documentLinks.map((documentLink, idx) => (
                        <MessageDocument key={idx} label={`Документ ${idx + 1}`} documentLink={documentLink} />
                    ))}
                </Stack>
            </div>
        </div>
    );
};

export default RightMessage;
