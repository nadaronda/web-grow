import { Carta } from "../components/Carta"
import { CartaProducto } from "../components/form/Carta.producto"
import { Section } from "../components/Section"

function HomePage() {
  return (<>

    <CartaProducto titulo="cenicero" src="" alt="cenicero" precio={8}></CartaProducto>
    <Section variant="fondo1">
      <Carta descripcion="semillas que estan feminizadas para su uso" alt="soble de semillas" titulo="Semillas" src="/semillas.jpg"></Carta>
      <Carta descripcion="Vapeador pequeño, para guardar en cualquier lugar" alt="vapeador" titulo="Vapeador" src="/vapeador.jpg"></Carta>
    </Section>
    <Section variant="fondo2">
      <h1>buenos días</h1>
    </Section>


  </>)
}

export default HomePage