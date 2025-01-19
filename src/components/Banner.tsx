import Image from 'next/image';
import React from 'react';
import banner from '../../public/img/banner.png';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

const Banner = () => {
    return (
        <div className='w-full h-full bg-[#3B71CA] flex items-center justify-center'>    
            <div className='w-full max-w-[1000px] flex justify-center flex-col items-center h-[250px] mb-12 pt-5'>
                <CalendarDaysIcon 
                    width={80}
                    height={80}
                    color='white'
                />
                <h2 className='text-center max-w-2xl mt-3 text-2xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-2xl text-white'>
                    Pruébalo GRATIS por 1 MES y súbete a la era digital
                </h2>
                <div className='flex flex-col items-center justify-center gap-2 mt-5'>
                    <button className='w-[200px] px-6 py-2 text-white bg-sky-400 rounded-md md:ml-5 hover:bg-white hover:text-sky-600 hover:border hover:border-sky-600 transition duration-300'>
                        Probarlo Gratis
                    </button>

                    <button className='w-[200px] px-6 py-2 text-white bg-transparent rounded-md border border-white md:ml-5 transition duration-300'>
                        Planes y precios
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner;