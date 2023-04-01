import { Card } from '../../components/products/Card';

import { useProductList } from '../../hooks/useProductList';
function productos() {
    const { data } = useProductList();

    return (
        <>
            <title>Productos dado de alta:</title>
            <div className=' flex justify-center items-center bg-colores bg-cover py-10 bg-no-repeat min-h-[91vh]'>
                <div className='w-full flex flex-wrap gap-1 items-center justify-center my-10'>
                    {data &&
                        data.map((elemento) => (
                            <Card
                                key={elemento._id}
                                nameProduct={elemento.nameProduct}
                                description={elemento.description}
                                price={elemento.price}
                                _id={elemento._id}
                            />
                        ))}
                </div>
            </div>
        </>
    );
}

export default productos;
