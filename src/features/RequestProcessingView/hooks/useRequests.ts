import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../../../utils/api";
import { IRequest } from "../../../interfaces/request.interface";
import { useSession } from "next-auth/react";

export const useRequests = () => {
    const { data: session } = useSession();
    const { data, ...options } = useQuery(
        ["REQUESTS"],
        () => api.get<IRequest[]>("/api/requests")
    );

    const requests = useMemo(() => {
        if (!data) return [];

        if (session?.roles.includes("ROLE_ADMIN")) {
            return data.data;
        } else if (session?.roles.includes("ROLE_TEACHER")) {
            return data.data.filter((request) => {
                return request.direction.professor === session.user.email
            });
        } else {
            return data.data.filter((request) => request.userId === session?.user.userId);
        }
    }, [data]);



    return {
        requests,
        ...options,
    };
};



