import React, { FC } from "react";
import PageLayout from "../../../../layouts/PageLayout";
import CreateCategoryView from "../../../../features/CreateCategoryView";

const CreateCategoryPage: FC = () => {
    return (
        <PageLayout title={"New Category"}>
            <CreateCategoryView />
        </PageLayout>
    );
};

export default CreateCategoryPage;
