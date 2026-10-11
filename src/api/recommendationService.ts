import { apiClient } from './api';
import { WisItem } from '../types';

export const recommendationService = {
  getRecommendations: async (userId: string): Promise<WisItem[]> => {
    return await apiClient.get(`/recommendations?userId=${userId}`);
  },
  getAllItems: async (): Promise<WisItem[]> => {
    return await apiClient.get('/items');
  },
};
