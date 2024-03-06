import { FileApiResponse } from '../../../interfaces/files.interface';
import api from '../../../utils/api';

export const uploadFile = async (file: File) => {
  const formData = new FormData();
  formData.append('', file);

  const response = await api.post<FileApiResponse>('/api/upload', formData);
  return response.data;
};
