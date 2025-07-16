import React from 'react';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

const Banner = () => {
    return (
        <div className='w-full min-h-[400px] md:h-[480px] bg-gradient-to-br from-[rgb(59,113,202)] via-[rgb(79,133,222)] to-[rgb(59,113,202)] flex items-center justify-center relative overflow-hidden'>
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(59,113,202)]/20 to-[rgb(99,153,242)]/20"></div>
            <div className="absolute top-0 left-0 w-48 h-48 md:w-72 md:h-72 bg-white/5 rounded-full -translate-x-20 -translate-y-20 md:-translate-x-36 md:-translate-y-36"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 md:w-96 md:h-96 bg-white/5 rounded-full translate-x-24 translate-y-24 md:translate-x-48 md:translate-y-48"></div>

            <div className='relative w-full max-w-[1000px] flex justify-center flex-col items-center h-full px-4 md:px-6 py-10'>
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 mb-6">
                    <CalendarDaysIcon 
                        width={64}
                        height={64}
                        className="text-white sm:w-20 sm:h-20"
                    />
                </div>
                <h2 className='text-center max-w-2xl text-2xl sm:text-3xl font-bold leading-snug tracking-tight text-white mb-3'>
                    Pruébalo GRATIS por 1 MES
                </h2>
                <p className="text-white text-base sm:text-lg mb-6 sm:mb-8 text-center px-2">
                    y súbete a la era digital de la gestión inteligente
                </p>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full px-4 sm:px-0'>
                    <button className='w-full sm:w-[200px] px-6 py-3 text-[rgb(59,113,202)] bg-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl'>
                        Probarlo Gratis
                    </button>

                    <button className='w-full sm:w-[200px] px-6 py-3 text-white bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 font-semibold hover:bg-white/20 hover:scale-105 transition-all duration-300'>
                        Planes y precios
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner;
