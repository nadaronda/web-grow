import React from 'react';
import { useUser } from "@auth0/nextjs-auth0/client";
import { SlLogin } from 'react-icons/sl';
import { IoLogOutOutline } from 'react-icons/io5';
const Registro: React.FC = () => {
    const { user } = useUser();
    console.log(user);
    return (
        <>
            <div className="container">
                <main>
                    <div className='p-[20px] text-center' >
                        {!user && (
                            <>
                                <a className='m-[5px]'
                                    href="/api/auth/login"
                                >
                                    <SlLogin />
                                    Login
                                </a>
                            </>
                        )}
                        {user && (
                            <>

                                <a className='m-[5px]'
                                    href="/api/auth/logout"
                                >
                                    <IoLogOutOutline />
                                    Logout
                                </a>
                            </>
                        )}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Registro;