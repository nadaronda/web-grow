import { api } from "./api";

export const backendFetcher = async (endpoint: string) => {
    const response = await api.get(endpoint);
    return response.data;
};