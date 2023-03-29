import { api } from "./Api";

export const backendFetcher = async (endpoint: string) => {
    const response = await api.get(endpoint);
    return response.data;
};