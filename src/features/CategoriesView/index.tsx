import React, { FC } from "react";
import { Button, Divider, Group, Paper, Stack, Text } from "@mantine/core";

import Container from "../../components/Container/Container";
import Loading from "../../components/Loading/Loading";
import Sortings from "./components/Sortings/Sortings";
import useData from "@/hooks/useData";
import CategoriesList from "./components/CategoriesList/CategoriesList";
import Link from "next/link";
import routes from "@/constants/routes";
import { useCategoryFilterStore } from "@/store/filter-category.store";

const CategoriesView: FC = () => {
    const filter = useCategoryFilterStore((state) => state.filter);
    const { data, isLoading } = useData<IGetCategory[]>({
        queryKey: [["CATEGORIES", `FILTER_${filter}`]],
        path: `/api/directions?filter=${filter}`,
    });

    return (
        <Container mt={34} maw={1232}>
            <Paper pos={"relative"} p={48} shadow="xl" radius="lg">
                <Stack gap={24}>
                    <Group align={"center"} justify={"space-between"} wrap={"wrap"}>
                        <Text fz={28} fw={700}>
                            Всі категорії
                        </Text>
                        <Sortings />
                    </Group>
                    <Divider style={{ borderTop: "4px solid #02808F" }} maw={608} w="100%" />
                    <Button h={48} w={193} radius="xl" color="var(--accent-color)" component={Link} href={routes.CREATE_CATEGORY}>
                        Створити категорію
                    </Button>
                    <CategoriesList categories={data || []} />
                </Stack>
                <Loading visible={isLoading} />
            </Paper>
        </Container>
    );
};

export default CategoriesView;
