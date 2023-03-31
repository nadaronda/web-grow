import { CardCliente } from "../components/form/CardCliente";

import { useProductList } from "../hooks/useProductList";


function productosCliente() {

  const { data } = useProductList();


  return (<>

    <div className="min-h-[810px] flex justify-center items-center bg-colores">
      <div className="w-full flex flex-wrap gap-1 items-center justify-center my-10">
        {
          data && data.map((elemento) => (

            <CardCliente key={elemento._id} nameProduct={elemento.nameProduct} description={elemento.description} price={elemento.price} _id={elemento._id} />

          ))

        }
      </div>
    </div>

  </>);
}

export default productosCliente;