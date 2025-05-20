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

const HassHero = () => {
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
            Aguacate <span className="text-[#C6A96C]">Hass</span> para Exportación
          </motion.h1>

          <motion.p
            className="font-body text-white/80 text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            La variedad más demandada a nivel mundial por su excepcional sabor,
            textura cremosa y excelente vida post-cosecha. Cultivado en las
            condiciones ideales de los valles andinos peruanos.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              className="bg-[#C6A96C] hover:bg-[#C6A96C]/90 text-white px-6 py-3"
              onClick={() => window.open("https://wa.link/77jjyl", "_blank")}
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

const CaracteristicasHass = () => {
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
              src="/images/Aguacate-Hass-Premium.webp"
              alt="Aguacate Hass Premium para Exportación"
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
              Características del Aguacate Hass
            </motion.h2>

            <motion.p
              className="font-body text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              El aguacate Hass es reconocido mundialmente por su calidad superior y características
              que lo hacen ideal para la exportación a mercados internacionales exigentes.
            </motion.p>

            <div className="space-y-4">
              {[
                "Piel rugosa que se oscurece al madurar, facilitando la identificación del punto óptimo de consumo",
                "Pulpa cremosa con bajo contenido de fibra y alto contenido de aceite (18-22%)",
                "Excelente vida post-cosecha, manteniendo su calidad durante el transporte internacional",
                "Tamaño medio (170-350g), ideal para el consumo individual y familiar",
                "Semilla pequeña en proporción a la pulpa, ofreciendo mayor rendimiento"
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

const EspecificacionesHass = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const especificaciones = [
    {
      icon: <BarChart size={24} />,
      title: "Calibres Disponibles",
      description: "12, 14, 16, 18, 20, 22, 24 (número de frutos por caja de 4kg)"
    },
    {
      icon: <Calendar size={24} />,
      title: "Temporada Principal",
      description: "Marzo a Septiembre, con disponibilidad extendida gracias a nuestras diferentes zonas de cultivo"
    },
    {
      icon: <Truck size={24} />,
      title: "Embalaje para Exportación",
      description: "Cajas de 4kg y 10kg, con opciones de embalaje personalizado según requerimientos del cliente"
    },
    {
      icon: <FileCheck size={24} />,
      title: "Certificaciones",
      description: "Global GAP, HACCP, BRC Food Safety, y certificaciones específicas según mercado de destino"
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
            Ofrecemos aguacates Hass que cumplen con los más estrictos estándares
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
            Tabla de Calibres - Aguacate Hass
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
                  <td className="border border-gray-200 px-4 py-2">12</td>
                  <td className="border border-gray-200 px-4 py-2">330-350g</td>
                  <td className="border border-gray-200 px-4 py-2">12</td>
                  <td className="border border-gray-200 px-4 py-2">EE.UU., Europa</td>
                </tr>
                <tr className="bg-[#F9F6F0]/50">
                  <td className="border border-gray-200 px-4 py-2">14</td>
                  <td className="border border-gray-200 px-4 py-2">280-330g</td>
                  <td className="border border-gray-200 px-4 py-2">14</td>
                  <td className="border border-gray-200 px-4 py-2">EE.UU., Europa, Asia</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">16</td>
                  <td className="border border-gray-200 px-4 py-2">250-280g</td>
                  <td className="border border-gray-200 px-4 py-2">16</td>
                  <td className="border border-gray-200 px-4 py-2">Europa, Asia</td>
                </tr>
                <tr className="bg-[#F9F6F0]/50">
                  <td className="border border-gray-200 px-4 py-2">18</td>
                  <td className="border border-gray-200 px-4 py-2">220-250g</td>
                  <td className="border border-gray-200 px-4 py-2">18</td>
                  <td className="border border-gray-200 px-4 py-2">Europa, Asia</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2">200-220g</td>
                  <td className="border border-gray-200 px-4 py-2">20</td>
                  <td className="border border-gray-200 px-4 py-2">Europa, Asia, Medio Oriente</td>
                </tr>
                <tr className="bg-[#F9F6F0]/50">
                  <td className="border border-gray-200 px-4 py-2">22</td>
                  <td className="border border-gray-200 px-4 py-2">180-200g</td>
                  <td className="border border-gray-200 px-4 py-2">22</td>
                  <td className="border border-gray-200 px-4 py-2">Europa, Medio Oriente</td>
                </tr>
                <tr>
                  <td className="border border-gray-200 px-4 py-2">24</td>
                  <td className="border border-gray-200 px-4 py-2">170-180g</td>
                  <td className="border border-gray-200 px-4 py-2">24</td>
                  <td className="border border-gray-200 px-4 py-2">Medio Oriente, Mercados locales</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactoHass = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-[#2D5C34] text-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto relative">
              <img
                src="/images/exportacion-contacto.jpg"
                alt="Contacto exportación"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="p-8 md:p-12">
              <motion.h2
                className="font-display text-2xl md:text-3xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                ¿Interesado en importar nuestro Aguacate Hass?
              </motion.h2>

              <motion.p
                className="font-body text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Nuestro equipo especializado en exportación está listo para atender tus consultas
                sobre nuestro aguacate Hass premium. Podemos proporcionarte información detallada
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
                  onClick={() => window.open("https://wa.link/77jjyl", "_blank")}
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
          </div>
        </div>
      </div>
    </section>
  );
};

const HassExportacion = () => {
  // Schema.org para la página de Hass
  const hassSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Aguacate Hass Premium para Exportación",
    "image": "https://inca-fields-ghs.vercel.app/images/Aguacate-Hass-Premium.webp",
    "description": "Aguacate Hass premium cultivado en los valles andinos de Perú, ideal para exportación por su sabor excepcional y excelente vida post-cosecha.",
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
        title="Aguacate Hass Premium para Exportación"
        description="Exportamos aguacate Hass premium desde Perú. Descubre sus características, especificaciones técnicas y calibres disponibles para importación internacional."
        keywords="aguacate hass exportación, hass premium, exportador hass Perú, proveedor aguacate hass, importar aguacate hass"
        url="https://inca-fields-ghs.vercel.app/exportacion/hass"
        type="product"
        schema={hassSchema}
      />
      <Header />
      <main>
        <HassHero />

        {/* Breadcrumbs */}
        <div className="bg-[#F9F6F0] border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <EnhancedBreadcrumb
              items={[
                { label: "Inicio", url: "/" },
                { label: "Exportación", url: "/exportacion" },
                { label: "Aguacate Hass", url: "/exportacion/hass", isCurrent: true }
              ]}
            />
          </div>
        </div>

        <CaracteristicasHass />
        <EspecificacionesHass />
        <ProductFAQ
          faqs={[
            {
              question: "¿Cuáles son los calibres disponibles para el aguacate Hass?",
              answer: "Ofrecemos aguacates Hass en calibres 12, 14, 16, 18, 20, 22 y 24, que corresponden al número de frutos por caja de 4kg. Los calibres más grandes (12-16) son preferidos en mercados como EE.UU. y Europa, mientras que los calibres medianos (18-22) tienen gran demanda en Asia."
            },
            {
              question: "¿Cuál es la temporada principal de exportación del aguacate Hass?",
              answer: "La temporada principal de exportación del aguacate Hass peruano es de marzo a septiembre, con disponibilidad extendida gracias a nuestras diferentes zonas de cultivo en los valles andinos. Esto nos permite ofrecer suministro cuando otros países productores tienen baja disponibilidad."
            },
            {
              question: "¿Qué certificaciones tienen sus aguacates Hass?",
              answer: "Nuestros aguacates Hass cuentan con certificaciones internacionales como Global G.A.P., HACCP, BRC Food Safety, y según el mercado de destino, certificaciones específicas adicionales. Todas nuestras certificaciones garantizan la calidad, seguridad alimentaria y sostenibilidad de nuestros procesos."
            },
            {
              question: "¿Cuál es el contenido de aceite del aguacate Hass que exportan?",
              answer: "Nuestros aguacates Hass tienen un contenido de aceite entre 18-22%, lo que les confiere su característico sabor cremoso y textura suave. Este porcentaje es ideal para el consumo y garantiza una excelente experiencia gustativa."
            },
            {
              question: "¿Cuánto tiempo de vida post-cosecha tiene el aguacate Hass?",
              answer: "El aguacate Hass tiene una excelente vida post-cosecha de aproximadamente 4-6 semanas cuando se mantiene en condiciones óptimas de refrigeración (5-7°C). Esto permite su transporte marítimo a mercados internacionales manteniendo su calidad y frescura."
            }
          ]}
        />
        <ContactoHass />
      </main>
      <Footer />
    </div>
  );
};

export default HassExportacion;
