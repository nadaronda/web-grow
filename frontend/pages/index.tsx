import { CartaFondo } from "../components/CartaFondo";
import { Section } from "../components/Section";
import { SectionIzq } from "../components/SectionIzq";


function HomePage() {
  return (<>

    <Section variant="fondo1" >
      <CartaFondo titulo="Grow Shop El Monasterio"
        text1="El Monasterio es una pequeña tienda situada en la localidad de Torrejon de Ardoz, Madrid."
        texto2="Nos dedicamos a la venta de productos que contienen OCT" href="/productos"
        nameEnlace="Accede a nuestros productos"></CartaFondo>
    </Section>

    <SectionIzq variant="fondo3" >
      <CartaFondo titulo="Grow Shop El Monasterio"
        text1="El Monasterio es una pequeña tienda situada en la localidad de Torrejon de Ardoz, Madrid."
        texto2="Nos dedicamos a la venta de productos que contienen OCT" href="/conocenos"
        nameEnlace="Haznos una visita"></CartaFondo>
    </SectionIzq>





  </>);
}

export default HomePage;