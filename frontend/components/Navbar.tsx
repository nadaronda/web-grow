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
            <nav className=" w-100 bg-cyan-200 flex justify-between ">

                <div className="px-5 py-0 m-0 rounded-full " title='Inicio'>


                    <a href="/">
                        <img className='rounded-full' src="/monasterio.jpg" alt="Bootstrap" width="100" />
                    </a>

                </div>
                <div className='flex flex-row gap-5 place-items-center '>
                    <div>
                        <Link href="/productos" className=" text-gray-500  duration-200 hover:text-2xl">
                            <ActiveLink path="/productos"> Productos </ActiveLink>
                        </Link>
                    </div>
                    <div> <Link href="/semillas" className=" text-gray-500 duration-200 hover:text-2xl">
                        <ActiveLink path="/semillas"> Semillas </ActiveLink>
                    </Link></div>
                    <div> <Link href="/conocenos" className=" text-gray-500 duration-200 hover:text-2xl">
                        <ActiveLink path="/conocenos"> Conocenos </ActiveLink>
                    </Link></div>



                </div>

                <div className="px-5 flex  place-items-center">
                    <Link href="/registrate" className=" text-gray-500 duration-200 hover:text-2xl">
                        <ActiveLink path="/registrate"> Registrate </ActiveLink>
                    </Link>
                </div>


            </nav>

        </>
    )
}
