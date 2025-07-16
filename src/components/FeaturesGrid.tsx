import React from 'react';
import { Container } from '@/components/Container';
import {
  CpuChipIcon,
  ChartBarIcon,
  CloudIcon,
  ShieldCheckIcon,
  BoltIcon,
  Cog6ToothIcon,
  DevicePhoneMobileIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { ClockIcon } from '@heroicons/react/24/solid';

const FeaturesGrid = () => {
  const features = [
        {
            title: "Inteligencia Artificial Avanzada",
            description: "Algoritmos de machine learning que aprenden continuamente de tus datos para mejorar las predicciones.",
            icon: <CpuChipIcon className="w-8 h-8" />,
            gradient: "from-[rgb(59,113,202)] to-[rgb(79,133,222)]"
        },
        {
            title: "Dashboards Interactivos",
            description: "Visualiza tus datos en tiempo real con gráficos intuitivos y métricas clave al alcance de un clic.",
            icon: <ChartBarIcon className="w-8 h-8" />,
            gradient: "from-[rgb(59,113,202)] to-[rgb(99,153,242)]"
        },
        {
            title: "Cloud & Escalable",
            description: "Infraestructura en la nube que crece contigo. Desde startups hasta grandes corporaciones.",
            icon: <CloudIcon className="w-8 h-8" />,
            gradient: "from-green-500 to-emerald-500"
        },
        {
            title: "Seguridad Empresarial",
            description: "Tus datos protegidos con diferentes capas de seguridad y cumplimiento de estándares.",
            icon: <ShieldCheckIcon className="w-8 h-8" />,
            gradient: "from-orange-500 to-red-500"
        },
        {
            title: "Procesamiento Rápido",
            description: "Análisis de millones de registros en segundos. Optimizado para grandes volúmenes de datos.",
            icon: <BoltIcon className="w-8 h-8" />,
            gradient: "from-yellow-500 to-orange-500"
        },
        {
            title: "Carga de Datos Simplificada",
            description: "Subí tus datos mediante plantillas de Excel predefinidas. El sistema los procesa automáticamente para facilitar el análisis.",
            icon: <Cog6ToothIcon className="w-8 h-8" />,
            gradient: "from-[rgb(79,133,222)] to-[rgb(99,153,242)]"
        },
        {
            title: "Historial de Cambios",
            description: "Seguimiento detallado de las modificaciones en tus datos para una trazabilidad completa.",
            icon: <ClockIcon className="w-8 h-8" />,
            gradient: "from-blue-600 to-indigo-600"
        },
        {
            title: "Soporte 24/7",
            description: "Equipo de expertos disponible las 24 horas para resolver cualquier consulta técnica.",
            icon: <UserGroupIcon className="w-8 h-8" />,
            gradient: "from-[rgb(59,113,202)] to-[rgb(119,173,262)]"
        }
  ];

  return (
    <div className="bg-white py-12">
      <Container>
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-gradient-to-r from-[rgb(59,113,202)]/10 to-[rgb(99,153,242)]/10 rounded-full text-[rgb(59,113,202)] font-medium text-xs sm:text-sm mb-3 sm:mb-4">
            <div className="w-2 h-2 bg-[rgb(59,113,202)] rounded-full mr-2"></div>
            Características Principales
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight">
            Todo lo que necesitas en una plataforma
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            DTA F&IO combina tecnología de vanguardia con facilidad de uso para brindarte la mejor experiencia en forecasting e inventarios
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 px-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-4 sm:p-6 border border-gray-100 hover:border-transparent hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Icon container */}
              <div className="relative mb-4 sm:mb-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.gradient} rounded-xl text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {feature.icon}
                </div>
                {/* Animated background circle */}
                <div className={`absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${feature.gradient} rounded-xl opacity-20 scale-0 group-hover:scale-150 transition-transform duration-500`}></div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-[rgb(59,113,202)] group-hover:to-[rgb(99,153,242)] transition-all duration-300 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover border effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${feature.gradient.replace('from-', 'border-').replace('to-', 'border-')} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              
              {/* Bottom accent line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-12 sm:mt-16 px-4">
          <div className="bg-gradient-to-r from-[rgb(59,113,202)]/5 to-[rgb(99,153,242)]/5 rounded-2xl p-6 sm:p-8 border border-[rgb(59,113,202)]/10">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
              ¿Listo para optimizar tu negocio?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed">
              Descubre cómo estas características pueden transformar tu gestión de inventarios y proyecciones de ventas
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-[rgb(59,113,202)] to-[rgb(79,133,222)] text-white font-semibold text-sm sm:text-base rounded-xl hover:from-[rgb(49,103,192)] hover:to-[rgb(69,123,212)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Solicitar Demo
              </button>
              <button className="px-6 sm:px-8 py-3 border-2 border-[rgb(59,113,202)]/20 text-[rgb(59,113,202)] font-semibold text-sm sm:text-base rounded-xl hover:bg-[rgb(59,113,202)]/5 hover:border-[rgb(59,113,202)]/30 transition-all duration-300">
                Ver Planes
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturesGrid;
