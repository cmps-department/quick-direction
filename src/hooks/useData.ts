import { useQuery } from "@tanstack/react-query";

import api from "@/utils/api";

export default function useData<T>({ queryKey, path, params = {} }: Pick<TPaginatedOptions, "path" | "queryKey" | "params">) {
    const fetchData = () => api.get(`${path}`, { params }).then((res: any) => res.data);

    return useQuery<T>({
        queryKey: [...queryKey, { ...params }],
        queryFn: fetchData,
        staleTime: Infinity,
    });
}
