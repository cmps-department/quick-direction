import React, { FC } from "react";
import SuccessModal from "../../components/Modals/SuccessModal";
import Container from "../../components/Container";

import { useRouter } from "next/router";

import Modal from "@/components/Modals/Modal";
import { Modals } from "@/components/Modals/data/modals";

import routes from "@/constants/routes";
import { Paper } from "@mantine/core";
import CreateFaqForm from "./components/CreateFaqForm";

const CreateFaqView: FC = () => {
    const router = useRouter();

    return (
        <Container my={34}>
            <Paper p={48} shadow="xl" radius="lg">
                <CreateFaqForm />
                <Modal triggers={[Modals.SUCCESS]}>
                    <SuccessModal onSuccess={() => router.push(routes.FAQ_LIST)} text={(payload) => `Питання ${payload.name} успішно додано`} />
                </Modal>
            </Paper>
        </Container>
    );
};

export default CreateFaqView;
