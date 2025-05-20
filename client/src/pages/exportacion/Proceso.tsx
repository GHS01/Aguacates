import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Leaf, Truck, FileCheck, PackageCheck, BarChart4, ShieldCheck, Ship, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EnhancedBreadcrumb from '@/components/EnhancedBreadcrumb';
import ProductFAQ from '@/components/ProductFAQ';
import SEO from '@/components/SEO';

const ProcesoHero = () => {
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
              CALIDAD GARANTIZADA
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nuestro Proceso de <span className="text-[#C6A96C]">Exportación</span>
          </motion.h1>

          <motion.p
            className="font-body text-white/80 text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Cada etapa de nuestro proceso está diseñada para garantizar que los aguacates
            lleguen a su destino en condiciones óptimas, preservando su calidad y frescura.
            Descubre cómo llevamos nuestros aguacates premium desde los valles andinos
            hasta los mercados internacionales.
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
            <Link href="/exportacion/certificaciones">
              <Button variant="outline" className="border-white text-white bg-white/20 hover:bg-white/30 px-6 py-3">
                Ver certificaciones
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProcesoTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pasos = [
    {
      icon: <Leaf size={24} />,
      title: "Cultivo y Cosecha",
      description: "Nuestros aguacates son cultivados en los valles andinos de Perú, bajo prácticas sostenibles y cuidadosamente cosechados en su punto óptimo de madurez para exportación.",
      delay: 0.1
    },
    {
      icon: <PackageCheck size={24} />,
      title: "Selección y Clasificación",
      description: "Cada aguacate pasa por un riguroso proceso de selección manual y automatizada, donde se clasifican por tamaño, calidad y grado de madurez.",
      delay: 0.2
    },
    {
      icon: <FileCheck size={24} />,
      title: "Control de Calidad",
      description: "Realizamos múltiples controles de calidad, incluyendo análisis de residuos, pruebas de maduración y verificación de estándares internacionales.",
      delay: 0.3
    },
    {
      icon: <BarChart4 size={24} />,
      title: "Empaque y Etiquetado",
      description: "Los aguacates son empacados en cajas especiales diseñadas para mantener la ventilación adecuada y protegerlos durante el transporte, con etiquetado según requisitos del mercado destino.",
      delay: 0.4
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Pre-enfriamiento y Almacenamiento",
      description: "Utilizamos tecnología de pre-enfriamiento para reducir la temperatura de campo y extender la vida útil, almacenando en cámaras frigoríficas con temperatura y humedad controladas.",
      delay: 0.5
    },
    {
      icon: <Truck size={24} />,
      title: "Transporte Terrestre",
      description: "Transportamos los aguacates en camiones refrigerados desde nuestras instalaciones hasta el puerto de embarque, manteniendo la cadena de frío.",
      delay: 0.6
    },
    {
      icon: <Ship size={24} />,
      title: "Logística Internacional",
      description: "Gestionamos el embarque en contenedores refrigerados y todos los trámites de exportación, asegurando que la documentación cumpla con los requisitos del país importador.",
      delay: 0.7
    },
    {
      icon: <Globe size={24} />,
      title: "Distribución Internacional",
      description: "Trabajamos con distribuidores confiables en los mercados de destino para asegurar que nuestros aguacates lleguen en condiciones óptimas a los consumidores finales.",
      delay: 0.8
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
            Del Campo a la Mesa: Nuestro Proceso
          </motion.h2>

          <motion.p
            className="font-body text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Cada etapa de nuestro proceso está diseñada para garantizar la máxima calidad,
            frescura y cumplimiento de los estándares internacionales más exigentes.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Línea vertical de la timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2D5C34]/20 hidden md:block"></div>

          {pasos.map((paso, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center mb-12 md:mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: paso.delay }}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-[#2D5C34]">
                  <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : ''}`}>
                    <div className="text-[#C6A96C] mr-3">{paso.icon}</div>
                    <h3 className="font-display text-xl font-bold text-[#2D5C34]">{paso.title}</h3>
                  </div>
                  <p className="font-body text-gray-600">{paso.description}</p>
                </div>
              </div>

              {/* Punto central en la línea de tiempo */}
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-[#2D5C34] border-4 border-white shadow absolute left-1/2 transform -translate-x-1/2">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VentajasLogisticas = () => {
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
            Nuestras Ventajas Logísticas
          </motion.h2>

          <motion.p
            className="font-body text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contamos con una infraestructura logística optimizada y alianzas estratégicas
            que nos permiten ofrecer un servicio de exportación eficiente y confiable.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-[#2D5C34]">Ubicación Estratégica</h3>
            <p className="font-body text-gray-600">
              Nuestras instalaciones están estratégicamente ubicadas cerca de las zonas de cultivo
              y con fácil acceso a los principales puertos de exportación, minimizando los tiempos
              de transporte y preservando la frescura de los aguacates.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-[#2D5C34]">Tecnología de Cadena de Frío</h3>
            <p className="font-body text-gray-600">
              Implementamos tecnología avanzada de cadena de frío en todas las etapas del proceso,
              desde el pre-enfriamiento hasta el transporte internacional, garantizando que los
              aguacates mantengan su calidad durante todo el trayecto.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-[#2D5C34]">Alianzas Estratégicas</h3>
            <p className="font-body text-gray-600">
              Trabajamos con operadores logísticos y navieras de primer nivel, lo que nos permite
              ofrecer tarifas competitivas, rutas optimizadas y tiempos de tránsito reducidos
              a los principales mercados internacionales.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-[#2D5C34]">Trazabilidad Completa</h3>
            <p className="font-body text-gray-600">
              Implementamos sistemas de trazabilidad que permiten seguir el recorrido de cada lote
              desde el campo hasta el destino final, garantizando transparencia y facilitando
              la resolución rápida de cualquier incidencia.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-[#2D5C34]">Gestión Aduanera Especializada</h3>
            <p className="font-body text-gray-600">
              Contamos con un equipo especializado en comercio internacional que gestiona
              eficientemente todos los trámites aduaneros y documentación requerida,
              asegurando procesos ágiles y cumplimiento normativo.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="font-display text-xl font-bold mb-4 text-[#2D5C34]">Flexibilidad Logística</h3>
            <p className="font-body text-gray-600">
              Ofrecemos soluciones logísticas personalizadas según los requerimientos específicos
              de cada cliente y mercado, adaptándonos a diferentes volúmenes, frecuencias de envío
              y requisitos especiales.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ContactoProceso = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 md:py-24" ref={ref}>
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
                ¿Necesitas más información sobre nuestro proceso?
              </motion.h2>

              <motion.p
                className="font-body text-white/80 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Nuestro equipo especializado está disponible para brindarte información detallada
                sobre nuestro proceso de exportación, requisitos específicos para tu mercado,
                documentación necesaria y cualquier otra consulta que puedas tener.
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
                  Contactar ahora
                  <ArrowRight size={16} className="ml-2" />
                </Button>
                <Link href="/exportacion/certificaciones">
                  <Button variant="outline" className="border-white text-white bg-white/20 hover:bg-white/30">
                    Ver certificaciones
                  </Button>
                </Link>
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

const ProcesoExportacion = () => {
  // Schema.org para la página de proceso de exportación
  const procesoSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Proceso de Exportación de Aguacates Premium",
    "description": "Proceso detallado de exportación de aguacates Hass y Fuerte desde Perú, desde el cultivo hasta la distribución internacional.",
    "step": [
      {
        "@type": "HowToStep",
        "name": "Cultivo y Cosecha",
        "text": "Nuestros aguacates son cultivados en los valles andinos de Perú, bajo prácticas sostenibles y cuidadosamente cosechados en su punto óptimo de madurez para exportación."
      },
      {
        "@type": "HowToStep",
        "name": "Selección y Clasificación",
        "text": "Cada aguacate pasa por un riguroso proceso de selección manual y automatizada, donde se clasifican por tamaño, calidad y grado de madurez."
      },
      {
        "@type": "HowToStep",
        "name": "Control de Calidad",
        "text": "Realizamos múltiples controles de calidad, incluyendo análisis de residuos, pruebas de maduración y verificación de estándares internacionales."
      },
      {
        "@type": "HowToStep",
        "name": "Empaque y Etiquetado",
        "text": "Los aguacates son empacados en cajas especiales diseñadas para mantener la ventilación adecuada y protegerlos durante el transporte."
      },
      {
        "@type": "HowToStep",
        "name": "Logística Internacional",
        "text": "Gestionamos el embarque en contenedores refrigerados y todos los trámites de exportación, asegurando que la documentación cumpla con los requisitos del país importador."
      }
    ],
    "provider": {
      "@type": "Organization",
      "name": "Inca Fields Premium",
      "url": "https://inca-fields-ghs.vercel.app/"
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Proceso de Exportación de Aguacates Premium"
        description="Descubre nuestro riguroso proceso de exportación de aguacates premium, desde el cultivo en los valles andinos hasta la distribución internacional, garantizando máxima calidad y frescura."
        keywords="proceso exportación aguacates, logística aguacates, cadena de frío, exportación aguacates Perú, trazabilidad aguacates"
        url="https://inca-fields-ghs.vercel.app/exportacion/proceso"
        type="website"
        schema={procesoSchema}
      />
      <Header />
      <main>
        <ProcesoHero />

        {/* Breadcrumbs */}
        <div className="bg-[#F9F6F0] border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <EnhancedBreadcrumb
              items={[
                { label: "Inicio", url: "/" },
                { label: "Exportación", url: "/exportacion" },
                { label: "Proceso de Exportación", url: "/exportacion/proceso", isCurrent: true }
              ]}
            />
          </div>
        </div>

        <ProcesoTimeline />
        <VentajasLogisticas />
        <ProductFAQ
          title="Preguntas Frecuentes sobre Exportación"
          faqs={[
            {
              question: "¿Cuáles son los principales mercados a los que exportan aguacates?",
              answer: "Exportamos principalmente a Europa (España, Francia, Alemania, Países Bajos), Asia (China, Japón, Corea del Sur), Norteamérica (Estados Unidos, Canadá) y Medio Oriente (Emiratos Árabes Unidos, Qatar). Cada mercado tiene requisitos específicos que cumplimos rigurosamente."
            },
            {
              question: "¿Qué documentación se requiere para la exportación de aguacates?",
              answer: "La documentación estándar incluye: certificado fitosanitario, certificado de origen, factura comercial, packing list, bill of lading o airway bill, y certificados de calidad. Dependiendo del país de destino, pueden requerirse certificados adicionales específicos."
            },
            {
              question: "¿Cómo garantizan la cadena de frío durante el transporte?",
              answer: "Implementamos un sistema integral de cadena de frío que incluye pre-enfriamiento inmediato tras la cosecha, almacenamiento en cámaras frigoríficas a temperatura controlada (5-7°C), transporte en camiones refrigerados y contenedores marítimos con atmósfera controlada. Monitoreamos la temperatura constantemente con dispositivos de registro."
            },
            {
              question: "¿Cuál es el tiempo promedio de tránsito hasta los mercados internacionales?",
              answer: "El tiempo de tránsito varía según el destino: Europa (18-22 días), Asia (25-32 días), Norteamérica (12-18 días) y Medio Oriente (22-28 días). Nuestro sistema de logística está optimizado para garantizar que los aguacates lleguen en condiciones óptimas a pesar de estos tiempos de tránsito."
            },
            {
              question: "¿Ofrecen opciones de embalaje personalizado?",
              answer: "Sí, ofrecemos opciones de embalaje personalizado según los requerimientos del cliente y del mercado de destino. Trabajamos con cajas de 4kg y 10kg como estándar, pero podemos adaptar el packaging, incluyendo etiquetado específico, cajas con marca privada y diferentes presentaciones según necesidades."
            }
          ]}
        />
        <ContactoProceso />
      </main>
      <Footer />
    </div>
  );
};

export default ProcesoExportacion;
