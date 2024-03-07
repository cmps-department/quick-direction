import { FC } from 'react';
import { IFaqResponse } from '../../../../interfaces/faq.interface';
import { Box, Text } from '@mantine/core';

interface FaqItemProps {
  faqItem: IFaqResponse;
}

const FaqItem: FC<FaqItemProps> = ({ faqItem }) => {
  return (
    <Box p={24}>
      <Text fz={16} fw={600}>
        {faqItem.question}
      </Text>
      <Text fz={16} fw={400} mt={24}>
        {faqItem.answer}
      </Text>
    </Box>
  );
};

export default FaqItem;
