import { Button, Menu } from "@mantine/core";
import React, { FC } from "react";

import styles from "./sortings.module.scss";

enum EnumSortings {
    Alphabetical,
    NonAlphabetical,
    CreationTime,
}

interface ISortings {
    allCategories: IGetCategory[] | [];
    setCategories: (arr: IGetCategory[] | []) => void;
}

const Sortings: FC<ISortings> = ({ allCategories, setCategories }) => {
    const changeSortingData = (sorting: EnumSortings) => {
        switch (sorting) {
            case EnumSortings.Alphabetical:
                const arr1 = [...allCategories];
                arr1.sort((u1, u2) => {
                    const u1Name = u1.name.toUpperCase();
                    const u2Name = u2.name.toUpperCase();
                    if (u1Name < u2Name) {
                        return -1;
                    } else if (u1Name === u2Name) {
                        return 0;
                    }
                    return 1;
                });
                setCategories(arr1);
                break;
            case EnumSortings.NonAlphabetical:
                const arr2 = [...allCategories];
                arr2.sort((u1, u2) => {
                    const u1Name = u1.name.toUpperCase();
                    const u2Name = u2.name.toUpperCase();
                    if (u1Name > u2Name) {
                        return -1;
                    } else if (u1Name === u2Name) {
                        return 0;
                    }
                    return 1;
                });
                setCategories(arr2);
                break;
            case EnumSortings.CreationTime:
                const arr3 = [...allCategories];
                arr3.sort((u1, u2) => {
                    const dateA = new Date(u1.createdAt);
                    const dateB = new Date(u2.createdAt);
                    if (dateA < dateB) {
                        return -1;
                    }
                    if (dateA > dateB) {
                        return 1;
                    }
                    return 0;
                });
                setCategories(arr3);
                break;
            default:
                return;
        }
    };

    return (
        <Menu position="bottom-start" offset={10} arrowPosition="center">
            <Menu.Target>
                <Button className={styles.menuItem} style={{ border: "none" }} variant="default">
                    Сортування
                </Button>
            </Menu.Target>

            <Menu.Dropdown style={{ borderRadius: "24px" }}>
                <Menu.Item component="button" onClick={() => changeSortingData(EnumSortings.Alphabetical)} className={styles.menuItem}>
                    Від А до Я
                </Menu.Item>
                <Menu.Item component="button" onClick={() => changeSortingData(EnumSortings.NonAlphabetical)} className={styles.menuItem}>
                    Від Я до А
                </Menu.Item>
                <Menu.Item component="button" onClick={() => changeSortingData(EnumSortings.CreationTime)} className={styles.menuItem}>
                    За часом створення
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

export default Sortings;
