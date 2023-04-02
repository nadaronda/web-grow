import { Card } from "../../components/products/Card";
import { getProductWithId } from '../../lib/api';
function fichaProduct(_id) {
    getProductWithId(_id);
    return (<>
        <h1>FichaProduct de productos:</h1>
        <Card nameProduct={_id.nameProduct} description={_id.description} priceVentaClient={_id.priceVentaClient} priceCompra={_id.priceCompra
        } />
    </>);
};


export default fichaProduct;








