# Web Grow shop

# Mi proyecto final del bootcamp de [Core Code School](https://www.corecode.school/)

# Indice:

-   [Web Grow shop](#Web-Grow-shop)
-   [Mi proyecto de Core Code School](#mi-proyecto-de-core-code-school)
-   [Indice:](#indice)
    -   [1. Título del Proyecto:](#1-título-del-juego)
    -   [2. Imágenes y vídeos:](#2-imágenes-y-vídeos)
    -   [3. Motivación del proyecto:](#3-motivación-del-proyecto)
    -   [4. Acceso directo a la web:](#4-acceso-directo-al-juego)
    -   [5. Tabla de contenidos o índice:](#5-tabla-de-contenidos-o-índice)
    -   [6. Manual de instalación y deployment:](#6-manual-de-instalación-y-deployment)
    -   [7. Ejemplos de código:](#7-ejemplos-de-código)
    -   [8. Entornos de ejecución:](#8-entornos-de-ejecución)
    -   [9. Listado de paquetes y dependencias:](#9-listado-de-paquetes-y-dependencias)
    -   [10. Agradecimientos:](#10-agradecimientos)

## 1. Título del Proyecto:

Web Grow

## 2. Imágenes y vídeos:

![El MoNaStErIo](/img/monasterio.jpg)

## 3. Motivación del proyecto:

Web Grow se trata de una pagina web, motivación de unos de mis hermanos que tiene una pequeña tienda. Y tanto a el como a mi nos hace bastante ilusión que pueda dedicarle tiempo a intentar hacerla, el objetivo de la pagina en general es presentar mercancia que hay en la tienda, una parte de peticiones de los clientes de ciertos productos y compra de los productos.

## 4. Acceso directo a la pagina web:

En proceso ...

## 5. Tabla de contenidos o índice:
```
backend
├───📁 src/
│    ├─📁 lib/
│    │  └───📄 db.ts
│    ├───📁 models/
│    │   └───📄 product.model.ts
│    ├───📁 routes/
│    │   ├───📄 index.plugin.ts
│    │   └───📄 productRouter.ts
│    ├───📁 types/
│    │   └───📄 interfaceProduct.ts
│    ├───📄 app.ts
│    ├───📄 config.ts
│    ├───📄 seed.ts
│    └───📄 server.ts
├───📄 .env
├───📄 .gitignore
├───📄 package.json
└───📄 yarn.lock


frontend
├───📁 components/
│   ├───📁 conocenos/│
│   │      └───📄 Horario.tsx
│   ├───📁 form/
│   │    ├───📄 BotonMas.tsx
│   │    ├───📄 BotonMenos.tsx
│   │    ├───📄 FormActualizar.tsx
│   │    └───📄 FormProduct.tsx
│   ├───📁 index/
│   │    ├───📄 CartaFondo.tsx
│   │    └───📄 Section.tsx
│   ├───📁 layout/
│   │    ├───📄 Footer.tsx
│   │    ├───📄 Layout.tsx
│   │    ├───📄 LinkNavbar.tsx
│   │    ├───📄 NavbarAdmin.tsx
│   │    ├───📄 NavbarCliente.tsx
│   │    └───📄 Registro.tsx
│   └───📁 products/
│        ├───📄 Card.tsx
│        └───📄 CardCliente.tsx
├──📁 hooks/
│        └───📄 useProductList.ts
├──📁 lib/
│      ├───📄 Api.ts
│      ├───📄 backendFetcher.ts
│      └───📄 fistLetterToUpper.ts
├──📁 pages/
│  ├───📁 admin/
│  ├───📄 alta.tsx
│  │   ├───📄 baja.tsx
│  │   └───📄 productos.tsx
│  ├───📁 api/
│  │   └───📁 auth/
│  ├───📄 conocenos.tsx
│  ├───📄 index.tsx
│  ├───📄 productos.tsx
│  ├───📄 semillas.tsx
│  └───📄 _app.tsx
├──📁 public/
│  ├───📁 css/
│  │   └───📄 globals.css
│  ├───📄 cafeCanabis.png
│  ├───📄 cannabis.png
│  ├───📄 cbdAromas.png
│  ├───📄 fondo_flor.jpg
│  ├───📄 liquidoCBD.png
│  ├───📄 monasterio.jpg
│  ├───📄 monasterioFondoNegro.jpg
│  ├───📄 multi.png
│  ├───📄 page.png
│  ├───📄 productosCultivo.jpg
│  ├───📄 raw.png
│  ├───📄 semillas.jpg
│  ├───📄 tienda.jpg
│  ├───📄 vapeador.jpg
│  └───📄 vapeador1.jpg
├──📁 types/
│   └───📄 interfaceProduct.ts
├──📄 .babelrc
├──📄 .env.local
├──📄 .gitignore
├──📄 next-env.d.ts
├──📄 package.json
├──📄 postcss.config.js
├──📄 tailwind.config.js
├──📄 tsconfig.json
└──📄 yarn.lock

```
## 6. Manual de instalación y deployment:

```
Clone the repository:
    git clone https://github.com/nadaronda/web-Grow

Initiate yarn:
    yarn init

Or use this instead:
    yarn init -y

Install dependencies:
    yarn install

Execute the project:
    yarn run dev

```

## 7. Ejemplos de código:
Al exportar una función llamada getServerSideProps (Server-Side Rendering) desde una página, Next.js pre-renderizará esta página en cada solicitud utilizando los datos devueltos por getServerSideProps. Esto es útil para obtener datos que cambian con frecuencia y hacer que la página se actualice para mostrar los datos actuales.
Esta es la estrucxtura básica
```ts
export async function getServerSideProps(contexto){
    return {
        props:{

        }
    }
}

```
Ejemplo
En primer lugar defines la función getServerSideProps(), la dataProduct, es lo que devuelve la props, pero la devuelve en la terminal.
```ts
export async function getServerSideProps() {

    const url = "http://localhost:5000/products";
    const respuesta = await fetch(url);//fetch para obtener recursos de forma asincrona
    const dataProducts = await respuesta.json();
    console.log(dataProducts); //los datos se ven en la terminal

    return { props: { dataProducts } };//data que quiero recibir

}


```
Para poder utilizarla, debes pasarla como parametro de la función de la pagina, en este caso la pagina se llama editar, le he pasado la props del getServerSideProps, como parametro. Una vez hecho esto ya podemos utilzar la dataProduct en la pagina editar.
```ts
const editar = ({ dataProducts }) => {
    console.log(dataProductos); //para poder ver los datos en la consola

    const productos = dataProducts.map((elemento) => { return <p>{elemento.nameProduct}</p>;});
    return (
        <>
            {productos}
        </>
    );

};
export default editar;
```
En el caso de que necesites leer la información te dejo el enlace. [Next.JS getServerSideProps](https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props)

## 8. Entornos de ejecución:

-   El proyecto estará desarrollado en [React](https://es.reactjs.org/) y [Next Js](https://nextjs.org/)
-   Trabajado en el entorno de [Node.js](https://nodejs.org/en)
-   Lenguaje de programacion typescript
-   Se utiliza [yarn](https://yarnpkg.com/) como gestor de paquete
-  Se utiliza [Visual Studio Code](https://code.visualstudio.com/Download) como editor de código.

## 9. Listado de paquetes y dependencias:

-   Node package manager: [npm](https://www.npmjs.com/)
-   To run the HTML: [Vite](https://vitejs.dev/)
-   [Tailwind](https://tailwindcss.com/) es un framework para trabajar estilos CSS. [Instalación](https://tailwindcss.com/docs/installation)
-   Lenguajes de programación: [typescript](https://www.npmjs.com/package/typescript)
-   Otros paquetes de Node: Lodash
-   [React icons](https://react-icons.github.io/react-icons/search)

## 10. Agradecimientos:

Agradecimientos principalemente a [Core code school](https://github.com/core-school) por la oportunidad que me estan dando. A mi profesor [Juan Pablo](https://github.com/Systrent), mi compañero [Daniel Cortina ](https://github.com/DanielCG55). Y a mi familia por toda la ayuda recibida y su gran apoyo, sin ellos no lo hubiera logrado.

<a href="https://www.animatedimages.org/cat-thank-you-466.htm"><img src="https://www.animatedimages.org/data/media/466/animated-thank-you-image-0091.gif" border="0" alt="animated-thank-you-image-0091" /></a>
