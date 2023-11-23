import { Box, Container, Flex, Stack, Text } from "@mantine/core";
import Frame from "../../components/Frame/Frame";

import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Tabs, { TabState } from "./components/Tabs/Tabs";
import RequestItem from "./components/RequestItem";
import Chat from "./components/Chat";

export interface IRequest {
    id: number;
    category: string;
    categoryName: string;
    subdirection: string;
    userGroup: string;
    userName: string;
}

const requests: IRequest[] = [
    {
        id: 1,
        category: "Категорія 1",
        categoryName: "Категорія для прийняття заяв на вступ абітурієнтів за квотою 1",
        subdirection: "Підкатегорія 2",
        userGroup: "ІКМ-220в",
        userName: "Губенко Г.В."
    },
    {
        id: 2,
        category: "Категорія 1",
        categoryName: "Категорія для прийняття заяв на вступ абітурієнтів за квотою 1",
        subdirection: "Підкатегорія 2",
        userGroup: "ІКМ-220в",
        userName: "Губенко Г.В."
    },
    {
        id: 3,
        category: "Категорія 1",
        categoryName: "Категорія для прийняття заяв на вступ абітурієнтів за квотою 1",
        subdirection: "Підкатегорія 2",
        userGroup: "ІКМ-220в",
        userName: "Губенко Г.В."
    },
    {
        id: 4,
        category: "Категорія 1",
        categoryName: "Категорія для прийняття заяв на вступ абітурієнтів за квотою 1",
        subdirection: "Підкатегорія 2",
        userGroup: "ІКМ-220в",
        userName: "Губенко Г.В."
    },
    {
        id: 5,
        category: "Категорія 1",
        categoryName: "Категорія для прийняття заяв на вступ абітурієнтів за квотою 1",
        subdirection: "Підкатегорія 2",
        userGroup: "ІКМ-220в",
        userName: "Губенко Г.В."
    },
    {
        id: 6,
        category: "Категорія 1",
        categoryName: "Категорія для прийняття заяв на вступ абітурієнтів за квотою 1",
        subdirection: "Підкатегорія 2",
        userGroup: "ІКМ-220в",
        userName: "Губенко Г.В."
    },
    {
        id: 7,
        category: "Категорія 1",
        categoryName: "Категорія для прийняття заяв на вступ абітурієнтів за квотою 1",
        subdirection: "Підкатегорія 2",
        userGroup: "ІКМ-220в",
        userName: "Губенко Г.В."
    },
    {
        id: 8,
        category: "Категорія 1",
        categoryName: "Категорія для прийняття заяв на вступ абітурієнтів за квотою 1",
        subdirection: "Підкатегорія 2",
        userGroup: "ІКМ-220в",
        userName: "Губенко Г.В."
    },
]

const RequestProcessingView = () => {
    const { data: session } = useSession();
    const [activeTab, setActiveTab] = useState<TabState>("active");
    const [activeRequest, setActiveRequest] = useState<IRequest | null>(null);

    useEffect(() => {
        console.log(activeTab);
        setActiveRequest(null);
    }, [activeTab])

    const setRole = (roles: string[]) => {
        if (roles?.includes("ROLE_TEACHER")) {
            return "Викладач"
        } else if (roles?.includes("ROLE_ADMIN")) {
            return "Адміністратор"
        } else if (roles?.includes("ROLE_STUDENT")) {
            return "Студент"
        }
    }

    const requestsData = requests.map((request) => (
        <RequestItem
            key={request.id}
            request={request} setActiveRequest={() => activeRequest ? setActiveRequest(null) : setActiveRequest(request)}
            hidden={!!activeRequest}
            isActive={activeRequest ? activeRequest.id === request.id : false}
        />
    ))

    return (
        <Container size="lg" mih="60vh">
            <Stack gap={24} pl={35}>
                <Text fw={700} fz={28}>{session?.user.name}</Text>
                <Text fw={700} fz={20}>{setRole(session?.roles!)}</Text>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </Stack>
            <Flex align="baseline" style={{ marginBlock: "34px" }}>
                <Frame className={`${styles.frame} ${activeRequest ? styles.compressed : null}`}>
                    <Stack>
                        {requestsData}
                    </Stack>
                </Frame>
                {activeRequest ? <Chat request={activeRequest} /> : null}
            </Flex>
        </Container>
    )
}

export default RequestProcessingView;