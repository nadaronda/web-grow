import { useForm } from 'react-hook-form'
import { addProducto } from "../../lib/Api"
export const FormProduct: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm()
      const onSubmit = handleSubmit(async (data) => {
        console.log(data)
        const Producto = await addProducto(data)
        console.log('su producto se ha creado adecuadamente', Producto)
    
        reset()
      })
      console.log(errors)
    return (<>
        <form className=" w-60 d-flex" onSubmit={handleSubmit(onSubmit)} >
          
                <legend className="d-flex align-i ">Añadir producto:</legend>
                <div className="">
                    <label htmlFor="categoria" className="form-label bg-amber-200 rounded">Categoria: </label>
                    <input type="text" id="categoria" placeholder="categoria..."  {...register('categoria', { required: true })} className="form-control border-2 rounded border-amber-200"  />
                </div>
                <div className="">
                <div className="">
                    <label htmlFor="nombreProducto" className="form-label bg-amber-200 rounded">Nombre del producto: </label>
                    <input  type="text" id="nombreProducto" placeholder="nombre del producto ..."  {...register('nombreProducto', { required: true })} className="form-control border-2 rounded border-amber-200" />
                </div>
                <div className="">
                    <label  htmlFor="descripcion" className="form-label bg-amber-200 rounded">Descripción: </label>
                    <input type="text" id="descripcion" placeholder="descripción del producto..." {...register('descripcion', { required: true })} className="form-control border-2 rounded border-amber-200" />
                </div>
              
                    <label   htmlFor="precio" className="form-label bg-amber-200 rounded">Precio: </label>
                    <input type="text" id="precio" placeholder="precio..." {...register('precio', { required: true })} className="form-control border-2 rounded border-amber-200"  />
                </div>
                <button onClick={onSubmit} type="submit" className="border-slate-200 p-2 bg-green-400  hover:border-green-400 hover:bg-slate-200 duration-500  border-2 rounded-lg ">Enviar</button>
            
        </form>
    </>)
}