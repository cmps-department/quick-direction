import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useModalStore } from "@/store/modal.store";
import { Modals } from "@/components/Modals/data/modals";
import useMutationData from "@/hooks/useMutationData";

export interface CategoryFormState {
    question: string;
    answer: string;
    questionType: string;
    documentLink?: string;
}

const defaultValues = {
    question: "",
    answer: "",
    questionType: "",
    documentLink: "",
};

export default function useEditForm() {
    const setOpen = useModalStore((state) => state.setOpen);
    const createFaq = useMutationData<any>({
        url: (payload) => `/api/faq/${payload?.id}`,
        type: "put",
        queryKeys: { invalidate: [{ queryKey: ["FAQ"] }] },
    });

    const form = useForm<CategoryFormState>({
        resolver: yupResolver(
            yup.object().shape({
                question: yup.string().min(10, "Мінімальна довжина питання - 10 символів").required("Обов'язкове поле"),
                answer: yup.string().min(10, "Мінімальна довжина відповіді - 10 символів").required("Обов'язкове поле"),
                questionType: yup.string().required("Обов'язкове поле"),
                documentLink: yup.string(),
            }),
        ),
        defaultValues,
    });

    const onSubmit = async (data: CategoryFormState) => {
        createFaq.mutate(data, {
            onSuccess: () => {
                setOpen({
                    trigger: Modals.SUCCESS,
                    payload: {
                        name: data.question,
                    },
                });
            },
        });
    };

    return {
        form,
        onSubmit,
    };
}
