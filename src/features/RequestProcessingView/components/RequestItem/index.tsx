import { FC } from "react";
import { IRequest } from "../..";
import { Flex, Text } from "@mantine/core";

import styles from "./styles.module.scss";

interface RequestItemProps {
    request: IRequest;
    setActiveRequest: () => void;
    hidden: boolean;
    isActive: boolean;
}

const RequestItem: FC<RequestItemProps> = ({ request, setActiveRequest, hidden, isActive }) => {
    return (
        <Flex
            onClick={setActiveRequest}
            className={`${styles.request} ${hidden ? styles.hidden : null} ${isActive ? styles.active : null}`}
            p={24}
            align="center"
            justify="space-between"
        >
            <Flex align="center" gap={24}>
                <Text fw={600} fz={18} c="#02808F">{request.category}</Text>
                <Text fz={16}>{request.categoryName}</Text>
            </Flex>
            <Flex gap={5}>
                <Text fz={18}>{request.userGroup}</Text>
                <Text fz={18} fw={700}>{request.userName}</Text>
            </Flex>
        </Flex>
    )
}

export default RequestItem;