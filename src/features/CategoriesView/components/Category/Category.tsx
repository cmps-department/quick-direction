import React, { FC, useState } from 'react';
import { Box, Flex, Text, Button, Image } from '@mantine/core';
import Link from 'next/link';
import { IGetCategory } from '../../../../interfaces/category.interface';
import DeleteModal from '../../../CreateCategoryView/components/DeleteModal/DeleteModal';
import { useDisclosure } from '@mantine/hooks';
import styles from './category.module.scss'
import useDeleteCategory from '../../hooks/useDeleteCategory';
import { useRouter } from 'next/router';

interface ICategory {
    category: IGetCategory
}

const Category: FC<ICategory> = ({ category }) => {
    const [isSwipe, setSwipe] = useState(false);
    const [isDeleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] = useDisclosure(false);

    const { deleteCategory } = useDeleteCategory();


    const handleDelete = async (answer: boolean) => {
        closeDeleteModal();
        if (answer) {
            const result = await deleteCategory(category.id);
        }
    }

    return (
        <>
            <Flex align={'center'} pos={'relative'}>
                <Button onClick={openDeleteModal} radius={'xl'} className={styles.deleteBtn}>
                    <Image
                        width={40}
                        height={40}
                        src="/images/DeleteBtn.svg"
                        alt="Success"
                    />
                </Button>
                <Link
                    style={isSwipe ? { transform: 'translateX(80px)', width: '100%', zIndex: 20 } : { width: '100%', zIndex: 20 }}
                    onMouseDown={() => setSwipe(prev => !prev)}
                    href={'/admin/categories/create'}
                >
                    <Flex className={styles.category} wrap={'wrap'} align={"center"} justify={"space-between"} p={24}>
                        <Flex align={"center"} gap={12}>
                            <Box h={20} w={20} bg={category.color} style={{ borderRadius: '50%' }}></Box>
                            <Text fz={18} fw={600} c={'var(--accent-color)'}>Категорія {category.id}</Text>
                        </Flex>

                        <Text fz={16} fw={400} c={'black'}>{category.name}</Text>

                        <Text fz={18} fw={600} c={'black'}>{category.professor}</Text>
                    </Flex>
                </Link>
            </Flex>
            <DeleteModal setAnswer={handleDelete} opened={isDeleteModalOpen} close={closeDeleteModal} />
        </>
    )
}

export default Category
