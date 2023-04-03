import React, { useState, useEffect } from "react";
import { getProductWithId } from "../../lib/Api";
import { FormProduct } from "../../components/form/FormProduct";
import { interfaceProduct } from "../../types/interfaceProduct";
export function getServerSideProps(ctx: any) {
    const { params } = ctx;
    const { _id } = params;
    return { props: { _id } };
}

const editar: React.FC<{ _id: string; }> = ({ _id }) => {
    console.log(_id);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const product: interfaceProduct = await getProductWithId(_id);
            setProduct(product);
        };
        fetchProduct();
    }, [_id]); console.log(product);
    return (<>

        <FormProduct product={product} />

    </>);
};

export default editar;