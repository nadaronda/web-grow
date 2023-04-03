import { ImgHome } from './ImgHome';
import { LinkNavbar } from './LinkNavbar';
import { Registro } from './Registro';

export const NavbarCliente = () => {
    return (
        <>
            <nav className='w-full bg-white flex justify-between items-center p-5'>
                <ImgHome />
                <div className='flex justify-between w-[400px] mx-8'>
                    <LinkNavbar href='/client/productos' text='Productos' />
                    <LinkNavbar href='/client/semillas' text='Semillas' />
                    <LinkNavbar href='/client/conocenos' text='Conócenos' />
                </div>
                <div>
                    <Registro />
                </div>
            </nav>
        </>
    );
};
