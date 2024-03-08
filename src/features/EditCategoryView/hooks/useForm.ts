import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useModalStore } from "@/store/modal.store";
import useMutationData from "@/hooks/useMutationData";
import { Modals } from "@/components/Modals/data/modals";
import { useRouter } from "next/router";

export interface CategoryFormState {
    name: string;
    description: string;
    color: string;
    professor: string;
    subDirections: {
        name: string;
        description: string;
        additionalInfo?: string;
        examplelink?: string;
        downloadFile: boolean;
        textField: boolean;
    }[];
}

export const subCategoryDefaultValue = {
    name: "",
    description: "",
    additionalInfo: "",
    examplelink: "",
    downloadFile: false,
    textField: false,
};

const defaultValues = {
    name: "",
    description: "",
    color: "#0000ff",
    professor: "",
    subDirections: [subCategoryDefaultValue],
};

export default function useEditForm() {
    const setOpen = useModalStore((state) => state.setOpen);
    const router = useRouter();
    const { id } = router.query;

    const updateCategory = useMutationData({
        url: () => `/api/direction/put/${id}`,
        type: "put",
        queryKeys: { invalidate: [{ queryKey: ["CATEGORIES"] }] },
    });

    const form = useForm<CategoryFormState>({
        resolver: yupResolver(
            yup.object().shape({
                name: yup.string().required("Обов'язкове поле"),
                description: yup.string().min(10, "Мінімальна довжина опису - 10 символів").required("Обов'язкове поле"),
                color: yup.string().required("Обов'язкове поле"),
                professor: yup.string().email("Поле має містити дійсну електронну адресу").required("Обов'язкове поле"),
                subDirections: yup
                    .array(
                        yup.object().shape({
                            name: yup.string().required("Обов'язкове поле"),
                            description: yup.string().min(10, "Мінімальна довжина опису - 10 символів").required("Обов'язкове поле"),
                            additionalInfo: yup.string(),
                            examplelink: yup.string(),
                            downloadFile: yup.boolean().required(),
                            textField: yup.boolean().required(),
                        }),
                    )
                    .required(),
            }),
        ),
        defaultValues,
    });

    const onSubmit = async (data: CategoryFormState) => {
        updateCategory.mutate(data, {
            onSuccess: () => {
                setOpen({
                    trigger: Modals.SUCCESS,
                });
            },
        });
    };

    return {
        form,
        onSubmit,
    };
}
