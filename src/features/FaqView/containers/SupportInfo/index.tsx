import { Text } from "@mantine/core";
import { FC } from "react";

const SupportInfo: FC = () => {
    return (
        <Text className={"main_font"} pt={50}>
            <Text span className={"h2_font"}>
                Не знайшли відповідь на своє питання?{" "}
            </Text>
            Звертайтеся до нашої служби підтримки за допомогою електронної пошти. Вам завжди раді допомогти.
        </Text>
    );
};

export default SupportInfo;
