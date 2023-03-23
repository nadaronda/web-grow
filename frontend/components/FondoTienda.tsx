import Image from "next/image"
export const FondoTienda: React.FC<{ children: any }> = ({ children }) => {
    return (<>
        <section>
            <Image className="z-[-1] object-cover" src="/fondo_flor.jpg" fill alt="Imagen de fondo hojas de marihuana" />

            <h1 className="bg-slate-200 bg-opacity-70">hjhhdksahfkhdef</h1>
        </section>
    </>)
}