import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../utils/api";

export type MessagePayload = Omit<IMessage, "id" | "createdAt" | "updatedAt">;

export const useSendMessage = (requestId: number) => {
    const queryClient = useQueryClient();
    const { mutate: sendMessage, ...options } = useMutation({
        mutationFn: (payload: MessagePayload) => api.post("/api/messages", payload),
        mutationKey: ["MESSAGES", { requestId }],
        onSuccess: () => {
            queryClient.invalidateQueries(["MESSAGES", { requestId }]);
        },
    });

    return {
        sendMessage,
        ...options,
    };
};
