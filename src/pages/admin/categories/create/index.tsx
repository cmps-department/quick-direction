import React, { FC } from 'react'
import PageLayout from '../../../../layouts/PageLayout'
import LayoutHF from '../../../../layouts/LayoutHF'
import CreateCategoryView from '../../../../features/CreateCategoryView'

export interface ICreateCategory {
    id?: string | undefined 
}

const CreateCategoryPage: FC<ICreateCategory> = ({id}) => {
    return (
        <PageLayout title={"New Category"}>
            <LayoutHF headerColor='#2A2A2A'> 
                <CreateCategoryView id={id}/>
            </LayoutHF>
        </PageLayout>
    )
}

export default CreateCategoryPage
