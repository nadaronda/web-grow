import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';
const ActiveLink = ({ children, path }) => {
    const router = useRouter();

    let style: CSSProperties = {};
    if (router.asPath == path) {
    style = {
        color: "purple"
    }
}
    return <span style={style}>{children}</span>
}
export const Navbar = () => {
    return (
        <>
            <nav className="w-100 bg-cyan-200">
                <div className="">
                    <Link href="/" className="">
                        <ActiveLink path="/"> Home </ActiveLink>
                    </Link>
                    <Link href="/productos" className="">
                        <ActiveLink path="/productos"> Productos </ActiveLink>
                    </Link>
                    <Link href="/semillas" className="">
                        <ActiveLink path="/semillas"> Semillas </ActiveLink>
                    </Link>
                    <Link href="/conocenos" className="">
                        <ActiveLink path="/conocenos"> Conocenos </ActiveLink>
                    </Link>
                </div>
            </nav>

        </>
    )
}
