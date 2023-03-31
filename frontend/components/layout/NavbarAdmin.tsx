import { LinkNavbar } from './LinkNavbar';
import { Registro } from './Registro';

export const NavbarAdmin = () => {
    return (
        <>
            <nav className=' w-full bg-white flex justify-between '>
                <div className='px-5 py-0 m-0 rounded-full ' title='Inicio'>
                    <a href='/'>
                        <img className='rounded-full' src='/monasterio.jpg' alt='Bootstrap' width='100' />
                    </a>
                </div>
                <div className='flex flex-row gap-5 place-items-center '>
                    <LinkNavbar href='/admin/productos' text='Productos' />
                    <LinkNavbar href='/admin/alta' text='ALTA' />
                    <LinkNavbar href='/admin/baja' text='BAJA' />
                </div>
                <div className='px-5 flex  place-items-center'>
                    <Registro />
                </div>
            </nav>
        </>
    );
};
