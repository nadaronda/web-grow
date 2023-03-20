
export const FormProduct: React.FC = () => {
    return (<>
        <form className=" w-60 d-flex">
          
                <legend className="d-flex align-i ">Añadir producto:</legend>
                <div className="">
                    <label  className="form-label bg-amber-200 rounded">Categoria: </label>
                    <input type="text" id="Categoria" className="form-control border-2 rounded border-amber-200" placeholder="categoria..." />
                </div>
                <div className="">
                <div className="">
                    <label  className="form-label bg-amber-200 rounded">Nombre del producto: </label>
                    <input  type="text" id="NombreProducto" className="form-control border-2 rounded border-amber-200" placeholder="nombre del producto ..."/>
                </div>
                <div className="">
                    <label  className="form-label bg-amber-200 rounded">Descripción: </label>
                    <input type="text" id="Descripcion" className="form-control border-2 rounded border-amber-200" placeholder="descripción del producto..." />
                </div>
              
                    <label  className="form-label bg-amber-200 rounded">Precio: </label>
                    <input type="text" id="Precio" className="form-control border-2 rounded border-amber-200" placeholder="Precio..." />
                </div>
                <button type="submit" className="border-slate-200 p-2 bg-green-400  hover:border-green-400 hover:bg-slate-200 duration-500  border-2 rounded-lg ">Enviar</button>
            
        </form>
    </>)
}