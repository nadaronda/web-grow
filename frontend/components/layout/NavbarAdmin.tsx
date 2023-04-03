import React from 'react';
import { LinkNavbar } from './LinkNavbar';
import { Registro } from './Registro';
import { ImgHome } from './ImgHome';

export const NavbarAdmin = () => {
    return (
        <>
            <nav className=' w-full bg-white flex justify-between items-center p-5'>
                <ImgHome />
                <div className='flex justify-between w-[400px] mx-8'>
                    <LinkNavbar href='/admin/productos' text='Productos' />
                    <LinkNavbar href='/admin/alta' text='Alta' />
                    <LinkNavbar href='/admin/baja' text='Baja' />
                </div>
                <div>
                    <Registro />
                </div>
            </nav>
        </>
    );
};
