import {
  CursorArrowRaysIcon,
  AdjustmentsHorizontalIcon,
  PresentationChartBarIcon,
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/dashboard1.png";
import benefitTwoImg from "../../public/img/benefit2.png";

const benefitOne = {
  title: "Proyecciones de Ventas con IA y Machine Learning",
  desc: "Potencia tu negocio con nuestras proyecciones de ventas precisas, basadas en IA, Machine Learning y modelos avanzados de series temporales. A través de un análisis detallado, te ayudamos a prever la demanda de tus productos, optimizando la toma de decisiones y mejorando la planificación estratégica.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Predicción precisa de demanda",
      desc: "Utilizamos modelos avanzados de IA y Machine Learning para ofrecer predicciones de ventas exactas y personalizadas por producto, reduciendo la incertidumbre en tu planificación.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Análisis de tendencias del mercado",
      desc: "Identifica patrones en el comportamiento del consumidor, fluctuaciones estacionales y tendencias emergentes para adelantarte a la competencia.",
      icon: <PresentationChartBarIcon />,
    },
    {
      title: "Optimización continua y automática",
      desc: "Nuestro sistema se actualiza automáticamente con nuevos datos, ajustando las predicciones y proporcionando insights en tiempo real para decisiones más acertadas.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Optimización de Inventarios y Reposición por Sucursal",
  desc: "Gestiona tus inventarios de manera eficiente con nuestra solución inteligente de reposición por sucursal. Evita excesos y faltantes de stock, asegurando una operación fluida, minimizando costos y maximizando la rentabilidad de cada punto de venta.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Reposición automatizada inteligente",
      desc: "Optimiza automáticamente la cantidad de inventario en cada sucursal según las proyecciones de demanda específicas, patrones de consumo y estacionalidad local.",
      icon: <BuildingStorefrontIcon />,
    },
    {
      title: "Reducción significativa de costos",
      desc: "Minimiza el exceso de inventario hasta un 30% y mejora la eficiencia operativa, reduciendo costos de almacenamiento, desperdicio y capital inmovilizado.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Control y visibilidad total",
      desc: "Accede a dashboards en tiempo real con métricas clave, alertas inteligentes y reportes detallados para tomar decisiones rápidas y fundamentadas.",
      icon: <ArchiveBoxIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
