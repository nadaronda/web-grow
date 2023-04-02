import { useForm } from 'react-hook-form';
import { addProduct, updateProduct } from '../../lib/api';
import { firstLetterToUpper } from '../../lib/firstLetterToUpper';
import { interfaceProduct } from "../../types/interfaceProduct";
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export const FormProduct: React.FC<{ product?: interfaceProduct; }> = ({ product }) => {
    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        if (product) {
            setValue('nameProduct', product.nameProduct);
            setValue('description', product.description);
            setValue('priceVentaClient', product.priceVentaClient);
            setValue('priceCompra', product.priceCompra);
        }
    }, [product, setValue]);

    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        const { nameProduct, description, priceVentaClient, priceCompra } = data;
        const transformedData = { nameProduct: firstLetterToUpper(nameProduct), description: firstLetterToUpper(description), priceVentaClient, priceCompra, active: true };

        const product = await addProduct({ ...transformedData, priceVentaClient, priceCompra, active: true });

        console.log('Su producto se ha creado adecuadamente', product);
        reset();
    });

    const onUpdate = (id: string) =>
        handleSubmit(async (data) => {
            const transformedData = {
                nameProduct: firstLetterToUpper(data.nameProduct),
                description: firstLetterToUpper(data.description),
            };

            const product = await updateProduct(id, {
                ...transformedData,
                priceVentaClient: data.priceVentaClient,
                priceCompra: data.priceCompra,
                active: true,
            });

            console.log('Su producto se ha actualizado adecuadamente', product);

            /*const router = useRouter();
            router.push('/admin/productos');*/
        });

    return (
        <><div className='flex  pl-10 pt-10 font-bold text-2xl'>Añadir producto:</div>

            <div className='min-h-[790px] flex justify-center items-center '>

                <form method='post' className='w-[16rem] h-80 d-flex bg-slate-400 rounded  py-5 px-5' onSubmit={product ? onUpdate(product._id) : onSubmit}>


                    <div className='flex flex-col gap-5'>

                        <div className=''>
                            <label htmlFor='nameProduct' className='form-label bg-azul px-3 py-1 rounded'>
                                Nombre del producto:
                            </label>
                            <input

                                name="nameProduct"
                                type='text'
                                id='nameProduct'
                                placeholder='nombre del producto ...'
                                {...register('nameProduct', { required: true })}
                                className='form-control border-2 rounded text-center '
                            />
                        </div>
                        <div className=''>
                            <label htmlFor='description' className='form-label bg-azul px-3 py-1 rounded '>
                                Descripción:
                            </label>
                            <input

                                name="description"
                                type='text'
                                id='description'
                                placeholder='descripción del producto...'
                                {...register('description', { required: true })}
                                className='form-control border-2 rounded  text-center '
                            />
                        </div>
                        <div>
                            <label htmlFor='priceVentaClient' className='form-label bg-azul px-3 py-1 rounded text-center'>
                                Precio de venta al cleinte:
                            </label>
                            <input

                                name="priceVentaClient"
                                type='text'
                                id='priceVentaClient'
                                placeholder='precio del cliente...'
                                {...register('priceVentaClient', { required: true })}
                                className='form-control border-2 rounded text-center'
                            />
                        </div>
                        <div>
                            <label htmlFor='priceCompra' className='form-label bg-azul px-3 py-1 rounded text-center'>
                                Precio de Compra:
                            </label>
                            <input

                                name="priceCompra"
                                type='text'
                                id='priceCompra'
                                placeholder='precio de Compra...'
                                {...register('priceCompra', { required: true })}
                                className='form-control border-2 rounded text-center'
                            />
                        </div>
                        {!product && (
                            <div className=' flex justify-end '>
                                <button
                                    type='submit'
                                    className=' text-xl font-medium border-slate-200 px-5 py-3 bg-azul  hover:border-azul hover:bg-rosa hover:text-[22px] duration-500  border-2 rounded-lg '
                                >
                                    Añadir
                                </button>
                            </div>
                        )}
                        {product &&
                            (<div className=' flex justify-end '>
                                <button
                                    type='submit'
                                    className=' text-xl font-medium border-slate-200 px-5 py-3 bg-azul  hover:border-azul hover:bg-rosa hover:text-[22px] duration-500  border-2 rounded-lg '
                                >
                                    Actualizar
                                </button>
                            </div>)
                        }
                    </div>
                </form>
            </div>
        </>
    );
};
