import { interfaceProduct } from "../../types/interfaceProduct";
import { deleteProduct } from "../../lib/Api";
import { useProductList } from "../../hooks/useProductList";
import { may } from "../../types/funciones/primeraMay";

export const CardCliente: React.FC<interfaceProduct> = ({ description, nameProduct, _id, active }) => {
    const { mutate } = useProductList();

    return (<>
        <div className=" drop-shadow-2xl w-[18rem] h-[18rem] px-3 py-3 gap-8 bg-neutral-50 rounded-lg border-2 border-solid  border-yellow-300 flex flex-col" >

            <h5 className="text-center text-2xl ">{may(nameProduct)}</h5>

            <p>Descripción: {may(description)}</p>




        </div>


    </>);
};