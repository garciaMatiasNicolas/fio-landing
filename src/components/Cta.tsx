import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-[#3B71CA] px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            ¿Listo para comenzar?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Contactanos hoy para una Demo y obtener tu cotización a medida.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="/contact-us"
            className="p-3 bg-white text-[#3B71CA] border rounded-md md:ml-5 hover:bg-[#3B71CA] hover:text-white hover:border-white transition duration-300"
          >
            Obtener Demo
          </a>
        </div>
      </div>
    </Container>
  );
};
