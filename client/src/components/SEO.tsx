import { Helmet } from 'react-helmet';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  schema?: object;
  children?: React.ReactNode;
}

/**
 * Componente SEO para gestionar metadatos en todas las páginas
 * 
 * @param title - Título de la página (se añadirá "| Inca Fields Premium" automáticamente)
 * @param description - Descripción meta de la página (150-160 caracteres)
 * @param keywords - Palabras clave separadas por comas
 * @param image - URL de la imagen para compartir en redes sociales
 * @param url - URL canónica de la página
 * @param type - Tipo de contenido (website, article, product)
 * @param schema - Objeto JSON-LD para Schema.org
 * @param children - Elementos adicionales para incluir en el head
 */
const SEO = ({
  title,
  description,
  keywords,
  image = 'https://inca-fields-ghs.vercel.app/images/image-hero-1.webp',
  url = 'https://inca-fields-ghs.vercel.app',
  type = 'website',
  schema,
  children
}: SEOProps) => {
  // Asegurarse de que el título incluya la marca
  const fullTitle = title.includes('Inca Fields') 
    ? title 
    : `${title} | Inca Fields Premium`;
  
  // URL completa para la imagen
  const fullImageUrl = image.startsWith('http') 
    ? image 
    : `https://inca-fields-ghs.vercel.app${image}`;

  return (
    <Helmet>
      {/* Metadatos básicos */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Schema.org / JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
      
      {/* Elementos adicionales */}
      {children}
    </Helmet>
  );
};

export default SEO;
