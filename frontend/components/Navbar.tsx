import Registro from './Registro';
import { useUser } from "@auth0/nextjs-auth0/client"
import { NavbarCliente } from './NavbarCliente';
import { NavbarAdmin } from './NavbarAdmin';
export const Navbar: React.FC<{ children: any }> = ({ children }) => {
    const { user } = useUser()
    return (
        <>
            {!user && (<>
                <NavbarCliente>
                    <div className="px-5 flex  place-items-center">
                        <Registro />
                    </div>
                </NavbarCliente>
            </>)}
            {user && (
                <NavbarAdmin>
                    <div className="px-5 flex  place-items-center">
                        <Registro />
                    </div>
                </NavbarAdmin>
            )}
            {children}

        </>
    )
}
