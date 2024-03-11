import { useQuery } from "@tanstack/react-query";
import api from "../../../utils/api";

export const useRequest = (requestId: number) => {
    const { data, ...options } = useQuery(["REQUESTS", { requestId }], () => api.get<IRequest>(`/api/requests/${requestId}`));

    return {
        request: data?.data,
        ...options,
    };
};
