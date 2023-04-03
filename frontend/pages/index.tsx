import { CartaFondo } from '../components/index/CartaFondo';
import { Section } from '../components/index/Section';

function HomePage() {
    return (
        <>
            <div className='min-h-[91vh]'>
                <Section side='right' imgSrc='/fondo_flor.jpg'>
                    <CartaFondo
                        titulo='Grow Shop El Monasterio'
                        text1='El Monasterio, se dedica a la venta de productos que contienen CBD.'
                        texto2='En España el CBD es legal, ya que se trata del cannabidiol medicinal del cannabis que no contiene efectos psico-activos a diferencia del THC, que es ilegal por sus efectos psicotrópicos (es la parte de la marihuana que coloca).'
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
