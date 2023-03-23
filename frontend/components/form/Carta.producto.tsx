import Link from "next/link"
import { useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';

export const CartaProducto: React.FC<{ precio: number, alt: any, titulo: any, src: any, descripcion?: string }> = ({ precio, alt, titulo, src, descripcion }) => {

    return (<>
        <div className="w-[18rem] bg-neutral-50 rounded-lg" >
            <img src={src} alt={alt} className="rounded-lg" />
            <div className="">
                <h5 className="">{titulo}</h5>
                <p>{descripcion}</p>
                <p className="">{precio} €</p>
                <span className="flex gap-1">
                    <button className="bg-emerald-300 px-6 py-2 rounded-lg"><AiOutlinePlus title="añadir" className="bg-emerald-300" /></button>
                    <button className="bg-slate-400 px-6 py-2 rounded-lg"><GrFormSubtract title="quitar" className="bg-slate-400" /></button>
                </span>
            </div>
        </div>


    </>)
}