import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../../utils/api';
import { RequestStatus } from '../../../constants/request-status';

export type UpdateRequestPayload = {
  id: number;
  status: keyof typeof RequestStatus;
};

export const useUpdateRequest = (requestId: number) => {
    const queryClient = useQueryClient();
    const { mutate: updateRequest, ...options } = useMutation({
        mutationFn: (payload: UpdateRequestPayload) => api.patch("/api/requests", payload),
        mutationKey: ["REQUESTS", { requestId }],
        onSuccess: () => {
            queryClient.invalidateQueries(["REQUESTS", { requestId }]);
            queryClient.invalidateQueries(["REQUESTS"]);
        },
    });

    return {
        updateRequest,
        ...options,
    };
};
