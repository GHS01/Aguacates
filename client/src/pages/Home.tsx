import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

interface HomeProps {
  section?: string;
}

const Home = ({ section }: HomeProps) => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Scroll to section if provided
    if (section) {
      setTimeout(() => {
        const element = document.getElementById(section);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [section]);

  // Schema.org para la página de inicio
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Inca Fields Premium",
    "url": "https://inca-fields-ghs.vercel.app/",
    "logo": "https://inca-fields-ghs.vercel.app/logo.png",
    "description": "Productores y exportadores de aguacates premium cultivados en los valles andinos de Perú.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Blv de la Literatura 164",
      "addressLocality": "Lima",
      "addressRegion": "Lima",
      "addressCountry": "Perú"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+51 998 148 917",
      "contactType": "customer service",
      "email": "peru.aguacates@gmail.com"
    },
    "sameAs": [
      "https://inca-fields-ghs.vercel.app/"
    ]
  };

  // Schema.org para la página Nosotros
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre Inca Fields Premium",
    "url": "https://inca-fields-ghs.vercel.app/nosotros",
    "mainEntity": {
      "@type": "Organization",
      "name": "Inca Fields Premium",
      "description": "Fundada en 2010, Inca Fields nació de la pasión por preservar las tradiciones agrícolas ancestrales del Perú, combinándolas con las más avanzadas técnicas de cultivo sostenible.",
      "foundingDate": "2010",
      "foundingLocation": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "Perú"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Blv de la Literatura 164",
        "addressLocality": "Lima",
        "addressRegion": "Lima",
        "addressCountry": "Perú"
      }
    }
  };

  // Schema.org para la página de contacto
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto | Inca Fields Premium",
    "url": "https://inca-fields-ghs.vercel.app/contacto",
    "mainEntity": {
      "@type": "Organization",
      "name": "Inca Fields Premium",
      "description": "Productores y exportadores de aguacates premium cultivados en los valles andinos de Perú.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Av. Blv de la Literatura 164",
        "addressLocality": "Lima",
        "addressRegion": "Lima",
        "addressCountry": "Perú"
      },
      "telephone": "+51 998 148 917",
      "email": "peru.aguacates@gmail.com",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  };

  // Schema.org para la página de beneficios
  const benefitsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Beneficios del Aguacate | Inca Fields Premium",
    "url": "https://inca-fields-ghs.vercel.app/beneficios",
    "description": "Descubre los beneficios nutricionales y para la salud de nuestros aguacates premium. Ricos en grasas saludables, potasio y vitaminas esenciales.",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Grasas Saludables",
          "description": "Rico en grasas monoinsaturadas que benefician la salud cardiovascular."
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Potasio",
          "description": "Contiene más potasio que los plátanos, ayudando a regular la presión arterial."
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Fibra",
          "description": "Alto contenido de fibra que favorece la digestión y la salud intestinal."
        }
      ]
    }
  };

  // Metadatos específicos según la sección
  let seoTitle = "Aguacates Premium de Exportación";
  let seoDescription = "Inca Fields Premium ofrece los mejores aguacates Hass y Fuerte cultivados en los valles andinos de Perú. Calidad premium para exportación y consumo local.";
  let seoKeywords = "aguacates premium, aguacate hass, aguacate fuerte, exportación aguacates, aguacates Perú, Inca Fields";
  let seoUrl = "https://inca-fields-ghs.vercel.app/";
  let seoSchema = homeSchema;

  // Cambiar metadatos si estamos en la sección "about" (Nosotros)
  if (section === "about") {
    seoTitle = "Nuestra Historia y Compromiso | Inca Fields Premium";
    seoDescription = "Descubre la historia de Inca Fields Premium, nuestro compromiso con la sostenibilidad y las prácticas agrícolas que nos distinguen en la producción de aguacates de alta calidad.";
    seoKeywords = "historia Inca Fields, aguacates sostenibles, producción ética, cultivo aguacates Perú, comercio justo";
    seoUrl = "https://inca-fields-ghs.vercel.app/nosotros";
    seoSchema = aboutSchema;
  }
  // Metadatos para la sección "products" (Productos)
  else if (section === "products") {
    seoTitle = "Productos Premium de Aguacate | Inca Fields";
    seoDescription = "Explora nuestra selección de aguacates premium: Hass, Fuerte y Orgánico. Cultivados en los valles andinos de Perú con los más altos estándares de calidad.";
    seoKeywords = "aguacate hass, aguacate fuerte, aguacate orgánico, productos premium, aguacates Perú";
    seoUrl = "https://inca-fields-ghs.vercel.app/productos";
    seoSchema = homeSchema;
  }
  // Metadatos para la sección "contact" (Contacto)
  else if (section === "contact") {
    seoTitle = "Contacta con Nosotros | Inca Fields Premium";
    seoDescription = "¿Interesado en nuestros aguacates premium? Contacta con nuestro equipo especializado. Estamos disponibles para responder tus preguntas y atender tus pedidos.";
    seoKeywords = "contacto Inca Fields, contactar exportador aguacates, pedidos aguacate premium, aguacates Perú contacto";
    seoUrl = "https://inca-fields-ghs.vercel.app/contacto";
    seoSchema = contactSchema;
  }
  // Metadatos para la sección "benefits" (Beneficios)
  else if (section === "benefits") {
    seoTitle = "Beneficios del Aguacate para la Salud | Inca Fields";
    seoDescription = "Descubre los beneficios nutricionales y para la salud de nuestros aguacates premium. Ricos en grasas saludables, potasio y vitaminas esenciales.";
    seoKeywords = "beneficios aguacate, propiedades aguacate, aguacate salud, nutrición aguacate, grasas saludables";
    seoUrl = "https://inca-fields-ghs.vercel.app/beneficios";
    seoSchema = benefitsSchema;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        url={seoUrl}
        schema={seoSchema}
      />
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Benefits />
        <Testimonials />
        <Gallery />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
