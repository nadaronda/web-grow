import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
export const Footer: React.FC = () => {
    return (<>
        <footer className='flex flex-col justify-center  bg-lime-200 bg-opacity-50 fixed bottom-0 w-full'>
            <div className="flex justify-center gap-5">
                <Link href="https://www.instagram.com/monasteriogrowshop/" title='pincha para acceder' className=" text-2xl" target="_blank">
                    <AiFillInstagram />
                </Link>
                <Link href="https://www.facebook.com/monasteriogrowshop/" title='pincha para acceder' className="  text-2xl" target="_blank">
                    <BsFacebook />
                </Link>
                <Link title='pincha para dejarnos un comentario' href="">
                    Dejanos tu opinion
                </Link>
            </div>
            <div className='flex flex-row justify-end gap-5'>
                <FaReact title='React' className='text-2xl' />
                <TbBrandNextjs title='Next JS' className='text-2xl' />
            </div>
        </footer>
    </>)
}