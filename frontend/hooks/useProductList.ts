import useSWR from "swr";
export const useProductList = () => {
    const swr = useSWR("/products", { refreshInterval: 3000 });
    return swr;
};