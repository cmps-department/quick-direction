import React, { FC, useEffect, useState } from 'react';
import { Box, Button, Divider, Flex, Text } from '@mantine/core';
import { useRouter } from 'next/router';

import Container from '../../components/Container/Container';
import Frame from '../../components/Frame/Frame';
import CustomButton from '../../components/CustomButton/CustomButton';
import CategoriesList from './components/CategoriesList/CategoriesList';
import { IGetCategory } from '../../interfaces/category.interface';
import Loading from '../../components/Loading/Loading';
import Sortings from './components/Sortings/Sortings';
import useGetCategories from './hooks/useGetCategories';

import styles from './categories.module.scss';


const CategoriesView: FC = () => {
    const { push } = useRouter();
    const [categories, setCategories] = useState<IGetCategory[] | []>([]);
    const { data, error, isLoading, refetch } = useGetCategories();

    useEffect(() => {
        if (data?.length >= 0) {
            setCategories(data);
        }
    }, [data]);


    return (
        <Container mih="60vh">
            <Frame className={styles.frame}>
                <Flex align={'center'} justify={'space-between'} wrap={'wrap'}>
                    <Box>
                        <Text fz={28} fw={700}>
                            Всі категорії
                        </Text>
                    </Box>
                    <Flex className={styles.groupBtn} gap={25} align="center" justify="flex-end">
                        <Sortings allCategories={data} setCategories={setCategories} />
                    </Flex>
                </Flex>
                <Divider style={{ borderTop: "4px solid #02808F", marginBottom: "24px" }} maw={608} w="100%" />
                <Button h={48} w={193} radius="xl" color="#02808F" onClick={() => { push('/admin/categories/create') }}>
                    Створити категорію
                </Button>
                <Loading visible={isLoading} />
                <CategoriesList categories={categories} />
            </Frame>
        </Container>
    )
}

export default CategoriesView

