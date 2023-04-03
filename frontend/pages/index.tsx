import { CartaFondo } from '../components/index/CartaFondo';
import { Section } from '../components/index/Section';

function HomePage() {
    return (
        <>
            <div className='min-h-[91vh]'>
                <Section side='right' imgSrc='/fondo_flor.jpg'>
                    <CartaFondo
                        titulo='Grow Shop El Monasterio'
                        text1='El Monasterio es una pequeña tienda situada en la localidad de Torrejon de Ardoz, Madrid.'
                        texto2='Nos dedicamos a la venta de productos que contienen OCT'
                        href='/client/productos'
                        nameEnlace='Accede a nuestros productos'
                    />
                </Section>
                <Section side='left' imgSrc='/tienda.jpg'>
                    <CartaFondo
                        titulo='Grow Shop El Monasterio'
                        text1='El Monasterio es una pequeña tienda situada en la localidad de Torrejon de Ardoz, Madrid.'
                        texto2='Nos dedicamos a la venta de productos que contienen OCT'
                        href='/client/conocenos'
                        nameEnlace='Haznos una visita'
                    />
                </Section>
            </div>
        </>
    );
}

export default HomePage;
