"use client";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import AOS from "aos";
import "aos/dist/aos.css"; // Importa los estilos de AOS
import { benefitOne, benefitTwo } from "@/components/data";
import Clients from "@/components/Clients";
import Banner from "@/components/Banner";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de las animaciones en ms
      easing: "ease-out", // Suavidad de las animaciones
      once: true, // Si es true, la animación se ejecutará solo una vez
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-zoom-in">
        <Hero />
      </div>

      <div data-aos="fade-zoom-in" id="product">
        <SectionTitle
          preTitle="Beneficios DTA F&IO"
          title=" Por que utilizar DTA F&IO"
        >
          Nuestro software es una solución avanzada para la proyección de ventas y la optimización de inventarios, diseñada para empresas que buscan maximizar su eficiencia operativa y mejorar su rentabilidad. Fácil de usar y respaldado por inteligencia artificial, transforma tus datos en estrategias claras y efectivas.
        </SectionTitle>
        <Benefits data={benefitOne} />
      </div>

      <div data-aos="fade-zoom-in">  
        <Banner />
      </div>

      <div data-aos="fade-zoom-in">
        <SectionTitle
          preTitle="INVENTARIO"
          title="Evita el sobrestock"
        />
        <Benefits data={benefitTwo} />
      </div>
      
      <div data-aos="fade-zoom-in">
        <SectionTitle
          id="clients"
          preTitle="Clientes"
          title="Acompañan nuestro crecimiento"
        />
        <Clients />
      </div>

      {/* <div data-aos="fade-zoom-in">
        <SectionTitle
          preTitle="Watch a video"
          title="Learn how to fullfil your needs"
        >
          This section is to highlight a promo or demo video of your product.
          Analysts says a landing page with video has 3% more conversion rate. So,
          don&apos;t forget to add one. Just like this.
        </SectionTitle>

        <Video videoId="fZ0D0cnR88E" />
      </div> */}

      <div data-aos="fade-zoom-in">
        <SectionTitle
          id="testimonials"
          preTitle="Testimonios"
          title="Opiniones de nuestros clientes"
        >
          Aquí podras comprobar lo que opinan nuestros clientes y ver como estamos del lado tuyo para que puedas aprovrechar nuestro sistema al máximo
        </SectionTitle>

        <Testimonials />
      </div>

      <div id="get-demo" className="mb-6"> 
        <Cta />
      </div>

      <div data-aos="fade-zoom-in">
        <SectionTitle id="FAQS" preTitle="FAQs" title="Preguntas frecuentes" />
        <Faq />
      </div>
    </div>
  );
}
