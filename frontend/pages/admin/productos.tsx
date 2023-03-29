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
        <title>Productos dado de alta:</title>

        <div className="w-full h-full flex flex-wrap gap-1 justify-center m-1">
            {
                data.map((elemento) => (

                    <Card key={elemento._id} nameProduct={elemento.nameProduct} description={elemento.description} price={elemento.price} />

                ))

            }
        </div>
    </>);
}

export default productos;