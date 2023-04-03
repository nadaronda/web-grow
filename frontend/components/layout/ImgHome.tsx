import React from 'react';

export const ImgHome = () => {
    return (
        <>
            <div className=' rounded-full' title='Inicio'>
                <a href='/'>
                    <img
                        className='rounded-full hover:drop-shadow-line hover:transition-all transition-all'
                        src='/monasterio.jpg'
                        alt='logo'
                        width='70'
                    />
                </a>
            </div>

        </>
    );
};