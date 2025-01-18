"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import logo from '../../public/img/logo-dtafio.png';
import Image from "next/image";
import ThemeChanger from "./DarkSwitch";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Cambia el estado cuando se hace scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Producto", href: "#product" },
    { name: "Clientes", href: "#clients" },
    { name: "Testimonios", href: "#testimonials" },
    { name: "FAQs", href: "#FAQS" },
  ];

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="pl-6 w-full relative flex flex-wrap items-center justify-between p-5 mx-auto lg:justify-between xl:px-1">
        {/* Logo */}
        <Link href="/">
          <Image     
            src={logo}
            width={200}
            height={200}
            alt="Logo DTA F&IO"     
          />
        </Link>

        {/* Botones de la derecha */}
        <div className="gap-3 nav__item mr-2 lg:flex ml-auto lg:ml-0 lg:order-2">
          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="/contact-us"
              className="px-6 py-2 text-white bg-sky-600 rounded-md md:ml-5 hover:bg-white hover:text-sky-600 transition duration-300"
            >
              Obtener Demo
            </Link>
          </div>

          <div className="hidden mr-3 lg:flex nav__item">
            <Link
              href="/contact-us"
              className="px-6 py-2 text-sky-600 border border-sky-600 rounded-md md:ml-5 hover:bg-sky-600 hover:text-white transition duration-300"
            >
              Contáctanos
            </Link>
          </div>
          
          <div className="w-auto py-1 flex items-center justify-center px-2 bg-[#3B71CA] rounded">
            <ThemeChanger />
          </div>
        </div>

        {/* Menú responsive */}
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button
                aria-label="Toggle Menu"
                className="px-2 py-1 text-gray-500 rounded-md lg:hidden hover:text-sky-500 focus:text-sky-500 focus:bg-sky-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  {open && (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                  )}
                  {!open && (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                    />
                  )}
                </svg>
              </Disclosure.Button>

              <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                <>
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-sky-500 focus:text-sky-500 focus:bg-sky-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/"
                    className="w-full px-6 py-2 mt-3 text-center text-white bg-sky-600 rounded-md lg:ml-5"
                  >
                    Comenzar
                  </Link>
                </>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* Menú de navegación */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link
                  href={menu.href}
                  className={`inline-block px-4 py-2 text-lg font-normal rounded-md no-underline relative group transition duration-300 ${
                    isScrolled ? "text-gray-800 hover:text-sky-600" : "text-white hover:text-white"
                  }`}
                >
                  {menu.name}
                  <span className="absolute left-1/2 bottom-0 h-0.5 w-0 bg-sky-600 transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};
