"use client";
import React from "react";
import { Container } from "@/components/Container";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-sky-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-sky-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "¿Cual es el precio del sistema?",
    answer: "Tenemos diferentes planes de suscripción de acuerdo al volumen de productos que se quiera manejar. Puedes solicitar una cotización contactandonos aquí.",
  },
  {
    question: "¿Existe un périodo de prueba?",
    answer: "Si! Tenemos un mes gratuito donde podrás probar la plataforma y ver todas las funcionalidades que te ofrece, gratuitamente.",
  },
  {
    question: "¿Ofrecen soporte técnico?",
    answer:
      "Si! Durante el périodo de prueba vamos a estar haciendo reuniones semanales con tu equipo para poder sumergirte de una manera mucho mas eficiente en todas las funcionalidades que abarca el sistema.",
  },
  {
    question: "¿Se pueden contratar los módulos de Inventario y Forecast por separado?",
    answer:
      "Si, se pueden contratar módulos por separado, pero nosotros recomendamos contratar ambos en conjunto para un servicio mas completo y eficiente.",
  },
];
