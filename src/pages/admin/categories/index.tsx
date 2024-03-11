import React, { FC } from "react";
import CategoriesView from "../../../features/CategoriesView";
import PageLayout from "../../../layouts/PageLayout";

const CategoriesPage: FC = () => {
    return (
        <PageLayout title={"Categories"}>
            <CategoriesView />
        </PageLayout>
    );
};

export default CategoriesPage;
