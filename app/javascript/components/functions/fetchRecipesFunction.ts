import axios from 'axios';
import type { Recipe } from '../types/Recipe';

interface FetchResponce {
    count: number;
    results: Recipe[];
}
export const fetchRecipesFunction = async (
    beanId: string,
): Promise<FetchResponce> => {
    try {
        const response = await axios.get<FetchResponce>('/api/recipes', {
            params: { bean_id: beanId },
        });
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch recipes.');
    }
};
