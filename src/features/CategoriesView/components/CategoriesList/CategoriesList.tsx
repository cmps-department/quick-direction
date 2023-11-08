import { Stack, Text } from '@mantine/core';
import { IGetCategory } from '../../../../interfaces/category.interface';
import Category from '../Category/Category';

const CategoriesList = ({ categories }: { categories: [] | IGetCategory[] }) => {

    console.log(categories)

    return (
        <>
            {categories?.length ?
                <Stack mt={24}>
                    {categories.map((category, index) =>
                        <Category key={category.id} category={category} index={index}/>
                    )}
                </Stack> :
                <Text style={{ textAlign: 'center' }} mt={40} p={'50px 0'} fz={22} fw={500}>Категорій поки що немає!</Text>
            }
        </>
    )
}

export default CategoriesList
