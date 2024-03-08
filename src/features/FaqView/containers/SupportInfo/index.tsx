import { Text } from '@mantine/core';
import { FC } from 'react';

const SupportInfo: FC = () => {
  return (
    <Text fz={20} fw={400} pt={50}>
      <Text span fw={700} inherit>
        Не знайшли відповідь на своє питання? {' '}
      </Text>
      Звертайтеся до нашої служби підтримки за допомогою електронної пошти. Вам завжди раді допомогти.
    </Text>
  );
};

export default SupportInfo;
