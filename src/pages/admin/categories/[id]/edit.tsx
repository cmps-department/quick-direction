import React, { FC } from "react";
import PageLayout from "@/layouts/PageLayout";
import EditCategoryView from "@/features/EditCategoryView";

const CategoryEditPage: FC = () => {
    return (
        <PageLayout title={"Edit Category"}>
            <EditCategoryView />
        </PageLayout>
    );
};

export default CategoryEditPage;
