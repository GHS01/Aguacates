// Datos de ejemplo para el blog
// En una implementación real, estos datos vendrían de una API o CMS

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  readTime: number;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "La diferencia entre aguacates Hass y Fuerte: Guía completa",
    slug: "diferencia-aguacates-hass-fuerte",
    excerpt: "Descubre las características únicas de las dos variedades de aguacate más populares y aprende a elegir la mejor para cada ocasión.",
    content: `
      <p>El aguacate, ese fruto versátil y nutritivo que ha conquistado cocinas de todo el mundo, viene en diferentes variedades, cada una con características únicas. Entre las más populares y comercializadas se encuentran el Hass y el Fuerte, dos tipos que, aunque comparten la esencia del aguacate, presentan diferencias notables que vale la pena conocer.</p>

      <h2>Aguacate Hass: El rey del mercado</h2>

      <p>El aguacate Hass, originario de California, se ha convertido en la variedad más comercializada a nivel mundial, y no es casualidad. Su piel rugosa y oscura, que cambia de verde a púrpura-negro cuando madura, es fácilmente reconocible en los mercados.</p>

      <p>Características principales:</p>
      <ul>
        <li><strong>Tamaño:</strong> Mediano, generalmente entre 200-300 gramos.</li>
        <li><strong>Sabor:</strong> Rico, cremoso y con un ligero toque a nuez.</li>
        <li><strong>Textura:</strong> Pulpa cremosa y suave, con menor contenido de agua que otras variedades.</li>
        <li><strong>Temporada:</strong> Disponible prácticamente todo el año, con picos de producción según la región.</li>
        <li><strong>Maduración:</strong> Su piel cambia de color, lo que facilita identificar su punto óptimo de consumo.</li>
      </ul>

      <p>El Hass es ideal para guacamole, tostadas y ensaladas debido a su textura cremosa y sabor intenso. Además, su piel gruesa lo hace más resistente al transporte y le proporciona una vida útil más larga una vez cosechado.</p>

      <h2>Aguacate Fuerte: El clásico de piel lisa</h2>

      <p>El aguacate Fuerte, originario de México, fue una de las primeras variedades comercializadas a gran escala. Su nombre "Fuerte" (que significa "fuerte" en español) se debe a su resistencia a las heladas, característica que lo hizo popular entre los productores.</p>

      <p>Características principales:</p>
      <ul>
        <li><strong>Tamaño:</strong> Mediano a grande, entre 250-450 gramos.</li>
        <li><strong>Sabor:</strong> Suave, ligeramente dulce y menos intenso que el Hass.</li>
        <li><strong>Textura:</strong> Pulpa más acuosa y menos cremosa.</li>
        <li><strong>Temporada:</strong> Principalmente de otoño a primavera.</li>
        <li><strong>Maduración:</strong> Mantiene su color verde incluso cuando está maduro, lo que puede dificultar identificar su punto óptimo.</li>
      </ul>

      <p>El Fuerte es excelente para consumo directo, en rodajas o cubos, debido a su sabor más suave y su pulpa firme que mantiene mejor la forma al cortarlo.</p>

      <h2>¿Cuál elegir? Depende del uso</h2>

      <p>La elección entre Hass y Fuerte dependerá principalmente del uso que quieras darle:</p>

      <ul>
        <li><strong>Para guacamole:</strong> El Hass es la opción preferida por su cremosidad y sabor intenso.</li>
        <li><strong>Para ensaladas:</strong> El Fuerte mantiene mejor su forma al cortarlo.</li>
        <li><strong>Para untar:</strong> El Hass, sin duda, por su textura suave.</li>
        <li><strong>Para conservar por más tiempo:</strong> El Hass tiene mejor vida útil post-cosecha.</li>
      </ul>

      <h2>Valor nutricional: Ambos son superalimentos</h2>

      <p>Tanto el Hass como el Fuerte son excelentes fuentes de grasas saludables, fibra, vitaminas y minerales. Ambos contienen:</p>

      <ul>
        <li>Ácidos grasos monoinsaturados (grasas saludables para el corazón)</li>
        <li>Vitaminas E, K, C y complejo B</li>
        <li>Potasio (más que los plátanos)</li>
        <li>Fibra dietética</li>
        <li>Antioxidantes</li>
      </ul>

      <p>En Inca Fields Premium, cultivamos ambas variedades siguiendo prácticas sostenibles que maximizan su sabor y valor nutricional. Nuestros aguacates crecen en los valles andinos de Perú, donde las condiciones climáticas y el suelo rico en nutrientes crean el entorno perfecto para obtener frutos de calidad excepcional.</p>

      <h2>Consejos para elegir el aguacate perfecto</h2>

      <p>Independientemente de la variedad que prefieras, estos consejos te ayudarán a elegir aguacates en su punto óptimo:</p>

      <ul>
        <li><strong>Para Hass:</strong> Busca un color oscuro y cede ligeramente a la presión suave.</li>
        <li><strong>Para Fuerte:</strong> Debe ceder ligeramente a la presión, ya que el color no es un indicador fiable de madurez.</li>
        <li>Evita aguacates con manchas oscuras o hundidas en la piel.</li>
        <li>Si necesitas acelerar la maduración, colócalos en una bolsa de papel con una manzana o plátano.</li>
        <li>Para ralentizar la maduración, guárdalos en el refrigerador una vez que estén en su punto.</li>
      </ul>

      <p>En conclusión, tanto el aguacate Hass como el Fuerte tienen sus propias características y ventajas. Conocerlas te permitirá elegir la variedad perfecta para cada ocasión y disfrutar al máximo de este maravilloso superalimento.</p>
    `,
    image: "/images/blog/hass-vs-fuerte.webp",
    date: "2023-11-15",
    readTime: 8,
    author: {
      name: "Carlos Mendoza",
      avatar: "/images/blog/authors/carlos.webp",
      role: "Agrónomo Senior"
    },
    category: "cultivo",
    tags: ["aguacate hass", "aguacate fuerte", "variedades", "comparativa"],
    featured: true
  },
  {
    id: 2,
    title: "5 recetas gourmet con aguacate que debes probar",
    slug: "recetas-gourmet-aguacate",
    excerpt: "Más allá del guacamole: descubre estas deliciosas recetas gourmet que elevarán tu experiencia culinaria con aguacates.",
    content: `
      <p>El aguacate ha trascendido su uso tradicional en guacamole para convertirse en un ingrediente estrella en la cocina gourmet internacional. Su versatilidad, cremosidad y sabor neutro lo convierten en el lienzo perfecto para crear platos sofisticados y llenos de sabor.</p>

      <p>En este artículo, te presentamos cinco recetas gourmet con aguacate que impresionarán a tus invitados y elevarán tu experiencia culinaria.</p>

      <h2>1. Tartar de atún y aguacate con aliño cítrico</h2>

      <p>Esta entrada elegante combina la frescura del atún de calidad sashimi con la cremosidad del aguacate, todo realzado por un aliño cítrico que equilibra perfectamente los sabores.</p>

      <p><strong>Ingredientes:</strong></p>
      <ul>
        <li>200g de atún rojo fresco de calidad sashimi</li>
        <li>1 aguacate Hass maduro</li>
        <li>1 chalota finamente picada</li>
        <li>1 cucharada de aceite de sésamo</li>
        <li>Jugo de 1 limón</li>
        <li>1 cucharada de salsa de soja</li>
        <li>1 cucharadita de wasabi (opcional)</li>
        <li>Cilantro fresco picado</li>
        <li>Semillas de sésamo tostadas</li>
        <li>Sal marina y pimienta negra recién molida</li>
      </ul>

      <p><strong>Preparación:</strong></p>
      <ol>
        <li>Corta el atún en cubos pequeños y reserva en frío.</li>
        <li>Pela y corta el aguacate en cubos similares al tamaño del atún.</li>
        <li>En un bol, mezcla el aceite de sésamo, jugo de limón, salsa de soja y wasabi si lo usas.</li>
        <li>Combina suavemente el atún, aguacate y chalota con el aliño.</li>
        <li>Sazona con sal y pimienta al gusto.</li>
        <li>Sirve usando un aro de emplatado, decora con cilantro y semillas de sésamo.</li>
      </ol>

      <h2>2. Risotto de aguacate y limón con langostinos</h2>

      <p>Este risotto cremoso incorpora el aguacate al final de la cocción para mantener su color y frescura, creando un plato lujoso con sabores mediterráneos.</p>

      <p><strong>Ingredientes:</strong></p>
      <ul>
        <li>300g de arroz Arborio o Carnaroli</li>
        <li>1 aguacate maduro</li>
        <li>12 langostinos grandes, pelados y desvenados</li>
        <li>1 cebolla finamente picada</li>
        <li>2 dientes de ajo picados</li>
        <li>100ml de vino blanco seco</li>
        <li>1L de caldo de pescado caliente</li>
        <li>Ralladura y jugo de 1 limón</li>
        <li>50g de mantequilla fría</li>
        <li>50g de queso parmesano rallado</li>
        <li>Aceite de oliva virgen extra</li>
        <li>Sal y pimienta</li>
        <li>Hojas de albahaca fresca</li>
      </ul>

      <p><strong>Preparación:</strong></p>
      <ol>
        <li>En una sartén aparte, saltea los langostinos con un poco de ajo y reserva.</li>
        <li>En una cazuela, sofríe la cebolla y el ajo restante en aceite de oliva hasta que estén transparentes.</li>
        <li>Añade el arroz y tuesta durante 1-2 minutos.</li>
        <li>Vierte el vino blanco y deja que se evapore.</li>
        <li>Añade el caldo caliente poco a poco, removiendo constantemente.</li>
        <li>Cuando el arroz esté al dente (unos 18 minutos), retira del fuego.</li>
        <li>Incorpora la mantequilla fría, el parmesano, la ralladura y jugo de limón.</li>
        <li>Añade el aguacate en cubos y mezcla suavemente.</li>
        <li>Sirve inmediatamente con los langostinos por encima y decora con albahaca.</li>
      </ol>

      <h2>3. Mousse de chocolate negro y aguacate</h2>

      <p>Este postre sorprendentemente delicioso utiliza el aguacate como base para crear una mousse de chocolate increíblemente cremosa y saludable, sin necesidad de crema o mantequilla.</p>

      <p><strong>Ingredientes:</strong></p>
      <ul>
        <li>2 aguacates maduros</li>
        <li>200g de chocolate negro (mínimo 70% cacao)</li>
        <li>60ml de leche de coco</li>
        <li>3 cucharadas de cacao en polvo sin azúcar</li>
        <li>4 cucharadas de miel o sirope de arce</li>
        <li>1 cucharadita de extracto de vainilla</li>
        <li>1 pizca de sal marina</li>
        <li>Frambuesas frescas y hojas de menta para decorar</li>
      </ul>

      <p><strong>Preparación:</strong></p>
      <ol>
        <li>Derrite el chocolate al baño maría o en el microondas a potencia baja.</li>
        <li>En un procesador de alimentos, combina la pulpa de los aguacates, el chocolate derretido, la leche de coco, el cacao en polvo, la miel, la vainilla y la sal.</li>
        <li>Procesa hasta obtener una mezcla completamente suave y homogénea.</li>
        <li>Divide la mousse en copas o vasos individuales.</li>
        <li>Refrigera durante al menos 2 horas.</li>
        <li>Antes de servir, decora con frambuesas frescas y hojas de menta.</li>
      </ol>

      <h2>4. Carpaccio de aguacate con vinagreta de trufa</h2>

      <p>Este entrante minimalista y elegante destaca la pureza del aguacate, elevado por el aroma lujoso de la trufa.</p>

      <p><strong>Ingredientes:</strong></p>
      <ul>
        <li>2 aguacates firmes pero maduros</li>
        <li>2 cucharadas de aceite de trufa</li>
        <li>1 cucharada de vinagre de champán</li>
        <li>Flores comestibles para decorar</li>
        <li>Microgreens o brotes tiernos</li>
        <li>Escamas de sal marina</li>
        <li>Pimienta negra recién molida</li>
        <li>Láminas de trufa fresca (opcional para una versión ultra-lujosa)</li>
      </ul>

      <p><strong>Preparación:</strong></p>
      <ol>
        <li>Corta los aguacates por la mitad y retira el hueso.</li>
        <li>Con una mandolina o cuchillo muy afilado, corta láminas muy finas de aguacate.</li>
        <li>Dispón las láminas en platos fríos, superponiéndolas ligeramente.</li>
        <li>Mezcla el aceite de trufa con el vinagre de champán para crear la vinagreta.</li>
        <li>Rocía la vinagreta sobre el carpaccio.</li>
        <li>Decora con flores comestibles, microgreens, escamas de sal y pimienta.</li>
        <li>Si usas trufa fresca, añade algunas láminas finas por encima.</li>
        <li>Sirve inmediatamente.</li>
      </ol>

      <h2>5. Raviolis de aguacate y ricotta con salsa de hierbas</h2>

      <p>Estos raviolis caseros combinan la suavidad del aguacate con la ligereza de la ricotta, complementados por una fresca salsa de hierbas.</p>

      <p><strong>Ingredientes:</strong></p>
      <ul>
        <li>Para la pasta:
          <ul>
            <li>300g de harina 00</li>
            <li>3 huevos</li>
            <li>1 cucharada de aceite de oliva</li>
            <li>1 pizca de sal</li>
          </ul>
        </li>
        <li>Para el relleno:
          <ul>
            <li>1 aguacate maduro</li>
            <li>200g de ricotta fresca</li>
            <li>50g de parmesano rallado</li>
            <li>Ralladura de 1 limón</li>
            <li>Nuez moscada</li>
            <li>Sal y pimienta</li>
          </ul>
        </li>
        <li>Para la salsa:
          <ul>
            <li>100g de mantequilla</li>
            <li>Un puñado de hierbas frescas (albahaca, perejil, cebollino)</li>
            <li>1 diente de ajo</li>
            <li>Jugo de medio limón</li>
            <li>Piñones tostados</li>
          </ul>
        </li>
      </ul>

      <p><strong>Preparación:</strong></p>
      <ol>
        <li>Prepara la masa mezclando todos los ingredientes y amasa hasta obtener una textura suave. Deja reposar 30 minutos.</li>
        <li>Para el relleno, mezcla el aguacate machacado con la ricotta, el parmesano, la ralladura de limón, sal, pimienta y nuez moscada.</li>
        <li>Estira la masa muy fina y corta círculos.</li>
        <li>Coloca una cucharadita de relleno en el centro de cada círculo, humedece los bordes y sella con otro círculo de masa.</li>
        <li>Cuece los raviolis en agua con sal durante 2-3 minutos.</li>
        <li>Para la salsa, derrite la mantequilla a fuego bajo, añade el ajo picado y las hierbas picadas.</li>
        <li>Añade el jugo de limón y retira del fuego.</li>
        <li>Sirve los raviolis con la salsa por encima y decora con piñones tostados.</li>
      </ol>

      <p>Estas recetas demuestran la increíble versatilidad del aguacate en la cocina gourmet. Desde entradas elegantes hasta postres sorprendentes, este superalimento puede transformar cualquier plato en una experiencia culinaria memorable.</p>

      <p>En Inca Fields Premium, nos enorgullece proporcionar aguacates de la más alta calidad, perfectos para estas creaciones gourmet. Nuestros aguacates, cultivados en los valles andinos de Perú, ofrecen la textura cremosa y el sabor equilibrado que estos platos sofisticados requieren.</p>
    `,
    image: "/images/blog/recetas-gourmet.webp",
    date: "2023-10-28",
    readTime: 12,
    author: {
      name: "María Fernández",
      avatar: "/images/blog/authors/maria.webp",
      role: "Chef Especialista en Cocina Peruana"
    },
    category: "recetas",
    tags: ["recetas", "gourmet", "cocina", "gastronomía"]
  }
];
