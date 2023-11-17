import React, { FC } from 'react'
import PageLayout from '../../../../layouts/PageLayout'
import LayoutHF from '../../../../layouts/LayoutHF'
import CreateCategoryView from '../../../../features/CreateCategoryView'


const CreateCategoryPage: FC = () => {
    return (
        <PageLayout title={"New Category"}>
            <LayoutHF headerColor='#2A2A2A'> 
                <CreateCategoryView/>
            </LayoutHF>
        </PageLayout>
    )
}

export default CreateCategoryPage
