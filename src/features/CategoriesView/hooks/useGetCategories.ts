import { useQuery } from "@tanstack/react-query"
import axios from "axios";

const useGetCategories = () => {
    return useQuery(
        ['categories'],
        async () => {
            return axios.get('/api/directions');
        },
        {
            select: ({data}) => data
        }
    )
}

export default useGetCategories
