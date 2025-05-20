import { useState, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { motion } from 'framer-motion';
import { Search, Tag, Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostCard from '@/components/blog/BlogPostCard';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { allBlogPosts as blogPosts } from '@/data/blogPostsAll';
import SEO from '@/components/SEO';

// Tipos
type BlogCategory = 'todos' | 'recetas' | 'salud' | 'cultivo' | 'industria' | 'sostenibilidad';

const Blog = () => {
  const [location, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<BlogCategory>('todos');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  // Extraer categoría de la URL si existe
  useEffect(() => {
    const path = location.split('/');
    if (path.length > 2 && path[1] === 'blog' && path[2] === 'categoria') {
      const category = path[3] as BlogCategory;
      if (['recetas', 'salud', 'cultivo', 'industria', 'sostenibilidad'].includes(category)) {
        setActiveCategory(category);
      }
    } else {
      setActiveCategory('todos');
    }
    // Resetear página al cambiar categoría
    setCurrentPage(1);
  }, [location]);

  // Filtrar posts por categoría y búsqueda
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'todos' || post.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Paginación
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Cambiar página
  const paginate = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Manejar cambio de categoría
  const handleCategoryChange = (category: BlogCategory) => {
    if (category === 'todos') {
      setLocation('/blog');
    } else {
      setLocation(`/blog/categoria/${category}`);
    }
  };

  // Manejar búsqueda
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1); // Resetear a primera página al buscar
  };

  // SEO - Título y descripción dinámicos
  const pageTitle = activeCategory === 'todos'
    ? 'Blog de Aguacates | Inca Fields Premium'
    : `${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)} | Blog de Inca Fields Premium`;

  const pageDescription = activeCategory === 'todos'
    ? 'Descubre todo sobre aguacates premium, recetas, beneficios para la salud y consejos de cultivo en el blog de Inca Fields Premium.'
    : `Artículos sobre ${activeCategory} de aguacates. Información especializada de Inca Fields Premium, expertos en aguacates de alta calidad.`;

  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO con componente reutilizable */}
      <SEO
        title={pageTitle}
        description={pageDescription}
        keywords={`blog aguacates, ${activeCategory !== 'todos' ? activeCategory + ' aguacate, ' : ''}aguacate premium, beneficios aguacate, recetas aguacate, cultivo aguacate, Inca Fields`}
        url={`https://inca-fields-ghs.vercel.app${location}`}
        image="https://inca-fields-ghs.vercel.app/images/blog-cover.jpg"
        type="website"
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          "headline": pageTitle,
          "description": pageDescription,
          "url": `https://inca-fields-ghs.vercel.app${location}`,
          "publisher": {
            "@type": "Organization",
            "name": "Inca Fields Premium",
            "logo": {
              "@type": "ImageObject",
              "url": "https://inca-fields-ghs.vercel.app/logo.png"
            }
          }
        }}
      />

      <Header />

      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero del blog */}
        <section className="bg-[#2D5C34] text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Blog de Inca Fields
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Descubre todo sobre nuestros aguacates premium, consejos, recetas y más
            </motion.p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <div className="bg-[#F9F6F0] border-b border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
                </BreadcrumbItem>
                {activeCategory !== 'todos' && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink href={`/blog/categoria/${activeCategory}`}>
                        {activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Columna principal */}
            <div className="w-full lg:w-2/3">
              {/* Filtros y búsqueda */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    onClick={() => handleCategoryChange('todos')}
                    className={`cursor-pointer px-3 py-1 text-sm ${activeCategory === 'todos' ? 'bg-[#2D5C34] hover:bg-[#2D5C34]/90' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                  >
                    Todos
                  </Badge>
                  <Badge
                    onClick={() => handleCategoryChange('recetas')}
                    className={`cursor-pointer px-3 py-1 text-sm ${activeCategory === 'recetas' ? 'bg-[#2D5C34] hover:bg-[#2D5C34]/90' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                  >
                    Recetas
                  </Badge>
                  <Badge
                    onClick={() => handleCategoryChange('salud')}
                    className={`cursor-pointer px-3 py-1 text-sm ${activeCategory === 'salud' ? 'bg-[#2D5C34] hover:bg-[#2D5C34]/90' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                  >
                    Salud
                  </Badge>
                  <Badge
                    onClick={() => handleCategoryChange('cultivo')}
                    className={`cursor-pointer px-3 py-1 text-sm ${activeCategory === 'cultivo' ? 'bg-[#2D5C34] hover:bg-[#2D5C34]/90' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                  >
                    Cultivo
                  </Badge>
                  <Badge
                    onClick={() => handleCategoryChange('industria')}
                    className={`cursor-pointer px-3 py-1 text-sm ${activeCategory === 'industria' ? 'bg-[#2D5C34] hover:bg-[#2D5C34]/90' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                  >
                    Industria
                  </Badge>
                  <Badge
                    onClick={() => handleCategoryChange('sostenibilidad')}
                    className={`cursor-pointer px-3 py-1 text-sm ${activeCategory === 'sostenibilidad' ? 'bg-[#2D5C34] hover:bg-[#2D5C34]/90' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
                  >
                    Sostenibilidad
                  </Badge>
                </div>

                <form onSubmit={handleSearch} className="flex w-full md:w-auto">
                  <Input
                    type="text"
                    placeholder="Buscar artículos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full md:w-64"
                  />
                  <Button type="submit" variant="outline" className="ml-2">
                    <Search size={18} />
                  </Button>
                </form>
              </div>

              {/* Resultados */}
              <div className="mb-8">
                <h2 className="text-xl font-display font-bold text-[#2D5C34] mb-6">
                  {activeCategory === 'todos' ? 'Artículos Recientes' : `Artículos sobre ${activeCategory}`}
                </h2>

                {currentPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentPosts.map((post) => (
                      <BlogPostCard key={post.id} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <p className="text-gray-600">No se encontraron artículos que coincidan con tu búsqueda.</p>
                    <Button
                      variant="link"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveCategory('todos');
                        setLocation('/blog');
                      }}
                      className="mt-2 text-[#2D5C34]"
                    >
                      Ver todos los artículos
                    </Button>
                  </div>
                )}
              </div>

              {/* Paginación */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => paginate(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                      <Button
                        key={number}
                        variant={currentPage === number ? "default" : "outline"}
                        size="sm"
                        onClick={() => paginate(number)}
                        className={currentPage === number ? "bg-[#2D5C34]" : ""}
                      >
                        {number}
                      </Button>
                    ))}

                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => paginate(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
