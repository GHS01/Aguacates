import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, Globe, Award, TrendingUp, Ship, FileCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';

const ExportacionHero = () => {
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
              CALIDAD PREMIUM
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Exportación de Aguacates <span className="text-[#C6A96C]">Premium</span>
          </motion.h1>

          <motion.p
            className="font-body text-white/80 text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desde los valles andinos de Perú hasta el mundo. Ofrecemos aguacates Hass y Fuerte
            de la más alta calidad, cultivados con prácticas sostenibles y exportados
            bajo los más estrictos estándares internacionales.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              className="bg-[#C6A96C] hover:bg-[#C6A96C]/90 text-white px-6 py-3"
              onClick={() => window.open("https://wa.link/reqscn", "_blank")}
            >
              Hablar con un especialista
            </Button>
            <Link href="/exportacion/proceso">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3 bg-white/20">
                Conocer nuestro proceso
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VentajasExportacion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ventajas = [
    {
      icon: <Globe size={24} />,
      title: "Alcance Global",
      description: "Exportamos a los principales mercados internacionales con una logística eficiente y confiable."
    },
    {
      icon: <Award size={24} />,
      title: "Calidad Certificada",
      description: "Nuestros aguacates cumplen con los más altos estándares internacionales de calidad y seguridad alimentaria."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Disponibilidad Constante",
      description: "Gracias a nuestra ubicación estratégica, ofrecemos suministro constante durante todo el año."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Trazabilidad Completa",
      description: "Seguimiento detallado desde el cultivo hasta la entrega final, garantizando transparencia en cada etapa."
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
            ¿Por qué elegir nuestros aguacates para exportación?
          </motion.h2>

          <motion.p
            className="font-body text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            En Inca Fields nos especializamos en la producción y exportación de aguacates Hass y Fuerte
            de calidad premium, cultivados en las condiciones ideales de los valles andinos peruanos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ventajas.map((ventaja, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="text-[#C6A96C] mb-4">{ventaja.icon}</div>
              <h3 className="font-display text-xl font-bold mb-3 text-[#2D5C34]">{ventaja.title}</h3>
              <p className="font-body text-gray-600">{ventaja.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VariedadesExportacion = () => {
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
            Nuestras Variedades para Exportación
          </motion.h2>

          <motion.p
            className="font-body text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nos especializamos en las variedades más demandadas a nivel internacional,
            cultivadas con técnicas que maximizan su sabor, textura y vida útil.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/images/Aguacate-Hass-Premium.webp"
              alt="Aguacate Hass Premium para Exportación"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <Badge className="bg-[#C6A96C] hover:bg-[#C6A96C]/90 text-white mb-3">PREMIUM</Badge>
              <h3 className="font-display text-2xl font-bold mb-3 text-[#2D5C34]">Aguacate Hass</h3>
              <p className="font-body text-gray-600 mb-4">
                Nuestra variedad estrella para exportación. Piel rugosa que se oscurece al madurar,
                pulpa cremosa y sabor excepcional. Excelente vida post-cosecha y resistencia al transporte.
              </p>
              <Link href="/exportacion/hass">
                <Button variant="outline" className="border-[#2D5C34] text-[#2D5C34] hover:bg-[#2D5C34] hover:text-white">
                  Más información
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src="/images/Aguacate-fuerte-Premium.webp"
              alt="Aguacate Fuerte Premium para Exportación"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <Badge className="bg-[#C6A96C] hover:bg-[#C6A96C]/90 text-white mb-3">PREMIUM</Badge>
              <h3 className="font-display text-2xl font-bold mb-3 text-[#2D5C34]">Aguacate Fuerte</h3>
              <p className="font-body text-gray-600 mb-4">
                Variedad de piel lisa y verde, con pulpa cremosa y sabor suave. Apreciado por su
                tamaño y bajo contenido de fibra. Ideal para mercados que prefieren aguacates de mayor tamaño.
              </p>
              <Link href="/exportacion/fuerte">
                <Button variant="outline" className="border-[#2D5C34] text-[#2D5C34] hover:bg-[#2D5C34] hover:text-white">
                  Más información
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcesoExportacion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pasos = [
    {
      icon: <CheckCircle size={24} />,
      title: "Selección y Cosecha",
      description: "Recolección cuidadosa en el punto óptimo de madurez para exportación."
    },
    {
      icon: <FileCheck size={24} />,
      title: "Control de Calidad",
      description: "Rigurosos controles que garantizan que solo los mejores frutos sean exportados."
    },
    {
      icon: <Ship size={24} />,
      title: "Logística Internacional",
      description: "Cadena de frío controlada y transporte especializado para preservar la frescura."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#2D5C34] text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            className="font-display text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            Nuestro Proceso de Exportación
          </motion.h2>

          <motion.p
            className="font-body text-white/80 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Cada etapa de nuestro proceso está diseñada para garantizar que los aguacates
            lleguen a su destino en condiciones óptimas, preservando su calidad y frescura.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pasos.map((paso, index) => (
            <motion.div
              key={index}
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="text-[#C6A96C] mb-4">{paso.icon}</div>
              <h3 className="font-display text-xl font-bold mb-3">{paso.title}</h3>
              <p className="font-body text-white/80">{paso.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Link href="/exportacion/proceso">
            <Button className="bg-[#C6A96C] hover:bg-[#C6A96C]/90 text-white">
              Conocer el proceso completo
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const ContactoExportacion = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24 bg-[#F9F6F0]" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <motion.h2
                className="font-display text-2xl md:text-3xl font-bold mb-6 text-[#2D5C34]"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5 }}
              >
                ¿Interesado en importar nuestros aguacates?
              </motion.h2>

              <motion.p
                className="font-body text-gray-600 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Nuestro equipo especializado en exportación está listo para atender tus consultas
                y proporcionarte toda la información que necesitas sobre nuestros productos,
                precios, volúmenes disponibles y condiciones de envío.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  className="bg-[#2D5C34] hover:bg-[#2D5C34]/90 text-white w-full md:w-auto"
                  onClick={() => window.open("https://wa.link/reqscn", "_blank")}
                >
                  Contactar ahora
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </motion.div>
            </div>

            <div className="h-64 lg:h-auto relative">
              <img
                src="/images/exportacion-contacto.jpg"
                alt="Contacto exportación"
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

const Exportacion = () => {
  // Schema.org para la página de exportación
  const exportacionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Exportación de Aguacates Premium",
    "provider": {
      "@type": "Organization",
      "name": "Inca Fields Premium",
      "url": "https://inca-fields-ghs.vercel.app/"
    },
    "description": "Servicio de exportación de aguacates Hass y Fuerte premium cultivados en los valles andinos de Perú.",
    "areaServed": {
      "@type": "Country",
      "name": "Global"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Variedades de Aguacate para Exportación",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Aguacate Hass Premium",
            "description": "Variedad de piel rugosa, pulpa cremosa y excelente vida post-cosecha."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Aguacate Fuerte Premium",
            "description": "Variedad de piel lisa y verde, con pulpa cremosa y sabor suave."
          }
        }
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Exportación de Aguacates Premium"
        description="Exportamos aguacates Hass y Fuerte de la más alta calidad desde Perú. Descubre nuestras variedades premium, proceso de exportación y certificaciones internacionales."
        keywords="exportación aguacates, aguacate hass exportación, aguacate fuerte exportación, exportador aguacates Perú, proveedor aguacates premium"
        url="https://inca-fields-ghs.vercel.app/exportacion"
        type="website"
        schema={exportacionSchema}
      />
      <Header />
      <main>
        <ExportacionHero />
        <VentajasExportacion />
        <VariedadesExportacion />
        <ProcesoExportacion />
        <ContactoExportacion />
      </main>
      <Footer />
    </div>
  );
};

export default Exportacion;
