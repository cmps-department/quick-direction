import { FC } from 'react';
import { Stack } from '@mantine/core';

import styles from './styles.module.scss';
import { IMessage } from '../../../../interfaces/message.interface';
import dayjs from 'dayjs';
import MessageDocument from '../MessageDocument/MessageDocument';

interface LeftMessageProps {
  message: IMessage;
}

const LeftMessage: FC<LeftMessageProps> = ({ message }) => {
  return (
    <div className={`${styles.msg} ${styles.leftMsg}`}>
      <div className={styles.msgBubble}>
        <div className={styles.msgInfo}>
          <div className={styles.msgInfoName}>{`${message.userSurname} ${message.userName}`}</div>
          <div className={styles.msgInfoTime}>{dayjs(message.createdAt).format('HH:MM')}</div>
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

export default LeftMessage;
