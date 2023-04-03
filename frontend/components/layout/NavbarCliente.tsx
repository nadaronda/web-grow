import { LinkNavbar } from './LinkNavbar';
import { Registro } from './Registro';

export const NavbarCliente = () => {
    return (
        <>
            <nav className='w-full bg-white flex justify-between items-center p-5'>
                <div className=' rounded-full' title='Inicio'>
                    <a href='/'>
                        <img
                            className='rounded-full hover:drop-shadow-line hover:transition-all transition-all'
                            src='/monasterio.jpg'
                            alt='logo'
                            width='70'
                        />
                    </a>
                </div>
                <div className='flex justify-between w-[400px] mx-8'>
                    <LinkNavbar href='/client/productos' text='Productos' />
                    <LinkNavbar href='/client/semillas' text='Semillas' />
                    <LinkNavbar href='/client/conocenos' text='Conócenos' />
                </div>
                <div className=''>
                    <Registro />
                </div>
            </nav>
        </>
    );
};
