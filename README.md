# Web Grow shop

# Mi proyecto de final de bootcamp de [Core Code School](https://www.corecode.school/)

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

[Pincha aquí para poder acceder](nadaronda.github.io/web_Grow)

## 5. Tabla de contenidos o índice:
```
frontend                               backend                                    
├───📁 components/                     ├───📁 src/ 
│   ├───📁 conocenos/│                 │    ├─📁 lib/
│   │      └───📄 Horario.tsx          │    │  └───📄 db.ts
│   ├───📁 form/                       │    ├───📁 models/
│   │    ├───📄 BotonMas.tsx           │    │   └───📄 product.model.ts
│   │    ├───📄 BotonMenos.tsx         │    ├───📁 routes/
│   │    ├───📄 FormActualizar.tsx     │    │   ├───📄 index.plugin.ts
│   │    └───📄 FormProduct.tsx        │    │   └───📄 productRouter.ts
│   ├───📁 index/                      │    ├───📁 types/
│   │    ├───📄 CartaFondo.tsx         │    │   └───📄 interfaceProduct.ts
│   │    └───📄 Section.tsx            │    ├───📄 app.ts
│   ├───📁 layout/                     │    ├───📄 config.ts
│   │    ├───📄 Footer.tsx             │    ├───📄 seed.ts
│   │    ├───📄 Layout.tsx             │    └───📄 server.ts
│   │    ├───📄 LinkNavbar.tsx         ├───📄 .env
│   │    ├───📄 NavbarAdmin.tsx        ├───📄 .gitignore
│   │    ├───📄 NavbarCliente.tsx      ├───📄 package.json
│   │    └───📄 Registro.tsx           └───📄 yarn.lock
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
    git clone https://github.com/nadaronda/web_Grow

Initiate npm:
    npm init

Or use this instead:
    npm init -y

Install dependencies:
    npm install

Execute the project:
    npm run dev

```

## 7. Ejemplos de código:

Añadir estructura basica de un componente en react

```ts

```



## 8. Entornos de ejecución:

-   El proyecto estará desarrollado en React y Next Js
-   Trabajado en el entorno de Node.js
-   El proyecto se ejecuta en dos servidores uno con Fastify y otro con nextJs
-   Lenguaje de programacion typescript
-   Se utiliza npm como gestor de paquete
-   [Visual Studio Code](https://code.visualstudio.com/Download)

## 9. Listado de paquetes y dependencias:

-   Node package manager: [npm](https://www.npmjs.com/)
-   To run the HTML: [Vite](https://vitejs.dev/)
-   [Tailwind](https://tailwindcss.com/) es un framework para trabajar estilos CSS. [Instalación](https://tailwindcss.com/docs/installation)
-   Lenguajes de programación: [typescript](https://www.npmjs.com/package/typescript)
-   Otros paquetes de Node: Lodash
-   [React icons](https://react-icons.github.io/react-icons/search)

## 10. Agradecimientos:

Agradecimientos principalemente a [Core code school](https://github.com/core-school) por la oportunidad que me estan dando. A mi profesor [Juan Pablo](https://github.com/Systrent), mi compañero [Daniel Cortina ](https://github.com/DanielCG55). Y a mi familia por toda la ayuda recibida y su gran apoyo, sin ellos no lo hubiera logrado.