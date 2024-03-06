import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const createCategory = async ({ name, description, professor, color, subDirections }: ICategory) => {
    try {
        const response = await axios.post("/api/directions", {
            name,
            description,
            professor,
            color,
            subDirections,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

const useCreateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation(createCategory, {
        onSuccess: () => {
            queryClient.invalidateQueries(["categories"]);
        },
    });
};

export default useCreateCategory;
