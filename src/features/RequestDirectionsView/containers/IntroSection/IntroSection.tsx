import { Box, Text } from '@mantine/core';
import classes from './introSection.module.scss';

const IntroSection = () => {
  return (
    <Box className={classes.introSection}>
      <Text fz={28} fw={700} mb={15}>
        Ця сторінка допоможе вам висловити ваші запити, отримати додаткову інформацію та зв'язатися з нами.
      </Text>
      <Text fz={28} fw={700}>
        Будь ласка, заповніть наступні поля для подачі вашого запиту:
      </Text>
    </Box>
  );
};

export default IntroSection;
