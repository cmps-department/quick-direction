import React, { FC } from "react";
import { Button, Divider, Group, Paper, Stack, Text } from "@mantine/core";

import Container from "../../components/Container";
import Loading from "../../components/Loading";
import Sortings from "./components/Sortings";
import useData from "@/hooks/useData";
import CategoriesList from "./components/CategoriesList";
import Link from "next/link";
import routes from "@/constants/routes";
import { useCategoryFilterStore } from "@/store/filter-category.store";
import Modal from "@/components/Modals/Modal";
import { Modals } from "@/components/Modals/data/modals";
import DeleteModal from "@/components/Modals/DeleteModal/DeleteModal";
import useMutationData from "@/hooks/useMutationData";

const CategoriesView: FC = () => {
    const filter = useCategoryFilterStore((state) => state.filter);

    const { data, isLoading } = useData<IGetCategory[]>({
        queryKey: ["CATEGORIES", { filter }],
        path: `/api/directions?filter=${filter}`,
    });

    const deleteCategory = useMutationData({
        url: (id) => `/api/direction/delete/${id}`,
        type: "delete",
        queryKeys: { invalidate: [{ queryKey: ["CATEGORIES"] }] },
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
            <Modal triggers={[Modals.DELETE]}>
                <DeleteModal
                    onConfirm={(payload) => deleteCategory.mutateAsync(payload.id)}
                    text={(payload) => `Видалити категорію ${payload.name}?`}
                    loading={deleteCategory.isLoading}
                />
            </Modal>
        </Container>
    );
};

export default CategoriesView;
