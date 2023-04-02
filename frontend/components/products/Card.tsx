import { interfaceProduct } from '../../types/interfaceProduct';
import { deleteProduct, updateProduct, getProductWithId } from '../../lib/api';
import { useProductList } from '../../hooks/useProductList';
import Link from 'next/link';

export const Card: React.FC<interfaceProduct> = ({ priceVentaClient, priceCompra, description, nameProduct, _id, active }) => {
    const { mutate } = useProductList();

    return (
        <>
            <div className='w-[18rem] h-[18rem] px-3 py-3 bg-neutral-50 rounded-lg border-2 border-solid  border-yellow-300 flex flex-col justify-between'>
                <div className=' '>
                    <h5 className='text-center text-2xl '>{nameProduct}</h5>
                    <br />
                    <p>Descripción: {description}</p>
                    <p>Precio de venta: {priceVentaClient} €</p>
                    <p>Precio de compra: {priceCompra} €</p>

                </div>
                <div className='flex  gap-[2px] justify-end'>

                    <Link href={`/admin/${_id}`}

                        className='bg-slate-500  rounded-l-lg text-white px-3 hover:bg-slate-400 hover:text-black'>editar</Link>
                    <button
                        onClick={async () => {
                            await deleteProduct(_id);
                            mutate();
                        }}
                        className='bg-slate-500 rounded-r-lg  text-white px-3 hover:bg-slate-400 hover:text-black'
                    >
                        BORRAR
                    </button>
                </div>
            </div >
        </>
    );
};
