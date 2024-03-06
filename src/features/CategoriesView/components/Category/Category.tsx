import React, { FC, useState } from "react";
import { Box, Flex, Text, Button, Image } from "@mantine/core";
import Link from "next/link";
import DeleteModal from "../../../CreateCategoryView/components/DeleteModal/DeleteModal";
import { useDisclosure } from "@mantine/hooks";
import styles from "./category.module.scss";
import useDeleteCategory from "../../hooks/useDeleteCategory";

interface ICategory {
    category: IGetCategory;
    index: number;
}

const Category: FC<ICategory> = ({ category, index }) => {
    const [isSwipe, setSwipe] = useState(false);
    const [isDeleteModalOpen, { open: openDeleteModal, close: closeDeleteModal }] = useDisclosure(false);

    const { deleteCategory } = useDeleteCategory();

    const handleDelete = async (answer: boolean) => {
        closeDeleteModal();
        if (answer) {
            const result = await deleteCategory(category.id);
        }
    };

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setSwipe((prev) => !prev);
    };

    return (
        <>
            <Flex align={"center"} pos={"relative"}>
                <Button onClick={openDeleteModal} radius={"xl"} className={styles.deleteBtn}>
                    <Image width={40} height={40} src="/images/DeleteBtn.svg" alt="Success" />
                </Button>
                <Link
                    style={isSwipe ? { transform: "translateX(80px)", width: "100%", zIndex: 20 } : { width: "100%", zIndex: 20 }}
                    onContextMenu={handleRightClick}
                    href={`/admin/categories/${category.id}`}
                >
                    <Flex className={styles.category} align={"center"} justify={"space-between"} p={24}>
                        <Box h={20} w={20} bg={category.color} style={{ borderRadius: "50%" }}></Box>
                        <Flex style={{ flex: 1 }} align={"center"} justify={"space-between"}>
                            <Text style={{ flex: 3, textAlign: "center" }} fz={20} fw={600} c={"var(--accent-color)"}>
                                {category.name}
                            </Text>
                            <Text style={{ flex: 1, textAlign: "end" }} fz={18} fw={600} c={"black"}>
                                {category.professor}
                            </Text>
                        </Flex>
                    </Flex>
                </Link>
            </Flex>
            <DeleteModal setAnswer={handleDelete} opened={isDeleteModalOpen} close={closeDeleteModal} />
        </>
    );
};

export default Category;
