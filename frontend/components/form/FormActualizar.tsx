import { useForm } from 'react-hook-form';
import { addProduct } from '../../lib/Api';
import { firstLetterToUpper } from '../../lib/firstLetterToUpper';
export const FormProduct: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = handleSubmit(async (data) => {
        console.log(data);
        const { nameProduct, description, price } = data;
        const transformedData = { nameProduct: firstLetterToUpper(nameProduct), description: firstLetterToUpper(description) };

        const product = await addProduct({ ...transformedData, price, active: true });

        console.log('Su producto se ha creado adecuadamente', product);

        reset();
    });
    console.log(errors);
    return (
        <>
            <form className='w-60 d-flex' onSubmit={handleSubmit(onSubmit)}>
                <legend className='d-flex'>Añadir producto:</legend>

                <div className=''>
                    <div className=''>
                        <label htmlFor='nameProduct' className='form-label bg-amber-200 rounded'>
                            Nombre del producto:{' '}
                        </label>
                        <input
                            type='text'
                            id='nameProduct'
                            placeholder='nombre del producto ...'
                            {...register('nameProduct', { required: true })}
                            className='form-control border-2 rounded border-amber-200'
                        />
                    </div>
                    <div className=''>
                        <label htmlFor='description' className='form-label bg-amber-200 rounded'>
                            Descripción:{' '}
                        </label>
                        <input
                            type='text'
                            id='description'
                            placeholder='descripción del producto...'
                            {...register('description', { required: true })}
                            className='form-control border-2 rounded border-amber-200'
                        />
                    </div>

                    <label htmlFor='price' className='form-label bg-amber-200 rounded'>
                        Precio:{' '}
                    </label>
                    <input
                        type='text'
                        id='price'
                        placeholder='precio...'
                        {...register('price', { required: true })}
                        className='form-control border-2 rounded border-amber-200'
                    />
                </div>
                <button
                    onClick={onSubmit}
                    type='submit'
                    className='border-slate-200 p-2 bg-green-400  hover:border-green-400 hover:bg-slate-200 duration-500  border-2 rounded-lg '
                >
                    Añadir
                </button>
            </form>
        </>
    );
};