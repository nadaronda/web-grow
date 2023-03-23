import Link from "next/link"
export const Carta: React.FC<{ descripcion: any, alt: any, titulo: any, src: any }> = ({ descripcion, alt, titulo, src }) => {

    return (<>
        <div className="w-[18rem] bg-neutral-50 rounded-lg" >
            <img src={src} alt={alt} className="rounded-lg" />
            <div className="">
                <h5 className="">{titulo}</h5>
                <p className="">{descripcion}</p>
                <div className="text-end pr-2 ">

                    <Link className="hover:text-red-600 decoration-blue-400" href="/productos" >Accede a nuestros productos</Link>
                </div>

            </div>
        </div>


    </>)
}