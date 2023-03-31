import Link from 'next/link';
export const CartaFondo: React.FC<{ titulo: string; text1: string; texto2: string; href: string; nameEnlace: string }> = ({
    titulo,
    text1,
    texto2,
    href,
    nameEnlace,
}) => {
    return (
        <>
            <div className='flex justify-center'>
                <div className='rounded-lg  py-3 w-[300px] h-[100%] '>
                    <div className='flex flex-col justify-between '>
                        <h5 className=''>{titulo}</h5>
                        <p className=''>{text1}</p>
                        <p>{texto2}</p>
                        <div className='text-right'>
                            <Link className='text-zinc-600 hover:text-red-600 ' href={href}>
                                {nameEnlace}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
