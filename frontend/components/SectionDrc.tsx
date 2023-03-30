import React from "react";
export const SectionDrc: React.FC<{ children: any; }> = ({
    children,

}) => {


    return (
        //TODO: Meter emotion y mezclar estilos
        <section>
            <div className="flex flex-row w-100% h-100% bg-gradient-to-r from-azul to-rosa justify-around items-center ">

                <div className=" justify-center w-[50%] h-[50%]">
                    <div className=" py-3 bg-gradient-to-r from-azul to-rosa">{children}</div>
                </div>
                <img src="/fondo_flor.jpg" alt="" className="w-[50%] h-[]" />

            </div>
        </section >

    );
};


;
