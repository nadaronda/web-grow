import React from 'react';
export const Section: React.FC<{ children: any; imgSrc: string; side: string }> = ({ children, imgSrc, side }) => {
    return (
        //TODO: Meter emotion y mezclar estilos
        <section>
            <div className='flex flex-row bg-gradient-to-r from-azul to-rosa justify-around items-center '>
                {side === 'right' && (
                    <>
                        <div className='justify-center w-[50%]'>
                            <div className=' py-3 bg-gradient-to-r from-azul to-rosa'>{children}</div>
                        </div>
                        <img src={imgSrc} alt={imgSrc} className='w-[50%] aspect-square' />
                    </>
                )}

                {side === 'left' && (
                    <>
                        <img src={imgSrc} alt={imgSrc} className='w-[50%] aspect-square' />
                        <div className='justify-center w-[50%]'>
                            <div className='bg-gradient-to-r from-azul to-rosa'>{children}</div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};
