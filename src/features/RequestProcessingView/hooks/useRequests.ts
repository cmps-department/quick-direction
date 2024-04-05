import { useQuery } from "@tanstack/react-query";
import api from "../../../utils/api";

export const useRequests = () => {
    const { data, ...options } = useQuery(["REQUESTS"], () => api.get<IRequest[]>("/api/requests"));

    return {
        requests: data?.data || ([] as IRequest[]),
        ...options,
    };
};
