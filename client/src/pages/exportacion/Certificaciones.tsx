import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle, ShieldCheck, Award, Leaf, FileCheck, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EnhancedBreadcrumb from '@/components/EnhancedBreadcrumb';
import SEO from '@/components/SEO';

const CertificacionesHero = () => {
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
              ESTÁNDARES INTERNACIONALES
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Certificaciones y <span className="text-[#C6A96C]">Calidad</span>
          </motion.h1>

          <motion.p
            className="font-body text-white/80 text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Nuestros aguacates premium cumplen con los más estrictos estándares internacionales
            de calidad, seguridad alimentaria y sostenibilidad. Descubre las certificaciones
            que respaldan nuestra excelencia y compromiso.
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
              Solicitar información
            </Button>
            <Link href="/exportacion">
              <Button variant="outline" className="border-white text-white bg-white/20 hover:bg-white/30 px-6 py-3">
                Volver a Exportación
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CertificacionesGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certificaciones = [
    {
      icon: <img src="/images/global-gap.png" alt="Global GAP" className="h-16 w-auto mx-auto mb-4" />,
      title: "Global G.A.P.",
      description: "Certificación internacional que garantiza buenas prácticas agrícolas, seguridad alimentaria y trazabilidad en toda la cadena de producción.",
      beneficios: [
        "Acceso a mercados internacionales exigentes",
        "Garantía de cumplimiento de estándares de seguridad alimentaria",
        "Trazabilidad completa del producto"
      ]
    },
    {
      icon: <img src="/images/haccp.png" alt="HACCP" className="h-16 w-auto mx-auto mb-4" />,
      title: "HACCP",
      description: "Sistema de Análisis de Peligros y Puntos Críticos de Control que garantiza la inocuidad alimentaria en todas las etapas del proceso.",
      beneficios: [
        "Identificación y control de riesgos alimentarios",
        "Cumplimiento de requisitos legales internacionales",
        "Mejora continua de la seguridad alimentaria"
      ]
    },
    {
      icon: <img src="/images/brc.png" alt="BRC Food Safety" className="h-16 w-auto mx-auto mb-4" />,
      title: "BRC Food Safety",
      description: "Estándar global de seguridad alimentaria que certifica las mejores prácticas en la industria alimentaria y garantiza la protección del consumidor.",
      beneficios: [
        "Reconocimiento internacional de calidad",
        "Cumplimiento de requisitos de grandes cadenas de distribución",
        "Sistemas de gestión de calidad verificados"
      ]
    },
    {
      icon: <img src="/images/organic.png" alt="Certificación Orgánica" className="h-16 w-auto mx-auto mb-4" />,
      title: "Certificación Orgánica",
      description: "Garantiza que nuestros procesos de cultivo cumplen con los estándares internacionales de agricultura orgánica, sin uso de pesticidas químicos.",
      beneficios: [
        "Acceso a mercados de productos orgánicos",
        "Garantía de cultivo sin pesticidas químicos",
        "Respeto por el medio ambiente y biodiversidad"
      ]
    },
    {
      icon: <img src="/images/fair-trade.png" alt="Fair Trade" className="h-16 w-auto mx-auto mb-4" />,
      title: "Fair Trade",
      description: "Certificación que garantiza prácticas comerciales justas, condiciones laborales adecuadas y desarrollo sostenible de las comunidades productoras.",
      beneficios: [
        "Comercio justo y precios estables",
        "Mejores condiciones laborales para trabajadores",
        "Desarrollo de comunidades locales"
      ]
    },
    {
      icon: <img src="/images/rainforest-alliance.png" alt="Rainforest Alliance" className="h-16 w-auto mx-auto mb-4" />,
      title: "Rainforest Alliance",
      description: "Certifica que nuestros cultivos siguen prácticas sostenibles que protegen los ecosistemas, la vida silvestre y las comunidades locales.",
      beneficios: [
        "Conservación de biodiversidad",
        "Prácticas agrícolas sostenibles",
        "Mejora de medios de vida de comunidades"
      ]
    }
  ];

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
            Nuestras Certificaciones
          </motion.h2>

          <motion.p
            className="font-body text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contamos con las certificaciones más reconocidas a nivel internacional,
            que avalan la calidad, seguridad y sostenibilidad de nuestros aguacates premium.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificaciones.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="mb-4">
                {React.cloneElement(cert.icon as React.ReactElement, { loading: "lazy" })}
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-[#2D5C34] text-center">{cert.title}</h3>
              <p className="font-body text-gray-600 mb-4 text-center">{cert.description}</p>

              <div className="border-t border-gray-100 pt-4 mt-4">
                <h4 className="font-display font-bold text-[#C6A96C] mb-2">Beneficios:</h4>
                <ul className="space-y-2">
                  {cert.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-[#2D5C34] mr-2 mt-1 flex-shrink-0" size={16} />
                      <span className="font-body text-gray-700 text-sm">{beneficio}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ControlCalidad = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Nuestro Sistema de Control de Calidad
          </motion.h2>

          <motion.p
            className="font-body text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Implementamos un riguroso sistema de control de calidad en cada etapa del proceso,
            desde el cultivo hasta la exportación, para garantizar que solo los mejores
            aguacates lleguen a nuestros clientes internacionales.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img
              src="/images/control-calidad.jpg"
              alt="Control de Calidad de Aguacates Premium"
              className="w-full h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </motion.div>

          <div>
            <motion.h3
              className="font-display text-2xl font-bold mb-6 text-[#2D5C34]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Pilares de nuestro sistema de calidad
            </motion.h3>

            <div className="space-y-6">
              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <div className="bg-[#2D5C34] p-2 rounded-full text-white mr-4 flex-shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2 text-[#2D5C34]">Laboratorio Propio</h4>
                  <p className="font-body text-gray-600">
                    Contamos con un laboratorio especializado donde realizamos análisis de madurez,
                    contenido de aceite, residuos y otros parámetros críticos para garantizar la
                    calidad de nuestros aguacates.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <div className="bg-[#2D5C34] p-2 rounded-full text-white mr-4 flex-shrink-0">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2 text-[#2D5C34]">Personal Especializado</h4>
                  <p className="font-body text-gray-600">
                    Nuestro equipo de control de calidad está formado por profesionales altamente
                    capacitados y con amplia experiencia en la industria agroexportadora, que
                    supervisan cada etapa del proceso.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <div className="bg-[#2D5C34] p-2 rounded-full text-white mr-4 flex-shrink-0">
                  <Leaf size={20} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2 text-[#2D5C34]">Monitoreo en Campo</h4>
                  <p className="font-body text-gray-600">
                    Realizamos un seguimiento constante de nuestros cultivos, monitoreando factores
                    como riego, nutrición, control de plagas y enfermedades, para asegurar la
                    calidad desde el origen.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <div className="bg-[#2D5C34] p-2 rounded-full text-white mr-4 flex-shrink-0">
                  <FileCheck size={20} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2 text-[#2D5C34]">Auditorías Internas y Externas</h4>
                  <p className="font-body text-gray-600">
                    Realizamos auditorías internas periódicas y nos sometemos a auditorías externas
                    por parte de organismos certificadores reconocidos internacionalmente, para
                    garantizar el cumplimiento de todos los estándares.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.3, delay: 0.8 }}
              >
                <div className="bg-[#2D5C34] p-2 rounded-full text-white mr-4 flex-shrink-0">
                  <Globe size={20} />
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold mb-2 text-[#2D5C34]">Adaptación a Requisitos Específicos</h4>
                  <p className="font-body text-gray-600">
                    Adaptamos nuestros controles de calidad a los requisitos específicos de cada
                    mercado de destino, cumpliendo con las normativas particulares de cada país
                    importador.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactoCertificaciones = () => {
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
                ¿Necesitas información específica sobre nuestras certificaciones?
              </motion.h2>

              <motion.p
                className="font-body text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Nuestro equipo está disponible para proporcionarte información detallada sobre
                nuestras certificaciones, procesos de control de calidad y cómo estos se adaptan
                a los requisitos específicos de tu mercado.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Button
                  className="bg-[#C6A96C] hover:bg-[#C6A96C]/90 text-white"
                  onClick={() => window.open("https://wa.link/reqscn", "_blank")}
                >
                  Solicitar información
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Link href="/exportacion">
                  <Button variant="outline" className="border-white text-white bg-white/20 hover:bg-white/30">
                    Volver a Exportación
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Certificaciones = () => {
  // Schema.org para la página de certificaciones
  const certificacionesSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Certificaciones y Calidad de Aguacates Premium",
    "description": "Información detallada sobre las certificaciones internacionales y sistemas de control de calidad que respaldan nuestros aguacates premium de exportación.",
    "image": "https://inca-fields-ghs.vercel.app/images/control-calidad.jpg",
    "author": {
      "@type": "Organization",
      "name": "Inca Fields Premium"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Inca Fields Premium",
      "logo": {
        "@type": "ImageObject",
        "url": "https://inca-fields-ghs.vercel.app/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://inca-fields-ghs.vercel.app/exportacion/certificaciones"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Certificaciones y Calidad de Aguacates Premium"
        description="Descubre las certificaciones internacionales y sistemas de control de calidad que respaldan nuestros aguacates premium de exportación. Global GAP, HACCP, BRC y más."
        keywords="certificaciones aguacates, Global GAP, HACCP, BRC Food Safety, control calidad aguacates, certificación exportación"
        url="https://inca-fields-ghs.vercel.app/exportacion/certificaciones"
        type="website"
        schema={certificacionesSchema}
      />
      <Header />
      <main>
        <CertificacionesHero />

        {/* Breadcrumbs */}
        <div className="bg-[#F9F6F0] border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <EnhancedBreadcrumb
              items={[
                { label: "Inicio", url: "/" },
                { label: "Exportación", url: "/exportacion" },
                { label: "Certificaciones y Calidad", url: "/exportacion/certificaciones", isCurrent: true }
              ]}
            />
          </div>
        </div>

        <CertificacionesGrid />
        <ControlCalidad />
        <ContactoCertificaciones />
      </main>
      <Footer />
    </div>
  );
};

export default Certificaciones;
