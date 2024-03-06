import { UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

const useGetCategory = (id: string | null | undefined | number | string[]): UseQueryResult<IGetCategory, unknown> => {
    return useQuery(["oneCategory"], () => {
        if (id !== null && (typeof id === "number" || !isNaN(Number(id)))) {
            return axios.get(`/api/direction/get/${id}`).then((response) => response.data as IGetCategory);
        } else {
            return Promise.resolve(null);
        }
    });
};

export default useGetCategory;
