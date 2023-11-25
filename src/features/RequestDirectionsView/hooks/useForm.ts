import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormState {
    name: string;
    surname: string;
    email: string;
    text: string;
    document: File;
    directionId: number;
}

export default function useCreateForm() {
    const form = useForm<FormState>({
        resolver: yupResolver(
            yup.object().shape({
                name: yup.string().required("Обов'язкове поле"),
                surname: yup.string().required("Обов'язкове поле"),
                email: yup.string().email("Недійсна поштова адреса").required("Обов'язкове поле"),
                text: yup.string().required("Обов'язкове поле"),
                document: yup.mixed<File>().required("Обов'язкове поле"),
                directionId: yup.number().required("Обов'язкове поле"),
            }),
        ),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            text: "",
            document: undefined,
            directionId: undefined
        },
    });

    const onSubmit = async (data: FormState) => {
        console.log(data);
    };

    return {
        form,
        onSubmit,
    };
}
