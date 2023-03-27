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
export const LinkNavbar: React.FC<{ href: string, path: string, text: string }> = ({ href, path, text }) => {
    return (

        <div>
            <Link href={href} className=" text-gray-500 transition-all hover:text-2xl">
                <ActiveLink path={path}>{text}</ActiveLink>
            </Link>
        </div>

    )
}