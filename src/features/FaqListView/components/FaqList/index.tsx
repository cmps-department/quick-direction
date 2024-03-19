import useData from "@/hooks/useData";
import { Group, Stack, Text } from "@mantine/core";
import { FC } from "react";
import FaqItem from "../FaqItem";
import Loading from "@/components/Loading";

const FaqList: FC = () => {
    const { data, isLoading } = useData<IFaqResponse[]>({
        queryKey: ["FAQ"],
        path: `/api/faq`,
    });

    return (
        <Stack mih={385} gap={24} pos={"relative"}>
            {isLoading && <Loading visible={isLoading} />}
            {data && data.length > 0 ? (
                data?.map((item) => <FaqItem key={item.id} faqItem={item} />)
            ) : (
                <Group w={"100%"} mih={300} align="center" justify="center">
                    <Text fz={20} fw={700} c="gray">
                        Нічого не знайдено...
                    </Text>
                </Group>
            )}
        </Stack>
    );
};

export default FaqList;
