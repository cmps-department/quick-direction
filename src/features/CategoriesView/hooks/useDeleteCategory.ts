import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query"
import axios from "axios";


const useDeleteCategory = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation(
        async (directionId: number) => {
            try {
                const response = await axios.delete(`/api/direction/delete/${directionId}`);
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['categories']);
            },
        }
    );


    const deleteCategory = (directionId: number) => {
        mutation.mutate(directionId);
    };

    return { deleteCategory, isLoading: mutation.isLoading };
};


export default useDeleteCategory
