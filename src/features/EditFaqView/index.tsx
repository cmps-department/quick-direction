import React, { FC } from "react";
import SuccessModal from "../../components/Modals/SuccessModal";
import Container from "../../components/Container";

import { useRouter } from "next/router";

import Modal from "@/components/Modals/Modal";
import { Modals } from "@/components/Modals/data/modals";

import routes from "@/constants/routes";
import { Paper } from "@mantine/core";
import EditFaqForm from "./components/EditFaqForm";
import DeleteModal from "@/components/Modals/DeleteModal";
import useMutationData from "@/hooks/useMutationData";

const EditFaqView: FC = () => {
    const router = useRouter();

    const deleteFaq = useMutationData({
        url: (id) => `/api/faq/${id}`,
        type: "delete",
        queryKeys: { invalidate: [{ queryKey: ["FAQ"] }] },
    });

    return (
        <Container my={34}>
            <Paper p={48} shadow="xl" radius="lg">
                <EditFaqForm />
                <Modal triggers={[Modals.SUCCESS]}>
                    <SuccessModal
                        onSuccess={() => router.push(routes.FAQ_LIST)}
                        text={(payload) => `Питання ${payload.name} успішно відредаговано`}
                    />
                </Modal>
                <Modal triggers={[Modals.DELETE]}>
                    <DeleteModal
                        onConfirm={(payload) =>
                            deleteFaq.mutateAsync(payload.id, {
                                onSuccess: () => {
                                    router.push(routes.FAQ_LIST);
                                },
                            })
                        }
                        text={(payload) => `Видалити питання ${payload.name} ?`}
                        loading={deleteFaq.isLoading}
                    />
                </Modal>
            </Paper>
        </Container>
    );
};

export default EditFaqView;
