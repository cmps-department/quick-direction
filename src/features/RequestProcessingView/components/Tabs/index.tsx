import { Dispatch, FC, Fragment, SetStateAction } from 'react';
import { Box, Flex, UnstyledButton } from '@mantine/core';

import styles from './styles.module.scss';

export type TabState = 'active' | 'processed';

interface ITab {
  value: TabState;
  label: string;
}

interface TabsProps {
  activeTab: TabState;
  setActiveTab: Dispatch<SetStateAction<TabState>>;
}

const tabsData: ITab[] = [
    { value: "active", label: "Активні" },
    { value: "processed", label: "Опрацьовані" },
];

const Tabs: FC<TabsProps> = ({ activeTab, setActiveTab }) => {
    const changeTab = (value: ITab["value"]) => {
        if (activeTab === value) return;
        setActiveTab(value);
    };

    const tabs = tabsData.map((tab, idx) => (
        <Fragment key={idx}>
            <UnstyledButton onClick={() => changeTab(tab.value)} className={activeTab === tab.value ? styles.active : styles.tab}>
                {tab.label}
            </UnstyledButton>
            {idx === tabsData.length - 1 ? null : <Box className={styles.divider}></Box>}
        </Fragment>
    ));

    return (
        <Flex gap={24} align="center">
            {tabs}
        </Flex>
    );
};

export default Tabs;
