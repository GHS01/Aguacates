import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Calendar, BarChart, Truck, FileCheck, ShoppingCart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EnhancedBreadcrumb from '@/components/EnhancedBreadcrumb';
import ProductFAQ from '@/components/ProductFAQ';
import SEO from '@/components/SEO';

const FuerteHero = () => {
  return (
    <section className="relative bg-[#2D5C34] text-white py-24 md:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge className="bg-[#C6A96C] hover:bg-[#C6A96C]/90 text-white text-xs px-3 py-1">
              VARIEDAD PREMIUM
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Aguacate <span className="text-[#C6A96C]">Fuerte</span> para Exportación
          </motion.h1>

          <motion.p
            className="font-body text-white/80 text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Una variedad premium apreciada por su tamaño generoso, piel lisa de color verde
            y sabor suave. Cultivado en las condiciones ideales de los valles andinos peruanos
            para garantizar la máxima calidad.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              className="bg-[#C6A96C] hover:bg-[#C6A96C]/90 text-white px-6 py-3"
              onClick={() => window.open("https://wa.link/wdn6az", "_blank")}
            >
              Solicitar cotización
            </Button>
            <Link href="/exportacion/proceso">
              <Button variant="outline" className="border-white text-white bg-white/20 hover:bg-white/30 px-6 py-3">
                Proceso de exportación
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CaracteristicasFuerte = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/Aguacate-fuerte-Premium.webp"
              alt="Aguacate Fuerte Premium para Exportación"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>

          <div>
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#2D5C34]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              Características del Aguacate Fuerte
            </motion.h2>

            <motion.p
              className="font-body text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              El aguacate Fuerte es una variedad premium con características distintivas
              que lo hacen muy apreciado en mercados internacionales específicos que
              prefieren aguacates de mayor tamaño y piel verde.
            </motion.p>

            <div className="space-y-4">
              {[
                "Piel lisa de color verde que se mantiene verde al madurar, ideal para mercados que prefieren esta característica",
                "Pulpa cremosa con sabor suave y bajo contenido de fibra",
                "Tamaño grande (250-450g), perfecto para restaurantes y uso culinario",
                "Forma característica de pera, fácilmente reconocible",
                "Contenido de aceite del 16-18%, proporcionando un sabor equilibrado"
              ].map((caracteristica, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                >
                  <CheckCircle className="text-[#C6A96C] mr-3 mt-1 flex-shrink-0" size={20} />
                  <p className="font-body text-gray-700">{caracteristica}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const EspecificacionesFuerte = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const especificaciones = [
    {
      icon: <BarChart size={24} />,
      title: "Calibres Disponibles",
      description: "8, 10, 12, 14, 16, 18 (número de frutos por caja de 4kg)"
    },
    {
      icon: <Calendar size={24} />,
      title: "Temporada Principal",
      description: "Noviembre a Marzo, con disponibilidad extendida según zona de cultivo"
    },
    {
      icon: <Truck size={24} />,
      title: "Embalaje para Exportación",
      description: "Cajas de 4kg y 10kg, con opciones de embalaje personalizado según requerimientos"
    },
    {
      icon: <FileCheck size={24} />,
      title: "Certificaciones",
      description: "Global GAP, HACCP, BRC Food Safety, y certificaciones específicas según mercado"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F0]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#2D5C34]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Especificaciones Técnicas
          </motion.h2>

          <motion.p
            className="font-body text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Ofrecemos aguacates Fuerte que cumplen con los más estrictos estándares
            internacionales de calidad, en diferentes calibres y presentaciones.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {especificaciones.map((spec, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="text-[#C6A96C] mb-4">{spec.icon}</div>
              <h3 className="font-display text-xl font-bold mb-3 text-[#2D5C34]">{spec.title}</h3>
              <p className="font-body text-gray-600">{spec.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="font-display text-xl font-bold mb-4 text-[#2D5C34] text-center">
            Tabla de Calibres - Aguacate Fuerte
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#F9F6F0]">
                  <th className="border border-gray-200 px-4 py-2 text-left">Calibre</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Peso Promedio</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Frutos por Caja (4kg)</th>
                  <th className="border border-gray-200 px-4 py-2 text-left">Mercados Principales</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">8</td>
                  <td className="border border-gray-200 px-4 py-2">450-500g</td>
                  <td className="border border-gray-200 px-4 py-2">8</td>
                  <td className="border border-gray-200 px-4 py-2">Europa, Medio Oriente</td>
                </tr>
                <tr className="bg-[#F9F6F0]/50">
                  <td className="border border-gray-200 px-4 py-2">10</td>
                  <td className="border border-gray-200 px-4 py-2">400-450g</td>
                  <td className="border border-gray-200 px-4 py-2">10</td>
                  <td className="border border-gray-200 px-4 py-2">Europa, Medio Oriente</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">12</td>
                  <td className="border border-gray-200 px-4 py-2">330-400g</td>
                  <td className="border border-gray-200 px-4 py-2">12</td>
                  <td className="border border-gray-200 px-4 py-2">Europa, Asia</td>
                </tr>
                <tr className="bg-[#F9F6F0]/50">
                  <td className="border border-gray-200 px-4 py-2">14</td>
                  <td className="border border-gray-200 px-4 py-2">280-330g</td>
                  <td className="border border-gray-200 px-4 py-2">14</td>
                  <td className="border border-gray-200 px-4 py-2">Europa, Asia</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">16</td>
                  <td className="border border-gray-200 px-4 py-2">250-280g</td>
                  <td className="border border-gray-200 px-4 py-2">16</td>
                  <td className="border border-gray-200 px-4 py-2">Europa, Asia, Latinoamérica</td>
                </tr>
                <tr className="bg-[#F9F6F0]/50">
                  <td className="border border-gray-200 px-4 py-2">18</td>
                  <td className="border border-gray-200 px-4 py-2">220-250g</td>
                  <td className="border border-gray-200 px-4 py-2">18</td>
                  <td className="border border-gray-200 px-4 py-2">Latinoamérica, Mercados locales</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const VentajasFuerte = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold mb-6 text-[#2D5C34]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Ventajas del Aguacate Fuerte
          </motion.h2>

          <motion.p
            className="font-body text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            El aguacate Fuerte ofrece características únicas que lo hacen especialmente
            atractivo para ciertos mercados y aplicaciones culinarias.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2D5C34]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-[#2D5C34]">Ideal para Restaurantes</h3>
            <p className="font-body text-gray-600 mb-4">
              Su tamaño grande y uniforme lo hace perfecto para restaurantes y servicios de catering,
              donde se valora la presentación y el rendimiento por unidad.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="text-[#C6A96C] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="font-body text-gray-700">Excelente para platos gourmet</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-[#C6A96C] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="font-body text-gray-700">Fácil de pelar y preparar</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-[#C6A96C] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="font-body text-gray-700">Alto rendimiento por unidad</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2D5C34]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-[#2D5C34]">Mercados Específicos</h3>
            <p className="font-body text-gray-600 mb-4">
              Muy apreciado en mercados europeos y de Medio Oriente que prefieren aguacates
              de piel verde y tamaño grande, con un sabor más suave.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="text-[#C6A96C] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="font-body text-gray-700">Preferido en mercados europeos selectos</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-[#C6A96C] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="font-body text-gray-700">Alta demanda en Medio Oriente</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-[#C6A96C] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="font-body text-gray-700">Diferenciación en mercados competitivos</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2D5C34]"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-[#2D5C34]">Complemento Estacional</h3>
            <p className="font-body text-gray-600 mb-4">
              Su temporada de disponibilidad complementa perfectamente la del aguacate Hass,
              permitiendo ofrecer suministro continuo durante todo el año.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle className="text-[#C6A96C] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="font-body text-gray-700">Disponible cuando el Hass escasea</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-[#C6A96C] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="font-body text-gray-700">Permite mantener relaciones comerciales continuas</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-[#C6A96C] mr-2 mt-1 flex-shrink-0" size={16} />
                <span className="font-body text-gray-700">Diversificación de oferta exportable</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactoFuerte = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F0]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-[#2D5C34] text-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.h2
                className="font-display text-2xl md:text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                ¿Interesado en importar nuestro Aguacate Fuerte?
              </motion.h2>

              <motion.p
                className="font-body text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Nuestro equipo especializado en exportación está listo para atender tus consultas
                sobre nuestro aguacate Fuerte premium. Podemos proporcionarte información detallada
                sobre precios, volúmenes disponibles, calibres y condiciones de envío.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  className="bg-[#C6A96C] hover:bg-[#C6A96C]/90 text-white"
                  onClick={() => window.open("https://wa.link/wdn6az", "_blank")}
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Solicitar cotización
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white bg-white/20 hover:bg-white/30"
                  onClick={() => window.open("https://wa.link/reqscn", "_blank")}
                >
                  Hablar con un especialista
                </Button>
              </motion.div>
            </div>

            <div className="h-64 lg:h-auto relative">
              <img
                src="/images/puerto-barcelona-noche.jpg"
                alt="Puerto de Barcelona - Exportación de aguacates"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FuerteExportacion = () => {
  // Schema.org para la página de Fuerte
  const fuerteSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aguacate Fuerte Premium para Exportación",
    "image": "https://inca-fields-ghs.vercel.app/images/Aguacate-fuerte-Premium.webp",
    "description": "Aguacate Fuerte premium cultivado en los valles andinos de Perú, caracterizado por su piel verde, tamaño grande y sabor suave. Ideal para exportación a mercados selectos.",
    "brand": {
      "@type": "Brand",
      "name": "Inca Fields Premium"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31",
      "businessFunction": "http://purl.org/goodrelations/v1#Sell",
      "seller": {
        "@type": "Organization",
        "name": "Inca Fields Premium",
        "url": "https://inca-fields-ghs.vercel.app/"
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Aguacate Fuerte Premium para Exportación"
        description="Exportamos aguacate Fuerte premium desde Perú. Descubre sus características, especificaciones técnicas y calibres disponibles para importación internacional."
        keywords="aguacate fuerte exportación, fuerte premium, exportador fuerte Perú, proveedor aguacate fuerte, importar aguacate fuerte"
        url="https://inca-fields-ghs.vercel.app/exportacion/fuerte"
        type="product"
        schema={fuerteSchema}
      />
      <Header />
      <main>
        <FuerteHero />

        {/* Breadcrumbs */}
        <div className="bg-[#F9F6F0] border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <EnhancedBreadcrumb
              items={[
                { label: "Inicio", url: "/" },
                { label: "Exportación", url: "/exportacion" },
                { label: "Aguacate Fuerte", url: "/exportacion/fuerte", isCurrent: true }
              ]}
            />
          </div>
        </div>

        <CaracteristicasFuerte />
        <EspecificacionesFuerte />
        <VentajasFuerte />
        <ProductFAQ
          faqs={[
            {
              question: "¿Cuáles son los calibres disponibles para el aguacate Fuerte?",
              answer: "Ofrecemos aguacates Fuerte en calibres 8, 10, 12, 14, 16 y 18, que corresponden al número de frutos por caja de 4kg. Los calibres más grandes (8-12) son especialmente apreciados en mercados europeos y de Medio Oriente que valoran el tamaño y la presentación."
            },
            {
              question: "¿Cuál es la temporada principal de exportación del aguacate Fuerte?",
              answer: "La temporada principal de exportación del aguacate Fuerte peruano es de noviembre a marzo, complementando perfectamente la temporada del Hass. Esto nos permite ofrecer suministro de aguacates premium durante todo el año a nuestros clientes internacionales."
            },
            {
              question: "¿Por qué el aguacate Fuerte mantiene su color verde al madurar?",
              answer: "El aguacate Fuerte mantiene su característico color verde al madurar debido a sus características genéticas. Esto lo diferencia del Hass que se oscurece, y lo hace especialmente atractivo para mercados que prefieren aguacates de piel verde, como ciertos países europeos y de Medio Oriente."
            },
            {
              question: "¿Cuál es el contenido de aceite del aguacate Fuerte que exportan?",
              answer: "Nuestros aguacates Fuerte tienen un contenido de aceite entre 16-18%, lo que les confiere un sabor suave y equilibrado, menos intenso que el Hass pero igualmente cremoso y de alta calidad gastronómica."
            },
            {
              question: "¿Para qué usos culinarios es ideal el aguacate Fuerte?",
              answer: "El aguacate Fuerte es ideal para ensaladas, platos fríos y presentaciones donde se aprecia su tamaño y apariencia. Su pulpa firme mantiene bien la forma cuando se corta en rodajas o cubos, y su sabor suave lo hace versátil para diversas aplicaciones culinarias, especialmente en la alta cocina."
            }
          ]}
        />
        <ContactoFuerte />
      </main>
      <Footer />
    </div>
  );
};

export default FuerteExportacion;
