import React from 'react'

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-[#3B71CA] text-white py-12 px-4 text-center flex items-center pt-6 justify-center flex-col h-[400px]">
        <h1 className="text-4xl font-bold mt-12">Prueba GRATIS 1 Mes</h1>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          ¡Estás a punto de probar <strong>DTA F&IO</strong>! El unico Software para poder proyectar tu demanda y optimizar tu inventario de la mejor manera. Ofrecemos proyecciones con IA, Machine learning, 
          Reposicion de stock por sucursal, y mucho mas.
        </p>
      </header>

      {/* Information Section */}
      <section className="py-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-gray-800">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Algunas cosas a tener en cuenta:
          </h2>
          <ul className="space-y-4 text-lg">
            <li>
              ✅ La prueba es totalmente gratuita durante un mes. Al finalizar el
              período de prueba, tú decides si continuar o no.
            </li>
            <li>
              ✅ Los precios son fijos y sin comisiones. Puedes{" "}
              <a
                href="#"
                className="text-[#3B71CA] underline hover:text-[#3462ac]"
              >
                consultarlos aquí
              </a>
              .
            </li>
            <li>
              ✅ El soporte y asistencia para implementar el servicio está
              incluido desde el día 0.
            </li>
            <li>
              ✅ Una vez que completes tus datos, nos pondremos en contacto para
              coordinar una reunión donde te mostraremos en detalle más sobre el
              sistema.
            </li>
          </ul>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Completa el formulario para empezar
          </h2>
          <p className="text-center text-gray-600 mt-2">
            Uno de nuestros representantes se pondrá en contacto contigo.
          </p>

          {/* Form */}
          <form className="mt-8 space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#3B71CA] focus:border-[#3B71CA]"
                placeholder="Ingresa tu nombre completo"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#3B71CA] focus:border-[#3B71CA]"
                placeholder="correo@ejemplo.com"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Teléfono
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#3B71CA] focus:border-[#3B71CA]"
                placeholder="+54 9 351..."
                required
              />
            </div>

            {/* Club Name */}
            <div>
              <label
                htmlFor="club"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre de tu empresa
              </label>
              <input
                type="text"
                id="club"
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#3B71CA] focus:border-[#3B71CA]"
                placeholder="Ej: Mi Empresa S.A"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#3B71CA] text-white py-3 px-6 rounded-md shadow-md hover:bg-[#3462ac] transition duration-200"
              >
                Enviar formulario
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs