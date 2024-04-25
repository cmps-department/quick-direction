import { FC } from "react";
import { Box, Text } from "@mantine/core";
import FaqList from "../FaqList";
import CustomDivider from "../../../../components/CustomDivider/CustomDivider";

const FaqLayout: FC = () => {
    return (
        <Box mt={112}>
            <Text className={"h1_font"} ta="center">
                Питання і відповіді
            </Text>
            <CustomDivider mb={48} mx={"auto"} />
            <FaqList />
        </Box>
    );
};

export default FaqLayout;
