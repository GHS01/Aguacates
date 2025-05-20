import { useEffect, useState } from 'react';
import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag, Share2, Facebook, Twitter, Linkedin, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogSidebar from '@/components/blog/BlogSidebar';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { allBlogPosts as blogPosts } from '@/data/blogPostsAll';
import SEO from '@/components/SEO';
import { formatDate } from '@/lib/utils';

const BlogPost = () => {
  const [, params] = useRoute('/blog/:slug');
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [prevPost, setPrevPost] = useState<any>(null);
  const [nextPost, setNextPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (params && params.slug) {
      // Encontrar el post actual
      const currentPost = blogPosts.find(p => p.slug === params.slug);

      if (currentPost) {
        setPost(currentPost);

        // Encontrar posts relacionados (misma categoría, excluyendo el actual)
        const related = blogPosts
          .filter(p => p.category === currentPost.category && p.id !== currentPost.id)
          .slice(0, 3);
        setRelatedPosts(related);

        // Encontrar post anterior y siguiente
        const currentIndex = blogPosts.findIndex(p => p.id === currentPost.id);
        setPrevPost(currentIndex > 0 ? blogPosts[currentIndex - 1] : null);
        setNextPost(currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null);
      }

      setIsLoading(false);
    }
  }, [params]);

  // Si no se encuentra el post
  if (!isLoading && !post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24 md:pt-32">
          <div className="container mx-auto px-4 py-12">
            <div className="text-center">
              <h1 className="text-2xl font-display font-bold mb-4">Artículo no encontrado</h1>
              <p className="mb-6">Lo sentimos, el artículo que buscas no existe o ha sido movido.</p>
              <Link href="/blog">
                <Button className="bg-[#2D5C34] hover:bg-[#2D5C34]/90">
                  Volver al Blog
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoading || !post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24 md:pt-32">
          <div className="container mx-auto px-4 py-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
              <div className="h-64 bg-gray-200 rounded mb-8"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Construir URL completa para compartir
  const shareUrl = `https://inca-fields-ghs.vercel.app/blog/${post.slug}`;

  // Compartir en redes sociales
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* SEO con componente reutilizable */}
      <SEO
        title={`${post.title} | Blog de Inca Fields Premium`}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        url={shareUrl}
        image={`https://inca-fields-ghs.vercel.app${post.image}`}
        type="article"
        schema={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": post.title,
          "image": `https://inca-fields-ghs.vercel.app${post.image}`,
          "datePublished": post.date,
          "dateModified": post.date,
          "author": {
            "@type": "Person",
            "name": post.author.name
          },
          "publisher": {
            "@type": "Organization",
            "name": "Inca Fields Premium",
            "logo": {
              "@type": "ImageObject",
              "url": "https://inca-fields-ghs.vercel.app/logo.png"
            }
          },
          "description": post.excerpt,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": shareUrl
          },
          "keywords": post.tags.join(', ')
        }}
      />

      <Header />

      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero del artículo */}
        <section
          className="relative bg-cover bg-center py-16 md:py-24"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${post.image})`,
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center text-white"
            >
              <Link href={`/blog/categoria/${post.category}`}>
                <span className="inline-block px-3 py-1 bg-[#C6A96C] text-white text-xs uppercase tracking-wider rounded mb-4">
                  {post.category}
                </span>
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-shadow-lg">
                {post.title}
              </h1>
              <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-white/80">
                <div className="flex items-center">
                  <Calendar size={16} className="mr-1" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-1" />
                  <span>{post.readTime} min de lectura</span>
                </div>
              </div>
            </motion.div>
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
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/blog/categoria/${post.category}`}>
                    {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href={`/blog/${post.slug}`}>
                    {post.title.length > 30 ? post.title.substring(0, 30) + '...' : post.title}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Columna principal */}
            <div className="w-full lg:w-2/3">
              {/* Autor */}
              <div className="flex items-center mb-8 p-4 bg-gray-50 rounded-lg">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium text-[#2D5C34]">{post.author.name}</p>
                  <p className="text-sm text-gray-600">{post.author.role}</p>
                </div>
              </div>

              {/* Contenido del artículo */}
              <article className="prose prose-lg max-w-none mb-8">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag: string, index: number) => (
                  <Link key={index} href={`/blog?tag=${tag}`}>
                    <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer">
                      <Tag size={14} className="mr-1" />
                      {tag}
                    </Badge>
                  </Link>
                ))}
              </div>

              {/* Compartir */}
              <div className="border-t border-b py-4 mb-8">
                <div className="flex items-center gap-4">
                  <span className="font-medium">Compartir:</span>
                  <Button variant="outline" size="icon" onClick={shareOnFacebook} aria-label="Compartir en Facebook">
                    <Facebook size={18} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={shareOnTwitter} aria-label="Compartir en Twitter">
                    <Twitter size={18} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={shareOnLinkedIn} aria-label="Compartir en LinkedIn">
                    <Linkedin size={18} />
                  </Button>
                </div>
              </div>

              {/* Navegación entre posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {prevPost && (
                  <Link href={`/blog/${prevPost.slug}`} className="group">
                    <div className="p-4 border rounded-lg hover:border-[#2D5C34] transition-colors">
                      <div className="flex items-center text-sm text-gray-600 mb-2">
                        <ChevronLeft size={16} className="mr-1" />
                        <span>Anterior</span>
                      </div>
                      <h3 className="font-medium group-hover:text-[#2D5C34] transition-colors">
                        {prevPost.title.length > 50 ? prevPost.title.substring(0, 50) + '...' : prevPost.title}
                      </h3>
                    </div>
                  </Link>
                )}

                {nextPost && (
                  <Link href={`/blog/${nextPost.slug}`} className="group md:ml-auto">
                    <div className="p-4 border rounded-lg hover:border-[#2D5C34] transition-colors">
                      <div className="flex items-center justify-end text-sm text-gray-600 mb-2">
                        <span>Siguiente</span>
                        <ChevronRight size={16} className="ml-1" />
                      </div>
                      <h3 className="font-medium text-right group-hover:text-[#2D5C34] transition-colors">
                        {nextPost.title.length > 50 ? nextPost.title.substring(0, 50) + '...' : nextPost.title}
                      </h3>
                    </div>
                  </Link>
                )}
              </div>

              {/* Posts relacionados */}
              {relatedPosts.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-xl font-display font-bold text-[#2D5C34] mb-4">
                    Artículos relacionados
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="group">
                        <div className="border rounded-lg overflow-hidden hover:border-[#2D5C34] transition-colors">
                          <div className="h-40 overflow-hidden">
                            <img
                              src={relatedPost.image}
                              alt={relatedPost.title}
                              className="w-full h-full object-cover transition-transform group-hover:scale-105"
                            />
                          </div>
                          <div className="p-4">
                            <h4 className="font-medium mb-2 group-hover:text-[#2D5C34] transition-colors">
                              {relatedPost.title.length > 60 ? relatedPost.title.substring(0, 60) + '...' : relatedPost.title}
                            </h4>
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar size={14} className="mr-1" />
                              <span>{formatDate(relatedPost.date)}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
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

export default BlogPost;
