import { Card } from "../../components/form/Card"
function productos() {
    return (<>
        <title>Baja de productos:</title>
        <p>En esta página se observan los  </p>
        <p>IDEAS:</p>
        <p>se añade la carta del producto con todos sus parametros, pero con 2 botones</p>
        <button>Borrar</button>
        <button>Añadir a altas</button>
        <Card nameProduct="" description="" price={8}></Card>

    </>)
}

export default productos