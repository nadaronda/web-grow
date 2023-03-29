
export const Card: React.FC<{ price: number, nameProduct: string, description: string; }> = ({ price, description, nameProduct }) => {

    return (<>
        <div className="w-[18rem] h-[18rem] px-3 py-3 bg-neutral-50 rounded-lg border-2 border-solid border-yellow-300" >
            <div className="">
                <h5 className="text-center ">{nameProduct}</h5>
                <br />
                <p>Descripción: {description}</p>
                <p className="">Precio: {price} €</p>
            </div>
            <div className="flex gap-[2px]">
                <button className="bg-slate-500 rounded-l-lg text-white px-3 hover:bg-slate-400 hover:text-black"> BAJA</button>
                <button className="bg-slate-500 rounded-r-lg  text-white px-3 hover:bg-slate-400 hover:text-black">BORRAR</button>
            </div>

        </div>


    </>);
};