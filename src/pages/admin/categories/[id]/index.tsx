import { useRouter } from 'next/router';
import React, { FC } from 'react'
import CreateCategoryPage from '../create';

const CategoryPage:FC = () => {
    const router = useRouter();
    const { id } = router.query;

    return <CreateCategoryPage id={id}/>
}

export default CategoryPage

