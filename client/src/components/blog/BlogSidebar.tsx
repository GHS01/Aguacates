import { useState } from 'react';
import { Link } from 'wouter';
import { Search, Calendar, Tag } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { allBlogPosts as blogPosts } from '@/data/blogPostsAll';
import { formatDate } from '@/lib/utils';

const BlogSidebar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Obtener posts populares (los que tienen más tiempo de lectura como ejemplo)
  const popularPosts = [...blogPosts]
    .sort((a, b) => b.readTime - a.readTime)
    .slice(0, 4);

  // Obtener todas las categorías únicas
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  // Obtener todas las etiquetas únicas
  const allTags = blogPosts.flatMap(post => post.tags);
  const uniqueTags = Array.from(new Set(allTags)).slice(0, 15); // Limitar a 15 etiquetas

  // Manejar búsqueda
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/blog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="space-y-8">
      {/* Búsqueda */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="font-display font-bold text-lg mb-4">Buscar</h3>
        <form onSubmit={handleSearch} className="flex">
          <Input
            type="text"
            placeholder="Buscar artículos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
          <Button type="submit" variant="outline" className="ml-2">
            <Search size={18} />
          </Button>
        </form>
      </div>

      {/* Categorías */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="font-display font-bold text-lg mb-4">Categorías</h3>
        <ul className="space-y-2">
          {categories.map((category, index) => {
            const count = blogPosts.filter(post => post.category === category).length;
            return (
              <li key={index}>
                <Link href={`/blog/categoria/${category}`} className="flex justify-between items-center py-2 hover:text-[#2D5C34] transition-colors">
                  <span className="capitalize">{category}</span>
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {count}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Posts populares */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="font-display font-bold text-lg mb-4">Artículos populares</h3>
        <div className="space-y-4">
          {popularPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group flex gap-3">
              <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm line-clamp-2 group-hover:text-[#2D5C34] transition-colors">
                  {post.title}
                </h4>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <Calendar size={12} className="mr-1" />
                  <span>{formatDate(post.date)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Etiquetas */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="font-display font-bold text-lg mb-4">Etiquetas</h3>
        <div className="flex flex-wrap gap-2">
          {uniqueTags.map((tag, index) => (
            <Link key={index} href={`/blog?tag=${encodeURIComponent(tag)}`}>
              <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-800 text-xs rounded-full hover:bg-gray-200 transition-colors">
                <Tag size={12} className="mr-1" />
                {tag}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Suscripción al boletín */}
      <div className="bg-[#2D5C34] text-white p-6 rounded-lg">
        <h3 className="font-display font-bold text-lg mb-2">Suscríbete a nuestro boletín</h3>
        <p className="text-white/80 text-sm mb-4">
          Recibe las últimas noticias y artículos sobre aguacates directamente en tu bandeja de entrada.
        </p>
        <Link href="/#newsletter">
          <Button className="w-full bg-white text-[#2D5C34] hover:bg-white/90">
            Suscribirse
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BlogSidebar;
