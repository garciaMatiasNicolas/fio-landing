import React from 'react';
import { Container } from '@/components/Container';
import { 
  ChartBarIcon, 
  BuildingStorefrontIcon,
  SparklesIcon,
  CheckIcon,
  ArrowTrendingUpIcon,
  CubeIcon,
  TruckIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const Plans = () => {
  const plans = [
        {
            name: "Forecasting",
            description: "Proyección inteligente de demanda",
            icon: <ChartBarIcon className="w-8 h-8" />,
            color: "from-[rgb(59,113,202)] to-[rgb(79,133,222)]",
            borderColor: "border-blue-500/20",
            features: [
                "Predicción de ventas con IA",
                "Análisis de tendencias históricas",
                "Proyecciones estacionales",
                "Alertas de cambios en demanda",
                "Reportes de precisión",
                "Integración con sistemas existentes",
                "Dashboard analítico avanzado",
                "Soporte técnico incluido"
            ],
            highlights: ["Precisión del 95%", "Machine Learning", "Tiempo real"],
            badge: "Más Popular"
        },
        {
            name: "Inventario & Distribución",
            description: "Optimización y distribución",
            icon: <BuildingStorefrontIcon className="w-8 h-8" />,
            color: "from-green-500 to-emerald-600",
            borderColor: "border-green-500/20",
            features: [
                "Gestión de stock por sucursal",
                "Reposición automática inteligente",
                "Transferencias entre sucursales",
                "Control de stock mínimo/máximo",
                "Alertas de quiebre de stock",
                "Optimización de rutas de distribución",
                "Reportes de rotación",
                "Gestión de proveedores"
            ],
            highlights: ["30% menos costos", "Stock optimizado", "Multi-sucursal"],
            badge: "Recomendado"
        },
        {
            name: "Solución Completa",
            description: "Forecasting + Inventario integrados",
            icon: <SparklesIcon className="w-8 h-8" />,
            color: "from-purple-500 to-purple-600",
            borderColor: "border-purple-500/20",
            features: [
                "Todas las funciones de Forecasting",
                "Todas las funciones de Inventario",
                "Sincronización automática",
                "Dashboard unificado",
                "Reportes consolidados",
                "Análisis predictivo avanzado",
                "Optimización integral",
                "Soporte premium 24/7",
                "Consultoría estratégica incluida",
                "Capacitación especializada"
            ],
            highlights: ["ROI 2.5x", "Solución integral", "Máximo valor"],
            badge: "Mejor Valor",
            featured: true
        }
    ];
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-[rgb(59,113,202)]/5 py-12 sm:py-16 lg:py-20">
      <Container>
        <div className="text-center mb-12 sm:mb-16 px-4">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 bg-[rgb(59,113,202)]/10 rounded-full text-[rgb(59,113,202)] font-medium text-xs sm:text-sm mb-3 sm:mb-4">
            <BoltIcon className="w-4 h-4 mr-2" />
            Planes Disponibles
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Elige la solución perfecta
            <span className="block bg-gradient-to-r from-[rgb(59,113,202)] to-[rgb(79,133,222)] bg-clip-text text-transparent">
              para tu empresa
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada plan está diseñado para adaptarse a las necesidades específicas de tu negocio. 
            Desde proyección de demanda hasta gestión completa de inventario.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 max-w-7xl mx-auto px-4">
            {plans.map((plan, index) => (
                <div 
                key={index} 
                className={`relative group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-2 ${plan.borderColor} ${plan.featured ? 'lg:scale-105 lg:z-10' : ''} flex-1 min-w-[300px] max-w-[380px]`}
                >
                {/* Badge */}
                {plan.badge && (
                    <div className={`absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 px-3 sm:px-4 py-1 sm:py-2 bg-gradient-to-r ${plan.color} text-white text-xs sm:text-sm font-bold rounded-full shadow-lg`}>
                    {plan.badge}
                    </div>
                )}

                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-5 rounded-3xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative p-4 sm:p-6 lg:p-8">
                    {/* Header */}
                    <div className="text-center mb-6 sm:mb-8">
                        <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${plan.color} rounded-2xl mb-3 sm:mb-4 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                            {plan.icon}
                        </div>
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">{plan.name}</h3>
                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">{plan.description}</p>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-6 sm:mb-8">
                        {plan.highlights.map((highlight, idx) => (
                            <span 
                            key={idx} 
                            className={`px-2 sm:px-3 py-1 bg-gradient-to-r ${plan.color} text-white text-xs font-medium rounded-full`}
                            >
                            {highlight}
                        </span>
                    ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Funcionalidades incluidas:</h4>
                        {plan.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                                <div className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center mt-0.5`}>
                                    <CheckIcon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" />
                                </div>
                                <span className="text-gray-700 text-xs sm:text-sm leading-relaxed">{feature}</span>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${plan.color.replace('from-', 'border-').replace('to-', '').split(' ')[0]} transition-colors duration-300`}></div>
            </div>
            ))}
        </div>

      </Container>
    </div>
  );
};

export default Plans;
