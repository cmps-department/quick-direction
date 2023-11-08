import React, { FC, useEffect, useState } from 'react';
import { Box, Flex, Text } from '@mantine/core';
import { useRouter } from 'next/router';

import PageLayout from '../../layouts/PageLayout';
import Navbar from '../header/components/Navbar/Navbar';
import Footer from '../footer';
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
    <PageLayout title={"Categories"}>
      <Navbar className={styles.navbar}>
        <CustomButton style={{ margin: '1rem', padding: '14px 32px', color: 'var(--dark-color)' }} onClick={() => { push('/admin/categories/create') }}>
          Нова категорія
        </CustomButton>
      </Navbar>
      <main style={{ minHeight: '60vh' }}>
        <Container>
          <Frame className={styles.frame}>
            <Flex align={'center'} justify={'space-between'}>
              <Box>
                <Text fz={28} fw={700}>
                  Всі категорії
                </Text>
              </Box>
              <Box>
                <Sortings allCategories={data} setCategories={setCategories} />
              </Box>
            </Flex>
            <Loading visible={isLoading} />
            <CategoriesList categories={categories} />
          </Frame>
        </Container>
      </main>
      <Footer />
    </PageLayout>
  )
}

export default CategoriesView

