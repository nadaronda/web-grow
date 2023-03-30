export const SectionIzq: React.FC<{ children: any; variant: any; }> = ({
    children,

}) => {

    return (
        //TODO: Meter emotion y mezclar estilos
        <div className="flex flex-row ">

            <img src="/tienda.jpg" alt="" className=" w-[50%] " />
            <div className="bg-gradient-to-r w-[50%] from-azul to-rosa">{children}</div>

        </div>
    );
};

