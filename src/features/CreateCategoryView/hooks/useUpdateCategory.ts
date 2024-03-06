import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const updateCategory = async ({ name, description, professor, color, subDirections, id }: ICategory & { id: number }) => {
    try {
        const response = await axios.put("/api/directions", {
            id,
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

const useUpdateCategory = () => {
    const queryClient = useQueryClient();

    return useMutation(updateCategory, {
        onSuccess: () => {
            queryClient.invalidateQueries(["categories"]);
        },
    });
};

export default useUpdateCategory;
