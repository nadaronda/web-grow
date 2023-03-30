export const SectionIzq: React.FC<{ children: any; }> = ({
    children,

}) => {

    return (
        //TODO: Meter emotion y mezclar estilos
        <div className="flex flex-row items-center bg-gradient-to-r from-azul to-rosa">

            <img src="/tienda.jpg" alt="" className=" w-[50%] " />
            <div className="justify-center w-[50%] h-[50%]">
                <div className="bg-gradient-to-r from-azul to-rosa">{children}</div>
            </div>


        </div>
    );
};

