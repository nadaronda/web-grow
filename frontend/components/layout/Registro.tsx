import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { SlLogin } from 'react-icons/sl';
import { IoLogOutOutline } from 'react-icons/io5';

export const Registro: React.FC = () => {
    const { user } = useUser();
    console.log(user);
    return (
        <>
            {!user && (
                <>
                    <a className='flex gap-2 items-center' href='/api/auth/login'>
                        <SlLogin />
                        Login
                    </a>
                </>
            )}
            {user && (
                <>
                    <a className='flex gap-2 items-center' href='/api/auth/logout'>
                        <IoLogOutOutline />
                        Logout
                    </a>
                </>
            )}
        </>
    );
};
