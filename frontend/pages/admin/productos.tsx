import { useEffect, useState } from "react";
import { Card } from "../../components/form/Card";
import { getProducts, api } from "../../lib/Api";


function productos() {
    const [data, setData] = useState([]);
    useEffect(() => {

        api.get("/products").then((response) => setData(response.data));

    }, []);


    console.log(data);
    return (<>
        <title>Baja de productos:</title>
        <p>En esta página se observan los  </p>
        <p>IDEAS:</p>
        <p>se añade la carta del producto con todos sus parametros, pero con 2 botones</p>
        <button>Borrar</button>
        <button>Añadir a altas</button>

        {

            data.map((elemento) => (

                <Card key={elemento._id} nameProduct={elemento.nameProduct} description={elemento.description} price={elemento.price} />


            ))
        }
    </>);
}

export default productos;