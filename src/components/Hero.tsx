import billboard from "../../public/img/billboard2.jpg";
import Slider from "react-slick";

export const Hero = () => {
  const sliderSettings = {
    dots: false, // Desactivar las bolitas de navegación
    arrows: false, // Desactivar los botones de navegación
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Cambia cada 2 segundos
    pauseOnHover: false, // No pausa al hacer hover
  };

  return (
    <div
      className="w-full bg-cover bg-center h-full"
      style={{
        backgroundImage: `linear-gradient(90deg,#000 4%,transparent 70%,transparent 90%), url(${billboard.src})`,
        height: "600px",
      }}
    >
      <div className="pl-6 m-0 flex flex-wrap py-16">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="w-full mb-8" style={{ marginTop: "100px" }}>
            <h1 className="text-white text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
              Sistema de Forecasting y Optimización de Inventario
            </h1>
            {/* Slider */}
            <div className="w-full mt-8 max-w-[500px]">
              <Slider {...sliderSettings}>
                <div>
                  <h2 className="text-3xl font-semibold text-start text-[#3B71CA] underline">
                    Proyecte su demanda
                  </h2>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-start text-[#3B71CA] underline">
                    Optimice su inventario
                  </h2>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold text-start text-[#3B71CA] underline">
                    Mejore su negocio
                  </h2>
                </div>
              </Slider>
            </div>
            <p className="mt-5 text-xl leading-normal lg:text-xl xl:text-2xl text-white">
              Obtenga una cotización personalizada según
            </p>
            <p className="pb-5 text-xl leading-normal lg:text-xl xl:text-2xl text-white">
              su propio volumen de productos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
