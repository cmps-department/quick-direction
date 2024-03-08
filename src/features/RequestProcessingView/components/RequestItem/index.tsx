import { FC } from 'react';
import { Flex, Text } from '@mantine/core';

import styles from './styles.module.scss';
import { IRequest } from '../../../../interfaces/request.interface';

interface RequestItemProps {
  request: IRequest;
  setActiveRequest: () => void;
  hidden: boolean;
  isActive: boolean;
}

const RequestItem: FC<RequestItemProps> = ({ request, setActiveRequest, hidden, isActive }) => {
  return (
    <Flex
      onClick={setActiveRequest}
      className={`${styles.request} ${hidden ? styles.hidden : null} ${isActive ? styles.active : null}`}
      p={24}
      align="center"
      justify="space-between"
    >
      <Flex align="center" gap={24}>
        <Text fw={600} fz={18} c="#02808F">
          {request.direction.name}
        </Text>
        <Text fz={16}>{request.subDirection.name}</Text>
      </Flex>
      <Flex gap={5}>
        <Text fz={18}>{request.studentGroup}</Text>
        <Text fz={18} fw={700}>{`${request.surname} ${request.name}`}</Text>
      </Flex>
    </Flex>
  );
};

export default RequestItem;
