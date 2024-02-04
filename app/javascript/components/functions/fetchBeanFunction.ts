import axios from 'axios';
import type { Bean } from '../types/Bean';

export const fetchBeanFunction = async (
    id: string | undefined,
): Promise<Bean> => {
    try {
        if (id === undefined) {
            throw new Error('Invalid request.');
        }
        const response = await axios.get<Bean>(`/api/beans/${id}`);

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch bean.');
    }
};
