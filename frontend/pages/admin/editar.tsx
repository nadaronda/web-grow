
const editar = ({ dataProductos }) => {

    console.log(dataProductos); //para poder ver los datos en la consola
    dataProductos[0];
    const productos = dataProductos.map((elemento) => {
        console.log(elemento.active);
        return <p> {elemento.nameProduct + elemento.description}</p>;
    });
    return (
        <>
            {productos}
        </>
    );

};
export default editar;
export async function getServerSideProps() {

    const url = "http://localhost:5000/products";
    const respuesta = await fetch(url);//fetch para obtener recursos de forma asincrona
    const dataProductos = await respuesta.json();
    console.log(dataProductos); //los datos se ven en la terminal

    return { props: { dataProductos } };//data que quiero recibir

}


