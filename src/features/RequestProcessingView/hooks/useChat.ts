import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSession } from 'next-auth/react';
import { MessagePayload, useSendMessage } from './useSendMessage';
import { uploadFile } from '../../RequestDirectionsView/api/uploadFile';

export interface ChatFormState {
  text: string;
  files?: File[];
}

export default function useChatForm(requestId: number) {
  const { data: session } = useSession();
  const { sendMessage, isLoading } = useSendMessage(requestId);

    const form = useForm<ChatFormState>({
        // @ts-ignore
        resolver: yupResolver(
            yup.object().shape({
                text: yup.string().required("Обов'язкове поле"),
                files: yup.array().of(yup.mixed<File>()),
            }),
        ),
        defaultValues: {
            text: "",
            files: [],
        },
    });

    const onSubmit = (data: ChatFormState) => {
        const payload: MessagePayload = {
            requestId: requestId,
            userId: session?.user.userId!,
            userName: session?.user.name.split(" ")[0]!,
            userSurname: session?.user.name.split(" ")[1]!,
            text: data.text,
            documentLinks: [],
        };

        if (data.files) {
            const uploadFilesQueue = data.files.map((file) => uploadFile(file));
            Promise.all(uploadFilesQueue)
                .then((uploadedFiles) => {
                    const documentLinks = uploadedFiles.map((upladedFile) => upladedFile.fileLink);
                    payload.documentLinks = documentLinks;
                    sendMessage(payload);
                })
                .catch((err) => console.log(err))
                .finally(() => form.reset({ text: "", files: [] }));
        } else {
            sendMessage(payload);
            form.reset({ text: "", files: [] });
        }
    };

    return {
        form,
        onSubmit,
        isLoading,
    };
}
