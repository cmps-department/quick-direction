import { Modal, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import React, { FC } from 'react';

interface ISuccessModal {
  opened: boolean;
  text: string;
  close: () => void;
}

const SuccessModal: FC<ISuccessModal> = ({ text, opened, close }) => {
  return (
    <Modal
      shadow="xl"
      radius="lg"
      opened={opened}
      onClose={close}
      withCloseButton={false}
      closeOnClickOutside={false}
      styles={{
        content: {
          minWidth: '600px',
          padding: '64px',
          textAlign: 'center',
        },
      }}
    >
      <Stack align="center" gap={24}>
        <Image width={95} height={95} src="/images/Success.png" alt="Success" />
        <Text c={'var(--accent-color)'} fz={20} fw={700}>
          Готово!
        </Text>
        <Text c={'var(--dark-color)'} fz={18} fw={400}>
          {text}
        </Text>
      </Stack>
    </Modal>
  );
};

export default SuccessModal;
