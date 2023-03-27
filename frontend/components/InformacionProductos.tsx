

export const InformacionProductos: React.FC = () => {

    return (<>
        <div className="card bg-white w-[50rem] rounded-lg " id="productos">
            <div className="text-center">
                Productos del Monasterio
            </div>
            <div className="card-body text-2xl">
                <div className="text-lg">
                    <p className="card-text">Nuestra pequeña tienda tiene diversidad de productos, semillas, cachimbas, chucherias, etc...</p>
                    <p>También te podemos traer productos que usted quiera. </p>
                    <p>Preparamos cesta regalo bajo pedido para ocasiones especiales.</p>
                </div>
                <div className="text-right pr-2 ">
                    <a href="/productos" className=" text-xl text-gray-500 transition-all hover:text-2xl">visite nuestros productos</a>
                </div>

            </div>
        </div>


    </>)
}


