import React, { FC } from "react";
import Frame from "../../components/Frame/Frame";
import SuccessModal from "../../components/Modals/SuccessModal/SuccessModal";
import Container from "../../components/Container/Container";

import { useRouter } from "next/router";

import Modal from "@/components/Modals/Modal";
import { Modals } from "@/components/Modals/data/modals";

import classes from "./styles.module.scss";
import CreateCategoryForm from "./components/CreateCategoryForm";

const CreateCategoryView: FC = () => {
    const router = useRouter();

    return (
        <Container>
            <Frame className={classes.frame}>
                <CreateCategoryForm />
                <Modal triggers={[Modals.SUCCESS]}>
                    <SuccessModal onSuccess={() => router.push("/admin/categories")} text="Категорія успішно додана" />
                </Modal>
            </Frame>
        </Container>
    );
};

export default CreateCategoryView;
