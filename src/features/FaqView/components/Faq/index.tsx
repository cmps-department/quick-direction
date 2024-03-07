import { FC } from "react";
import Container from "../../../../components/Container/Container";
import { Box, Divider, Text } from "@mantine/core";
import FaqList from "../FaqList";

const Faq: FC = () => {
  return (
    <Box mt={112}>
      <Text fz={28} fw={700} ta="center">
        Питання і відповіді
      </Text>
      <Divider style={{ borderTop: '4px solid #02808F', margin: '24px auto 48px' }} maw={608} w="100%" />
      <FaqList/>
    </Box>
  );
};

export default Faq;