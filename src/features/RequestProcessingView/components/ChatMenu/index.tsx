import { Menu, Stack, UnstyledButton, Text } from "@mantine/core";
import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";

import styles from "./styles.module.scss";
import { Icon } from "@iconify/react";
import { useSession } from "next-auth/react";
import { useUpdateRequest } from "../../hooks/useUpdateRequest";
import { RequestStatus, RequestStatusTraslit } from "@/constants/request-status";

interface ChatMenuProps {
    requestId: number;
    currentStatus: keyof typeof RequestStatus;
    setActiveRequestId: Dispatch<SetStateAction<number | null>>;
}

const MenuAdminItems = [
  { id: 1, label: 'Надіслано', value: 'Submitted', color: '#000' },
  { id: 2, label: 'В обробці', value: 'Processing', color: '#000' },
  { id: 3, label: 'Потребує уточнення', value: 'Clarify', color: '#000' },
  { id: 4, label: 'Уточнений', value: 'Clarified', color: '#000' },
  { id: 5, label: 'Опрацьований', value: 'Processed', color: '#02808F' },
  { id: 6, label: 'Скасований', value: 'Canceled', color: '#A1001B' },
];

const MenuStudentItems = [{ id: 1, label: "Скасований", value: "Canceled", color: "#A1001B" }];

const ChatMenu: FC<ChatMenuProps> = ({ currentStatus, requestId, setActiveRequestId }) => {
  const [opened, setOpened] = useState(false);
  const { data: session } = useSession();
  const { updateRequest } = useUpdateRequest(requestId);

  const menuItems = useMemo(() => {
    if (session?.roles.includes('ROLE_TEACHER') || session?.roles.includes('ROLE_ADMIN')) return MenuAdminItems;
    return MenuStudentItems;
  }, [session]);

    const changeRequestStatus = (status: ChatMenuProps["currentStatus"]) => {
        updateRequest({ id: requestId, status });
        setOpened(false);
        setActiveRequestId(null);
    };

    return (
        <Menu classNames={{ dropdown: styles.dropdown }} opened={opened} onChange={setOpened}>
            <Menu.Target>
                <UnstyledButton ml={10} c="#02808F">
                    <Icon width={25} height={25} icon="pepicons-pop:dots-x" />
                </UnstyledButton>
            </Menu.Target>

            <Menu.Dropdown>
                <Stack gap={5} mb={10}>
                    <Text fz={12} fw={500} c="#868e96">
                        Поточний стан запиту:
                    </Text>
                    <Text fw={600} fz={18}>
                        {RequestStatusTraslit[currentStatus]}
                    </Text>
                    <Text fz={12} fw={500} c="#868e96">
                        Змінити поточний стан запиту на:
                    </Text>
                </Stack>
                <Stack gap={24}>
                    {menuItems.map((item) => {
                        if (item.value === currentStatus) return null;
                        return (
                            <UnstyledButton
                                onClick={() => changeRequestStatus(item.value as ChatMenuProps["currentStatus"])}
                                key={item.id}
                                className={styles.btn}
                                c={item.color}
                            >
                                <Text fw={600} fz={18}>
                                    {item.label}
                                </Text>
                            </UnstyledButton>
                        );
                    })}
                </Stack>
            </Menu.Dropdown>
        </Menu>
    );
};

export default ChatMenu;
