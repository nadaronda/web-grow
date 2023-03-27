import React from 'react'
import { useUser } from "@auth0/nextjs-auth0/client"


const Registro: React.FC = () => {
    const { user } = useUser()
    console.log(user)
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
                                    Iniciar sesión
                                </a>
                            </>
                        )}
                        {user && (
                            <>

                                <a className='m-[5px]'
                                    href="/api/auth/logout"
                                >
                                    {' Cerrar sesión ' + user.nickname}
                                </a>
                            </>
                        )}
                    </div>
                </main>
            </div>
        </>
    )
}

export default Registro