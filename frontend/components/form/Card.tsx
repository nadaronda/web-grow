import Link from "next/link"
import { useState } from "react";
import { AiOutlinePlus } from 'react-icons/ai';
import { GrFormSubtract } from 'react-icons/gr';

export const Card: React.FC<{ price: number, nameProduct: any, description: string }> = ({ price, description, nameProduct }) => {

    return (<>
        <div className="w-[18rem] bg-neutral-50 rounded-lg" >

            <div className="">
                <h5 className="">{nameProduct}</h5>
                <p>{description}</p>
                <p className="">{price} €</p>
                <span className="flex gap-1">
                    <button className="bg-emerald-300 px-6 py-2 rounded-lg"><AiOutlinePlus title="añadir" className="bg-emerald-300" /></button>
                    <button className="bg-slate-400 px-6 py-2 rounded-lg"><GrFormSubtract title="quitar" className="bg-slate-400" /></button>
                </span>
            </div>
        </div>


    </>)
}