import { useForm } from 'react-hook-form';
import { addProduct, updateProduct } from '../../lib/api';
import { firstLetterToUpper } from '../../lib/firstLetterToUpper';
import { interfaceProduct } from "../../types/interfaceProduct";
import { useEffect } from 'react';
import { ButtonAdd } from './buttons/ButtonAdd';
import { ButtonUpdate } from './buttons/ButtonUpdate';


export const FormProduct: React.FC<{ product?: interfaceProduct; }> = ({ product }) => {
    const {
        register,
        handleSubmit,
        reset,
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

        const product = await addProduct({ ...transformedData });

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

        });

    return (
        <>

            <div className='min-h-[740px] flex justify-center items-center '>
                <form method='post' className='w-[16rem] h-90 d-flex bg-slate-400 rounded  py-5 px-5' onSubmit={product ? onUpdate(product._id) : onSubmit}>

                    <div className='flex flex-col gap-5'>

                        <div>
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
                        <div>
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
                                Precio de venta:
                            </label>
                            <input

                                name="priceVentaClient"
                                type='number'
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
                                type='number'
                                id='priceCompra'
                                placeholder='precio de Compra...'
                                {...register('priceCompra', { required: true })}
                                className='form-control border-2 rounded text-center'
                            />
                        </div>
                        {!product && (
                            <ButtonAdd />
                        )}
                        {product &&
                            (<ButtonUpdate />)
                        }
                    </div>
                </form>
            </div>
        </>
    );
};
