import { Card } from "../../components/products/Card";
import { getProductsId } from '../../lib/Api';
function fichaProduct(_id) {
    getProductsId(_id);
    return (<>
        <h1>FichaProduct de productos:</h1>
        <Card nameProduct={_id.nameProduct} description={_id.description} priceVentaClient={_id.priceVentaClient} priceCompra={_id.priceCompra
        }></Card>





    </>);
};


export default fichaProduct;








