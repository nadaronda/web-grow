import Link from 'next/link';
export const Footer: React.FC<{ children: any }> = ({ children }) => {
    return (<>
        <footer className='flex justify-items-center bg-lime-200'>
            <ul className='flex flex-col gap-5'>
                <li>
                    <Link href="https://www.instagram.com/monasteriogrowshop/" className="bg-blue-300 text-gray-500 hover:bg-orange-300">
                        <img src="/Instagram_icon.PNG" className='w-10' />
                        Instagram
                    </Link>

                </li>
                <li>
                    <Link href="https://www.facebook.com/monasteriogrowshop/" className="bg-blue-300 text-gray-500 hover:bg-orange-300">
                        <img src="/facebook-icon.jpg" className='w-10' /> Facebook
                    </Link>

                </li>
                <li>
                    Dejanos tu opinion
                </li>
            </ul>
            <ul className='flex flex-row gap-5 border-stone-800 '>
                <li>
                <img src="/react-icon.png" className='w-11' /> 
                </li>
                <li>
                <img src="/nextJS-icon.jpeg" className='w-24 align-text-top' /> 
                </li>
            </ul>
        </footer>
    </>)
}