import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { uploadFile } from "../api/uploadFile";
import { useSession } from "next-auth/react";
import { RequestStatus } from "../../../constants/request-status";
import { useCreateRequest } from "./useCreateRequest";
import { useRouter } from "next/router";
import { useEffect } from "react";

interface useCreateFormProps {
    openSuccessModal: () => void;
}

export interface RequestFormState {
    name: string;
    surname: string;
    email: string;
    studentGroup: string;
    text?: string;
    document?: File;
    directionId: number;
    subDirectionId: number;
}

export default function useCreateForm({ openSuccessModal }: useCreateFormProps) {
    const { data: session } = useSession();
    const { createRequest } = useCreateRequest();
    const router = useRouter();

    const form = useForm<RequestFormState>({
        resolver: yupResolver(
            yup.object().shape({
                name: yup.string().required("Обов'язкове поле"),
                surname: yup.string().required("Обов'язкове поле"),
                email: yup.string().email("Недійсна поштова адреса").required("Обов'язкове поле"),
                studentGroup: yup.string().required("Обов'язкове поле"),
                text: yup.string(),
                document: yup.mixed<File>(),
                directionId: yup.number().required("Обов'язкове поле"),
                subDirectionId: yup.number().required("Обов'язкове поле"),
            }),
        ),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            studentGroup: "",
            text: "",
            document: undefined,
            directionId: undefined,
            subDirectionId: undefined,
        },
    });

    useEffect(() => {
        form.setValue("email", session?.user.email!);
    }, [session]);

    const onSubmit = async (data: RequestFormState) => {
        try {
            const payload: RequestPayload = {
                name: data.name,
                surname: data.surname,
                email: data.email,
                studentGroup: data.studentGroup,
                userId: session?.user.userId!,
                directionId: data.directionId,
                subDirectionId: data.subDirectionId,
                status: RequestStatus.Submitted,
            };

            if (data.document) {
                const response = await uploadFile(data.document);
                payload.documentLink = response.fileLink;
                payload.text = "";
            } else {
                payload.documentLink = "";
                payload.text = data.text;
            }

            createRequest(payload);
            openSuccessModal();
            setTimeout(() => {
                router.push("/request-processing");
            }, 3000);
        } catch (err) {
            console.log(err);
        }
    };

    return {
        form,
        onSubmit,
    };
}
