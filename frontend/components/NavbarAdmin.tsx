import { LinkNavbar } from './LinkNavbar';
export const NavbarAdmin: React.FC<{ children: any }> = ({ children }) => {
    return (
        <>
            <nav className=" w-100 bg-azul flex justify-between ">
                <div className="px-5 py-0 m-0 rounded-full " title='Inicio'>
                    <a href="/">
                        <img className='rounded-full' src="/monasterio.jpg" alt="Bootstrap" width="100" />
                    </a>
                </div>
                <div className='flex flex-row gap-5 place-items-center '>
                    <LinkNavbar href='/admin/productos' path="/admin/productos" text="PRODUCTOS" />
                    <LinkNavbar href="/admin/alta" path="/admin/alta" text='ALTA' />
                    <LinkNavbar href='/admin/baja' path='/admin/baja' text='BAJA' />
                </div>

                {children}
            </nav>
        </>
    )
}