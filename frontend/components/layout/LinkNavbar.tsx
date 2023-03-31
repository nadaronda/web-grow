import Link from 'next/link';

export const LinkNavbar: React.FC<{ href: string; text: string }> = ({ href, text }) => {
    return (
        <div>
            <Link href={href} className='text-gray-500 transition-all hover:text-2xl'>
                {text}
            </Link>
        </div>
    );
};
