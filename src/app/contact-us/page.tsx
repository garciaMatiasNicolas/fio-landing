"use client"
import React, { useState } from 'react'
import { 
  CheckCircleIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  BuildingOfficeIcon,
  UserIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const ContactUs = () => {
  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    client: '',
    industry: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';
      const response = await fetch(`${apiUrl}/api/web/form/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Limpiar el formulario
        setFormData({
          full_name: '',
          email: '',
          phone: '',
          client: '',
          industry: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen from-gray-50 via-white to-[rgb(59,113,202)]/10 bg-white">
      {/* Hero Header */}
      <header className="relative bg-[#3b71ca] text-white py-24 px-4 overflow-hidden">
        {/* Eliminamos los decorativos con animaciones y gradients */}
        
        <div className="relative max-w-5xl mx-auto text-center mt-12">
          {/* Badge simple sin gradient */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-8 border border-white/20 shadow-md">
            <SparklesIcon className="w-5 h-5 mr-2" />
            Demo Gratuita - Sin Compromiso
          </div>
          
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            Comienza tu transformación
            <span className="block text-white mt-2">
              digital hoy mismo
            </span>
          </h1>
          
          <p className="text-xl leading-relaxed max-w-4xl mx-auto text-white mb-8">
            Únete a las <strong className="text-white">empresas líderes</strong> que ya optimizan sus operaciones con 
            <strong className="text-white"> IA y Machine Learning</strong>. 
            Proyección de demanda, reposición inteligente y gestión avanzada de inventario.
          </p>

          {/* Botón sin gradient */}
          <div className="mt-12">
            <button className="px-8 py-4 bg-white text-[#3b71ca] font-bold rounded-xl hover:bg-[#275aa6] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl">
              ↓ Completa el formulario y comienza ya ↓
            </button>
          </div>
        </div>
      </header>


      {/* Enhanced Information Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-50 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgb(59,113,202)]/5 to-transparent"></div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[rgb(59,113,202)]/10 rounded-full text-[rgb(59,113,202)] font-medium text-sm mb-4">
              <ShieldCheckIcon className="w-4 h-4 mr-2" />
              Garantías y Beneficios
            </div>
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl mb-4">
              Todo lo que necesitas saber sobre tu
              <span className="block bg-gradient-to-r from-[rgb(59,113,202)] to-[rgb(79,133,222)] bg-clip-text text-transparent">
                prueba gratuita
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Sin compromisos, sin letra chica. Solo resultados comprobados para tu negocio.
            </p>
          </div>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Benefit cards */}
            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <CheckCircleIcon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Prueba totalmente gratuita
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Un mes completo</strong> para evaluar todas las funcionalidades. 
                    Al finalizar, tú decides si continuar o no, sin penalizaciones.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[rgb(59,113,202)] to-[rgb(79,133,222)] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <CurrencyDollarIcon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Precios fijos y transparentes
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sin comisiones ocultas ni sorpresas. Consulta nuestros planes 
                    <a href="/#plans" className="text-[rgb(59,113,202)] font-semibold hover:underline"> aquí</a> 
                    y conoce exactamente lo que pagarás.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <ShieldCheckIcon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Soporte integral incluido
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Desde el día 0</strong> tendrás acceso completo a nuestro equipo 
                    de especialistas para implementar y optimizar el sistema en tu empresa.
                  </p>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <RocketLaunchIcon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Demo personalizada garantizada
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Una vez completado el formulario, <strong>coordinamos una reunión</strong> 
                    donde te mostraremos el sistema funcionando con datos reales de tu industria.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full text-green-700 font-medium text-sm border border-green-200">
              <CheckCircleIcon className="w-5 h-5 mr-2 text-green-600" />
              Más de 30+ empresas ya confían en nosotros
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Form Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-[rgb(59,113,202)]/5 relative">
        {/* Background decorations */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgb(59,113,202)]/5 to-transparent"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-[rgb(59,113,202)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[rgb(79,133,222)]/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Form header */}
            <div className="bg-gradient-to-r from-[rgb(59,113,202)] to-[rgb(79,133,222)] px-8 py-12 text-center text-white relative overflow-hidden">
              {/* Header decorations */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-10 -translate-y-10"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-white/10 rounded-full translate-x-8 translate-y-8"></div>
              
              <div className="relative">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium text-sm mb-4">
                  <SparklesIcon className="w-4 h-4 mr-2" />
                  Proceso simple y rápido
                </div>
                <h2 className="text-3xl font-bold mb-3">
                  Completa el formulario para empezar
                </h2>
                <p className="text-white text-lg">
                  Nos pondremos en contacto contigo para agendar tu demo personalizada.
                </p>
              </div>
            </div>

            {/* Form content */}
            <div className="p-8 lg:p-12">
              <form className="space-y-8" onSubmit={handleSubmit}>
                {/* Name field */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    <UserIcon className="w-4 h-4 inline mr-2 text-[rgb(59,113,202)]" />
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[rgb(59,113,202)]/20 focus:border-[rgb(59,113,202)] transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300 bg-white"
                    placeholder="Ej: Juan Carlos Pérez"
                    required
                  />
                </div>

                {/* Email field */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    <EnvelopeIcon className="w-4 h-4 inline mr-2 text-[rgb(59,113,202)]" />
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[rgb(59,113,202)]/20 focus:border-[rgb(59,113,202)] transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300 bg-white"
                    placeholder="juan.carlos@empresa.com"
                    required
                  />
                </div>

                {/* Phone field */}
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    <PhoneIcon className="w-4 h-4 inline mr-2 text-[rgb(59,113,202)]" />
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[rgb(59,113,202)]/20 focus:border-[rgb(59,113,202)] transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300 bg-white"
                    placeholder="+54 9 351 123 4567"
                    required
                  />
                </div>

                {/* Company field */}
                <div className="group">
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    <BuildingOfficeIcon className="w-4 h-4 inline mr-2 text-[rgb(59,113,202)]" />
                    Nombre de tu empresa *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="client"
                    value={formData.client}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[rgb(59,113,202)]/20 focus:border-[rgb(59,113,202)] transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300 bg-white"
                    placeholder="Ej: Mi Empresa S.A."
                    required
                  />
                </div>

                {/* Industry field (new) */}
                <div className="group">
                  <label htmlFor="industry" className="block text-sm font-semibold text-gray-700 mb-2">
                    <ChartBarIcon className="w-4 h-4 inline mr-2 text-[rgb(59,113,202)]" />
                    Sector/Industria
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[rgb(59,113,202)]/20 focus:border-[rgb(59,113,202)] transition-all duration-300 text-gray-900 group-hover:border-gray-300 bg-white"
                  >
                    <option value="">Selecciona tu sector</option>
                    <option value="retail">Retail y Comercio</option>
                    <option value="manufactura">Manufactura</option>
                    <option value="distribucion">Distribución</option>
                    <option value="farmacia">Farmacia</option>
                    <option value="automotriz">Automotriz</option>
                    <option value="alimentos">Alimentos y Bebidas</option>
                    <option value="ferreteria">Ferretería</option>
                    <option value="tecnologia">Tecnología</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Message field */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    <EnvelopeIcon className="w-4 h-4 inline mr-2 text-[rgb(59,113,202)]" />
                    Mensaje adicional (opcional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-[rgb(59,113,202)]/20 focus:border-[rgb(59,113,202)] transition-all duration-300 text-gray-900 placeholder-gray-400 group-hover:border-gray-300 bg-white"
                    placeholder="Cuéntanos más sobre tus necesidades específicas..."
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800">
                    <div className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 mr-2 text-green-600" />
                      ¡Formulario enviado correctamente! Nos pondremos en contacto contigo pronto.
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
                    <div className="flex items-center">
                      <SparklesIcon className="w-5 h-5 mr-2 text-red-600" />
                      Ha ocurrido un error. Por favor, intenta nuevamente.
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-5 px-8 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 transform flex items-center justify-center group ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-[rgb(59,113,202)] to-[rgb(79,133,222)] text-white hover:shadow-2xl hover:from-[rgb(49,103,192)] hover:to-[rgb(69,123,212)] hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <RocketLaunchIcon className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                        Comenzar
                        <SparklesIcon className="w-6 h-6 ml-3 group-hover:scale-110 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                  
                  {/* Security note */}
                  <div className="text-center mt-4">
                    <p className="text-sm text-gray-500 flex items-center justify-center">
                      <ShieldCheckIcon className="w-4 h-4 mr-1 text-green-500" />
                      Tus datos están seguros y protegidos
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Bottom guarantee */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full text-green-700 font-medium text-sm border border-green-200 shadow-md">
              <CheckCircleIcon className="w-5 h-5 mr-2 text-green-600" />
              Garantía: Si no estás satisfecho, cancela cuando quieras sin costo
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs