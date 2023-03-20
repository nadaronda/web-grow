import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties } from "react";
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
            <nav className=" w-100 bg-cyan-200">
                <div className="">
                    <Link href="/" className="">
                        <ActiveLink path="/"> Home </ActiveLink>
                    </Link>
                    <Link href="/productos" className=" text-gray-500 hover:bg-orange-300 duration-500">
                        <ActiveLink path="/productos"> Productos </ActiveLink>
                    </Link>
                    <Link href="/semillas" className=" text-gray-500 hover:bg-orange-300 duration-500">
                        <ActiveLink path="/semillas"> Semillas </ActiveLink>
                    </Link>
                    <Link href="/conocenos" className=" text-gray-500 hover:bg-orange-300 duration-500">
                        <ActiveLink path="/conocenos"> Conocenos </ActiveLink>
                    </Link>
                </div>
            </nav>

        </>
    )
}
