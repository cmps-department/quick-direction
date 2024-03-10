import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../../utils/api";

export const useMessages = (requestId: number) => {
    const { data, ...options } = useQuery(["MESSAGES", { requestId }], () => api.get<IMessage[]>(`/api/messages/${requestId}`));

    const messages = useMemo(() => {
        if (!data) return [];
        return data.data;
    }, [data]);

    return {
        messages,
        ...options,
    };
};
