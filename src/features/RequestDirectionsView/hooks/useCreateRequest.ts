import { useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../../../utils/api';
import { RequestPayload } from '../../../interfaces/request.interface';

export const useCreateRequest = () => {
  const queryClient = useQueryClient();
  const { mutate: createRequest } = useMutation({
    mutationFn: (payload: RequestPayload) => api.post('/api/requests', payload),
    mutationKey: ['REQUESTS'],
    onSuccess: () => {
      queryClient.invalidateQueries(['REQUESTS']);
    },
    onError: () => {},
  });

  return {
    createRequest,
  };
};
