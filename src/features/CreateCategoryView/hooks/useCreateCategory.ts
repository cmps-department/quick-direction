import { useMutation } from "@tanstack/react-query"
import axios from "axios";
import { ICategory } from "../../../interfaces/category.interface";

const createCategory = async ({
    name,
    description,
    professor,
    color,
    subDirections,
}: ICategory) => {
    try {
        const response = await axios.post('/api/directions', {
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
    return useMutation(createCategory);
};


export default useCreateCategory

