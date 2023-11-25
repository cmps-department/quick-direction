import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../../utils/api";
import { IRequest } from "../../../interfaces/request.interface";

export const useRequests = () => {
    const { data, ...options } = useQuery(
        ["REQUESTS"],
        () => api.get<IRequest[]>("/api/requests")
    );

    const requests = useMemo(() => {
        if (!data) return [];
        return data.data;
    }, [data]);

    return {
        requests,
        ...options,
    };
};



