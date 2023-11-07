import { Group, Modal, Stack, Text } from '@mantine/core'
import Image from 'next/image';
import React, { FC } from 'react'
import CustomButton from '../../../../components/CustomButton/CustomButton';

import styles from './delete.module.scss';

interface IDeleteModal {
  opened: boolean;
  close: () => void;
}

const DeleteModal: FC<IDeleteModal> = ({ opened, close }) => {
  return (
    <Modal
      shadow='xl'
      radius='lg'
      opened={opened}
      onClose={close}
      withCloseButton={false}
      styles={{
        content: {
          minWidth: "600px",
          padding: "64px",
          textAlign: 'center'
        }
      }}
    >
      <Stack align='center' gap={24}>
        <Image
          width={95}
          height={95}
          src="/images/Delete.png"
          alt="Success"
        />
        <Text c={'var(--red-color)'} fz={20} fw={700}>Видалити?</Text>
        <Group>
          <CustomButton className={styles.cancelBtn} onClick={() => {}}>Відміна</CustomButton>
          <CustomButton className={styles.yesBtn} onClick={() => {}}>Так</CustomButton>
        </Group>
      </Stack>
    </Modal>
  )
}

export default DeleteModal
