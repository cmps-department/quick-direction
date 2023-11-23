import { Menu, Stack, UnstyledButton, Text } from '@mantine/core';
import { useState } from 'react';

import styles from "./styles.module.scss";
import { Icon } from '@iconify/react';

const ChatMenu = () => {
    const [opened, setOpened] = useState(false);
    return (
        <Menu classNames={{ dropdown:  styles.dropdown}} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <UnstyledButton ml={10} c="#02808F">
                    <Icon width={25} height={25} icon="pepicons-pop:dots-x"/>
                </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
                <Stack gap={24}>
                    <UnstyledButton className={styles.btn} c='#02808F'>
                        <Text fw={600} fz={18}>Опрацьовано</Text>
                    </UnstyledButton>
                    <UnstyledButton className={styles.btn}>
                        <Text fw={600} fz={18}>Перенаправити заявку</Text>
                    </UnstyledButton>
                    <UnstyledButton className={styles.btn} c='#A1001B'>
                        <Text fw={600} fz={18}>Видалити</Text>
                    </UnstyledButton>
                </Stack>
            </Menu.Dropdown>
        </Menu>
    )
}

export default ChatMenu