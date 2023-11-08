import React from 'react';
import { Box, Flex, Text } from '@mantine/core';
import Link from 'next/link';
import { IGetCategory } from '../../../../interfaces/category.interface';

import styles from './category.module.scss'

const Category = ({ category, index }: { category: IGetCategory, index: number }) => {
    return (
        <Link href={'/admin/categories/create'} >
            <Flex className={styles.category} wrap={'wrap'} align={"center"} justify={"space-between"} p={24}>
                <Flex align={"center"} gap={12}>
                    <Box h={20} w={20} bg={category.color} style={{ borderRadius: '50%' }}></Box>
                    <Text fz={18} fw={600} c={'var(--accent-color)'}>Категорія {index}</Text>
                </Flex>

                <Text fz={16} fw={400} c={'black'}>{category.name}</Text>

                <Text fz={18} fw={600} c={'black'}>{category.professor}</Text>
            </Flex>
        </Link>
    )
}

export default Category
