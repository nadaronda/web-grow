import { LinkNavbar } from './LinkNavbar';
export const NavbarCliente: React.FC<{ children: any; }> = ({ children }) => {
    return (
        <>
            <nav className=" w-full bg-azul flex justify-between ">
                <div className="px-5 py-0 m-0 rounded-full " title='Inicio'>
                    <a href="/">
                        <img className='rounded-full' src="/monasterio.jpg" alt="" width="100" />
                    </a>
                </div>
                <div className='flex flex-row gap-5 place-items-center '>
                    <LinkNavbar href='/#productos' path='/productos' text='Productos' />
                    <LinkNavbar href='/semillas' path='/semillas' text='Semillas' />
                    <LinkNavbar href='/conocenos' path='/conocenos' text='Conócenos' />
                </div>
                {children}

            </nav>
        </>
    );
};