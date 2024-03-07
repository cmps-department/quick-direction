import React, { FC } from "react";
import PageLayout from "@/layouts/PageLayout";
import CreateCategoryView from "@/features/CreateCategoryView";

const CategoryEditPage: FC = () => {
    return (
        <PageLayout title={"Edit Category"}>
            <CreateCategoryView />
        </PageLayout>
    );
};

export default CategoryEditPage;
