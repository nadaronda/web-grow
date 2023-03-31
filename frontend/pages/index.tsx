import { CartaFondo } from "../components/CartaFondo";
import { SectionDrc } from "../components/SectionDrc";
import { SectionIzq } from "../components/SectionIzq";


function HomePage() {
  return (<>

    <SectionDrc>
      <CartaFondo titulo="Grow Shop El Monasterio"
        text1="El Monasterio es una pequeña tienda situada en la localidad de Torrejon de Ardoz, Madrid."
        texto2="Nos dedicamos a la venta de productos que contienen OCT" href="/productosCliente"
        nameEnlace="Accede a nuestros productos"></CartaFondo>
    </SectionDrc>

    <SectionIzq>
      <CartaFondo titulo="Grow Shop El Monasterio"
        text1="El Monasterio es una pequeña tienda situada en la localidad de Torrejon de Ardoz, Madrid."
        texto2="Nos dedicamos a la venta de productos que contienen OCT" href="/conocenos"
        nameEnlace="Haznos una visita"></CartaFondo>
    </SectionIzq>





  </>);
}

export default HomePage;