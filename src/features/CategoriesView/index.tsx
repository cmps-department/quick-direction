import React, { FC } from 'react'
import PageLayout from '../../layouts/PageLayout'
import Navbar from '../header/components/Navbar/Navbar'
import Footer from '../footer'

import styles from './categories.module.scss'
import { Box, Button, Flex, Text } from '@mantine/core'
import Container from '../../components/Container/Container'
import Frame from '../../components/Frame/Frame'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useRouter } from 'next/router'

const CategoriesView: FC = () => {
  const { push } = useRouter();

  return (
    <PageLayout title={"Categories"}>
      <Navbar className={styles.navbar}>
        <CustomButton style={{ margin: '1rem', padding: '14px 32px', color: 'var(--dark-color) '}} onClick={() => { push('/admin/categories/create') }}>
          Нова категорія
        </CustomButton>
      </Navbar>
      <main>
        <Container>
          <Frame className={styles.frame}>
            <Flex align={'center'} justify={'space-between'}>
              <Box>
                <Text fz={28} fw={700}>
                  Всі категорії
                </Text>
              </Box>
              <Box>
                <Button style={{ border: 'none' }} bg={'transparent'} variant='default' fz={18} fw={600} mr={24}>
                  Фільтр
                </Button>
                <Button style={{ border: 'none' }} bg={'transparent'} variant='default' fz={18} fw={600}>
                  Сортування
                </Button>
              </Box>
            </Flex>
          </Frame>
        </Container>
      </main>
      <Footer />
    </PageLayout>
  )
}

export default CategoriesView
