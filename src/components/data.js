import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  PresentationChartBarIcon,
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Proyecciones de Ventas con IA y Machine Learning",
  desc: "Potencia tu negocio con nuestras proyecciones de ventas precisas, basadas en IA, Machine Learning y modelos avanzados de series temporales. A través de un análisis detallado, te ayudamos a prever la demanda de tus productos, optimizando la toma de decisiones y mejorando la planificación.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Predicción precisa de demanda:",
      desc: "Utilizamos modelos avanzados de IA y Machine Learning para ofrecer predicciones de ventas exactas y personalizadas por producto.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Análisis de tendencias del mercado",
      desc: "Con nuestras soluciones, podrás identificar patrones en el comportamiento del consumidor y las fluctuaciones estacionales.",
      icon: <PresentationChartBarIcon />,
    },
    {
      title: "Optimización continua",
      desc: "A medida que se obtienen nuevos datos, nuestro sistema ajusta las predicciones y te proporciona actualizaciones en tiempo real.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Optimización de Inventarios y Reposición por Sucursal",
  desc: "Gestiona tus inventarios de manera eficiente con nuestra solución inteligente de reposición por sucursal. Evita excesos y faltantes de stock, asegurando una operación fluida y minimizando costos.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Reposición automatizada por sucursal",
      desc: "Optimiza la cantidad de inventario en cada punto de venta según las proyecciones de demanda específicas.",
      icon: <BuildingStorefrontIcon />,
    },
    {
      title: "Reducción de costos operativos",
      desc: "Minimiza el exceso de inventario y mejora la eficiencia operativa, reduciendo costos relacionados con almacenamiento y desperdicio.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Control de inventarios en tiempo real",
      desc: "Ten siempre acceso a un informe preciso y actualizado sobre el estado de tus inventarios, facilitando la toma de decisiones rápidas y efectivas.",
      icon: <ArchiveBoxIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
