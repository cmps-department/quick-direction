import { FC } from "react";
import Container from "@/components/Container";
import { Button, Divider, Group, Paper, Stack, Text } from "@mantine/core";
import Link from "next/link";
import routes from "@/constants/routes";
import FaqList from "./components/FaqList";
import Modal from "@/components/Modals/Modal";
import { Modals } from "@/components/Modals/data/modals";
import DeleteModal from "@/components/Modals/DeleteModal";
import useMutationData from "@/hooks/useMutationData";

const FaqListView: FC = () => {
    const deleteFaq = useMutationData({
        url: (id) => `/api/faq/${id}`,
        type: "delete",
        queryKeys: { invalidate: [{ queryKey: ["FAQ"] }] },
    });

    return (
        <Container my={34} maw={1232}>
            <Paper pos={"relative"} p={48} shadow="xl" radius="lg">
                <Stack gap={24}>
                    <Group align={"center"} justify={"space-between"} wrap={"wrap"}>
                        <Text fz={28} fw={700}>
                            Всі Питання & Відповіді
                        </Text>
                    </Group>
                    <Divider style={{ borderTop: "4px solid #02808F" }} maw={608} w="100%" />
                    <Button h={48} w={193} radius="xl" color="var(--accent-color)" component={Link} href={routes.CREATE_FAQ}>
                        Створити Питання
                    </Button>
                    <FaqList />
                </Stack>
            </Paper>
            <Modal triggers={[Modals.DELETE]}>
                <DeleteModal
                    onConfirm={(payload) => deleteFaq.mutateAsync(payload.id)}
                    text={(payload) => `Видалити питання ${payload.name} ?`}
                    loading={deleteFaq.isLoading}
                />
            </Modal>
        </Container>
    );
};

export default FaqListView;
