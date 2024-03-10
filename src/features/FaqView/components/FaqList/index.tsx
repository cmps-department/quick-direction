import { FC } from "react";
import { Box, Stack, Text } from "@mantine/core";
import FaqItem from "../FaqItem";

import styles from "./styles.module.scss";
import CustomDivider from "../../../../components/CustomDivider/CustomDivider";
import Frame from "@/components/Frame";
import useData from "@/hooks/useData";
import Loading from "@/components/Loading";

type KeysUnion = keyof typeof QuestionType;

type TGroupedFAQs = {
    [key in KeysUnion]?: IFaqResponse[];
};

const QuestionTypes = {
    General: "Загальна Інформація",
    Application: "Подача Заявок",
    Administration: "Взаємодія з Дирекцією",
    Technical: "Технічні Питання",
};

const FaqList: FC = () => {
    const { data, isLoading } = useData<IFaqResponse[]>({
        queryKey: ["FAQ_LIST"],
        path: `/api/faq`,
    });

    const groupedFAQs = data?.reduce((acc: TGroupedFAQs, faq: IFaqResponse) => {
        // @ts-ignore
        acc[faq.questionType] = (acc[faq.questionType] as any) || [];
        // @ts-ignore
        acc[faq.questionType].push(faq);
        return acc;
    }, {});

    if (isLoading)
        return (
            <Stack mih={400} mb={50} pos={"relative"}>
                <Loading visible={isLoading} />
            </Stack>
        );

    return (
        <Stack mb={50}>
            {groupedFAQs ? (
                Object.keys(groupedFAQs).map((questionType) => (
                    <Frame key={questionType} className={styles.frame}>
                        <Text fz={20} fw={700}>
                            {QuestionTypes[questionType as KeysUnion]}
                        </Text>
                        <CustomDivider />
                        <Box>{groupedFAQs[questionType as KeysUnion]?.map((item) => <FaqItem key={item.id} faqItem={item} />)}</Box>
                    </Frame>
                ))
            ) : (
                <Text fz={20} fw={700} c="gray" ta="center">
                    Нічого не знайдено...
                </Text>
            )}
        </Stack>
    );
};

export default FaqList;
