import React from 'react';
import { Container } from '@/components/Container';
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  ClockIcon, 
  ArrowTrendingUpIcon 
} from '@heroicons/react/24/solid';

const Stats = () => {
    const statistics = [
        {
            number: "95%",
            label: "Precisión en predicciones",
            description: "de ventas con IA",
            icon: <ChartBarIcon className="w-8 h-8" />,
            color: "from-[rgb(59,113,202)] to-[rgb(79,133,222)]"
        },
        {
            number: "30%",
            label: "Reducción de costos",
            description: "en inventario",
            icon: <CurrencyDollarIcon className="w-8 h-8" />,
            color: "from-green-500 to-emerald-600"
        },
        {
            number: "70%",
            label: "Menos tiempo",
            description: "en planificación",
            icon: <ClockIcon className="w-8 h-8" />,
            color: "from-orange-500 to-orange-600"
        },
        {
            number: "2.5x",
            label: "Aumento en ROI",
            description: "promedio de clientes",
            icon: <ArrowTrendingUpIcon className="w-8 h-8" />,
            color: "from-[rgb(59,113,202)] to-[rgb(99,153,242)]"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 to-[rgb(59,113,202)]/5 py-12 sm:py-16">
            <Container>
                <div className="text-center mb-8 sm:mb-12 px-4">
                    <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[rgb(59,113,202)]/10 rounded-full text-[rgb(59,113,202)] font-medium text-xs sm:text-sm mb-3 sm:mb-4">
                        <div className="w-2 h-2 bg-[rgb(59,113,202)] rounded-full mr-2"></div>
                        Resultados Comprobados
                    </div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
                        Números que hablan por sí solos
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Muchas <a href="#clients" className="text-[rgb(59,113,202)] font-semibold">empresas</a> ya confían en DTA F&IO para optimizar sus operaciones y maximizar sus resultados.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4">
                    {statistics.map((stat, index) => (
                        <div 
                            key={index} 
                            className="relative group bg-white rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                        >
                            {/* Background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-2xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                            
                            {/* Icon */}
                            <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-xl mb-4 sm:mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                                {stat.icon}
                            </div>

                            {/* Number */}
                            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[rgb(59,113,202)] group-hover:to-[rgb(99,153,242)] transition-all duration-300">
                                {stat.number}
                            </div>

                            {/* Label */}
                            <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 leading-tight">
                                {stat.label}
                            </div>

                            {/* Description */}
                            <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                {stat.description}
                            </div>

                            {/* Hover effect border */}
                            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[rgb(59,113,202)]/20 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-8 sm:mt-12 px-4">
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
                        ¿Quieres ver estos resultados en tu empresa?
                    </p>
                    <a href="/contact-us">
                        <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[rgb(59,113,202)] to-[rgb(79,133,222)] text-white font-semibold text-sm sm:text-base rounded-xl hover:from-[rgb(49,103,192)] hover:to-[rgb(69,123,212)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Solicitar Demo
                        </button>
                    </a>
                </div>
            </Container>
        </div>
    );
};

export default Stats;
