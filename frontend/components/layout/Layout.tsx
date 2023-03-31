import { useUser } from '@auth0/nextjs-auth0/client';
import { NavbarCliente } from './NavbarCliente';
import { NavbarAdmin } from './NavbarAdmin';

export const Layout: React.FC<{ children: any }> = ({ children }) => {
    const { user } = useUser();
    return (
        <>
            {!user && <NavbarCliente />}
            {user && <NavbarAdmin />}
            {children}
        </>
    );
};
