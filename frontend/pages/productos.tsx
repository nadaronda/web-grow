import { Card } from "../components/form/Card";

import { useProductList } from "../hooks/useProductList";


function productos() {

  const { data } = useProductList();


  return (<>
    <title>Productos dado de alta:</title>
    <div className="min-h-[810px] flex justify-center items-center ">
      <div className="w-full flex flex-wrap gap-1 items-center justify-center my-10">
        {
          data && data.map((elemento) => (

            <Card key={elemento._id} nameProduct={elemento.nameProduct} description={elemento.description} price={elemento.price} _id={elemento._id} />

          ))

        }
      </div>
    </div>

  </>);
}

export default productos;