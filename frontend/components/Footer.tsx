import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { MdQuestionAnswer } from 'react-icons/md';
export const Footer: React.FC = () => {
    return (<>
        <footer className='flex justify-around  bg-gradient-to-r from-azul to-rosa  bg-opacity-50 fixed bottom-0  w-full'>

            <div className="flex  flex-col  py-2 gap-3">
                <Link href="https://www.instagram.com/monasteriogrowshop/" title='pincha para acceder' className=" text-2xl" target="_blank">
                    <AiFillInstagram />
                </Link>
                <Link href="https://www.facebook.com/monasteriogrowshop/" title='pincha para acceder' className="  text-2xl" target="_blank">
                    <BsFacebook />
                </Link>
                <Link title='pincha para dejarnos un comentario' href="https://www.google.es/maps/contrib/108781235252711070653/contribute/@40.5577642,-3.6891231,11z/" target="_blank">
                    <MdQuestionAnswer />
                </Link>
            </div>
            <div className='flex py-5 gap-3'>
                <FaReact title='React' className='text-2xl' />
                <TbBrandNextjs title='Next JS' className='text-2xl' />
            </div>
        </footer>
    </>);
};