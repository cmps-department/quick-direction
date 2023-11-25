import { Container, Flex, Stack, Text, Center } from "@mantine/core";
import Frame from "../../components/Frame/Frame";

import styles from "./styles.module.scss";
import { useSession } from "next-auth/react";
import { useEffect, useMemo, useState } from "react";
import Tabs, { TabState } from "./components/Tabs/Tabs";
import RequestItem from "./components/RequestItem";
import Chat from "./components/Chat";
import { useRequests } from "./hooks/useRequests";
import { IRequest } from "../../interfaces/request.interface";
import Loading from "../../components/Loading/Loading";

const RequestProcessingView = () => {
    const { data: session } = useSession();
    const [activeTab, setActiveTab] = useState<TabState>("active");
    const [activeRequest, setActiveRequest] = useState<IRequest | null>(null);
    const { requests, isLoading } = useRequests();

    useEffect(() => {
        setActiveRequest(null);
    }, [activeTab]);

    const setRole = (roles: string[]) => {
        if (roles?.includes("ROLE_TEACHER")) {
            return "Викладач"
        } else if (roles?.includes("ROLE_ADMIN")) {
            return "Адміністратор"
        } else if (roles?.includes("ROLE_STUDENT")) {
            return "Студент"
        }
    }

    const requestsData = useMemo(() => {
        if (activeTab === "processed") {
            return requests
                .filter(request => request.status === "Processing")
                .map((request) => (
                    <RequestItem
                        key={request.id}
                        request={request} setActiveRequest={() => setActiveRequest(activeRequest => activeRequest ? null : request)}
                        hidden={!!activeRequest}
                        isActive={activeRequest ? activeRequest.id === request.id : false}
                    />
                ));
        }

        return requests.map((request) => (
            <RequestItem
                key={request.id}
                request={request} setActiveRequest={() => setActiveRequest(activeRequest => activeRequest ? null : request)}
                hidden={!!activeRequest}
                isActive={activeRequest ? activeRequest.id === request.id : false}
            />
        ));
    }, [activeTab, requests]);

    return (
        <Container size="lg" mih="60vh">
            <Stack gap={24} pl={35}>
                <Text fw={700} fz={28}>{session?.user.name}</Text>
                <Text fw={700} fz={20}>{setRole(session?.roles!)}</Text>
                <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </Stack>
            <Flex align="baseline" style={{ marginBlock: "34px" }}>
                <Frame className={`${styles.frame} ${activeRequest ? styles.compressed : null}`}>
                    <Stack mih={685}>
                        {
                            isLoading
                                ? <Loading visible={isLoading} />
                                : requestsData.length > 0 ? requestsData : (
                                    <Flex mih={685} w={"100%"} align="center" justify="center">
                                        <Text fz={20} fw={700} c="gray">Нічого не знайдено...</Text>
                                    </Flex>
                                )
                        }
                    </Stack>
                </Frame>
                {activeRequest ? <Chat request={activeRequest} /> : null}
            </Flex>
        </Container>
    )
}

export default RequestProcessingView;