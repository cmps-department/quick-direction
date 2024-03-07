import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import api from '../../../utils/api';
import { IFaqResponse } from '../../../interfaces/faq.interface';

export const useFaq = () => {
  const { data, ...options } = useQuery(['REQUESTS'], () => api.get<IFaqResponse[]>('/api/faq'));

  const faq = useMemo(() => {
    if (!data) return [];
    return data.data;
  }, [data]);

  return {
    faq,
    ...options,
  };
};
