import React, { FC } from "react";
import Frame from "../../components/Frame";
import SuccessModal from "../../components/Modals/SuccessModal/SuccessModal";
import Container from "../../components/Container";

import { useRouter } from "next/router";

import Modal from "@/components/Modals/Modal";
import { Modals } from "@/components/Modals/data/modals";

import classes from "./styles.module.scss";
import EditCategoryForm from "./components/EditCategoryForm";
import routes from "@/constants/routes";

const EditCategoryView: FC = () => {
    const router = useRouter();

    return (
        <Container>
            <Frame className={classes.frame}>
                <EditCategoryForm />
                <Modal triggers={[Modals.SUCCESS]}>
                    <SuccessModal onSuccess={() => router.push(routes.CATEGORIES)} text="Категорія успішно відредагована" />
                </Modal>
            </Frame>
        </Container>
    );
};

export default EditCategoryView;
