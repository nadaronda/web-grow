import useSWR from "swr";
export const useProductList = () => {
    const swr = useSWR("/products", { refreshInterval: 3000 });
    return swr;
};

export const useIdProduct = () => {
    const swr = useSWR("/products/:id", { refreshInterval: 3000 });
    return swr;
};