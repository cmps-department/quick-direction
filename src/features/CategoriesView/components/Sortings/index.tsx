import { Button, Menu } from "@mantine/core";
import React, { FC, useMemo } from "react";

import styles from "./styles.module.scss";
import { useCategoryFilterStore } from "@/store/filter-category.store";

const Sortings: FC = () => {
    const filter = useCategoryFilterStore((state) => state.filter);
    const setFilter = useCategoryFilterStore((state) => state.setFilter);

    const label = useMemo(() => {
        switch (filter) {
            case "asc":
                return "Від А до Я";
            case "dec":
                return "Від Я до А";
            case "date":
                return "За часом створення";
            default:
                return "Сортування";
        }
    }, [filter]);

    return (
        <Menu position="bottom-start" offset={10} arrowPosition="center">
            <Menu.Target>
                <Button className={styles.menuItem} style={{ border: "none" }} variant="default">
                    {label}
                </Button>
            </Menu.Target>

            <Menu.Dropdown style={{ borderRadius: "24px" }}>
                <Menu.Item component="button" onClick={() => setFilter(filter === "asc" ? "" : "asc")} className={styles.menuItem}>
                    Від А до Я
                </Menu.Item>
                <Menu.Item component="button" onClick={() => setFilter(filter === "dec" ? "" : "dec")} className={styles.menuItem}>
                    Від Я до А
                </Menu.Item>
                <Menu.Item component="button" onClick={() => setFilter(filter === "date" ? "" : "date")} className={styles.menuItem}>
                    За часом створення
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
};

export default Sortings;
