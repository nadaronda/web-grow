import { CardCliente } from '../components/products/CardCliente';
import { useProductList } from '../hooks/useProductList';

function productosCliente() {
    const { data } = useProductList();

    return (
        <>
            <div className='flex justify-center items-center bg-colores bg-cover py-10 bg-no-repeat min-h-[91vh]'>
                <div className='flex flex-wrap gap-1 items-center justify-center'>
                    {data &&
                        data.map((elemento) => (
                            <CardCliente
                                key={elemento._id}
                                nameProduct={elemento.nameProduct}
                                description={elemento.description}
                                priceVentaClient={elemento.priceVentaClient}
                                priceCompra={elemento.priceCompra}
                                _id={elemento._id}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}

export default productosCliente;
