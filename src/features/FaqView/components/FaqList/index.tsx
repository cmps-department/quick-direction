import { FC, useMemo } from 'react';
import { useFaq } from '../../hooks/useFaq';
import { Box, Stack, Text } from '@mantine/core';
import FaqItem from '../FaqItem';
import { QuestionType } from '../../../../interfaces/faq.interface';
import Frame from '../../../../components/Frame/Frame';

import styles from './styles.module.scss';
import CustomDivider from '../../../../components/CustomDivider/CustomDivider';

const FaqList: FC = () => {
  const { faq } = useFaq();

  const groupedFaq: { [key in QuestionType]?: typeof faq } = useMemo(() => {
    const res: { [key in QuestionType]?: typeof faq } = {};
    if (faq?.length > 0) {
      faq?.forEach(item => {
        if (!res[item.questionType]) {
          res[item.questionType] = [];
        }
        res[item.questionType]?.push(item);
      });
    }
    return res;
  }, [faq]);

  return (
    <Stack mb={50}>
      {faq.length > 0 ? (
        Object.keys(groupedFaq).map(questionType => (
          <Frame key={questionType} className={styles.frame}>
            <Text fz={20} fw={700}>
              {(QuestionType as { [key: string]: string })[questionType]}
            </Text>
            <CustomDivider/>
            <Box>{groupedFaq[questionType as QuestionType]?.map(item => <FaqItem key={item.id} faqItem={item} />)}</Box>
          </Frame>
        ))
      ) : (
        <Text fz={20} fw={700} c="gray" ta="center" mt={30}>
          Нічого не знайдено...
        </Text>
      )}
    </Stack>
  );
};

export default FaqList;
