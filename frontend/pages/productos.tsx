import { Carta } from "../components/Carta"
import { getProducts } from "../lib/Api"
function Productos() {

  return (<>
    <p>en esta page se deberan ver todos los productos disponibles</p>
    <p>si te logueas podras ver los precios</p>
    <p>el admin dispondra de botno baja o borrar </p>
    <Carta descripcion="semillas que estan feminizadas para su uso" alt="soble de semillas" titulo="Semillas" src="/semillas.jpg"></Carta>
    <Carta descripcion="Vapeador pequeño, para guardar en cualquier lugar" alt="vapeador" titulo="Vapeador" src="/vapeador.jpg"></Carta>
  </>)
}

export default Productos