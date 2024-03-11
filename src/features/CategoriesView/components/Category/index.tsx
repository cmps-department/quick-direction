import React, { FC, useState } from "react";
import { Box, Flex, Text, Button, Image } from "@mantine/core";
import Link from "next/link";
import routes from "@/constants/routes";

import styles from "./styles.module.scss";
import { Modals } from "@/components/Modals/data/modals";
import { useModalStore } from "@/store/modal.store";

interface ICategory {
    category: IGetCategory;
}

const Category: FC<ICategory> = ({ category }) => {
    const [isSwipe, setSwipe] = useState(false);
    const setOpen = useModalStore((store) => store.setOpen);

    const handleRightClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setSwipe((prev) => !prev);
    };

    return (
        <Flex align={"center"} pos={"relative"}>
            <Button
                onClick={() =>
                    setOpen({
                        trigger: Modals.DELETE,
                        payload: {
                            name: category.name,
                            id: category.id,
                        },
                    })
                }
                radius={"xl"}
                className={styles.deleteBtn}
            >
                <Image width={40} height={40} src="/images/DeleteBtn.svg" alt="delete-category" />
            </Button>
            <Link
                style={{ transition: "all .2s linear", marginLeft: isSwipe ? "80px" : 0, width: "100%", zIndex: 20 }}
                onContextMenu={handleRightClick}
                href={routes.EDIT_CATEGORY(category.id)}
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
    );
};

export default Category;
