"use client";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import { benefitOne, benefitTwo } from "@/components/data";
import Clients from "@/components/Clients";
import Banner from "@/components/Banner";
import Stats from "@/components/Stats";
import FeaturesGrid from "@/components/FeaturesGrid";
import Plans from "@/components/Plans";
import { useEffect } from "react";

export default function Home() {

  return (
    <div className="bg-white">
      <div >
        <Hero />
      </div>

      {/* Nueva sección de Estadísticas */}
      <div>
        <Stats />
      </div>

      <div  id="product">
        <SectionTitle
          preTitle="Beneficios DTA F&IO"
          title=" Por que utilizar DTA F&IO"
        >
          Nuestro software es una solución avanzada para la proyección de ventas y la optimización de inventarios, diseñada para empresas que buscan maximizar su eficiencia operativa y mejorar su rentabilidad. Fácil de usar y respaldado por inteligencia artificial, transforma tus datos en estrategias claras y efectivas.
        </SectionTitle>
        <Benefits data={benefitOne} />
      </div>

      {/* Nueva sección de Características */}
      <div >
        <FeaturesGrid />
      </div>


      <div >
        <SectionTitle
          preTitle="INVENTARIO"
          title="Evita el sobrestock"
        />
        <Benefits data={benefitTwo} />
      </div>

      <div >  
        <Banner />
      </div>
      
      <div >
        <SectionTitle
          id="clients"
          preTitle="Clientes"
          title="Acompañan nuestro crecimiento"
        />
        <Clients />
      </div>

      {/* Nueva sección de Planes */}
      <div  id="plans">
        <Plans />
      </div>

      <div id="get-demo" className="mb-6"> 
        <Cta />
      </div>

      <div >
        <SectionTitle id="FAQS" preTitle="FAQs" title="Preguntas frecuentes" />
        <Faq />
      </div>
    </div>
  );
}
