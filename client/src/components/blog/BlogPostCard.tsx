import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface BlogPost {
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

interface BlogPostCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogPostCard = ({ post, featured = false }: BlogPostCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`group overflow-hidden border border-gray-200 rounded-lg hover:border-[#2D5C34] transition-colors ${
        featured ? 'md:col-span-2 md:flex' : ''
      }`}
    >
      <Link href={`/blog/${post.slug}`} className="block overflow-hidden">
        <div className={`relative overflow-hidden ${featured ? 'md:w-1/2 h-60 md:h-auto' : 'h-48'}`}>
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-0 left-0 m-3">
            <span className="inline-block px-2 py-1 text-xs font-medium bg-[#2D5C34] text-white rounded">
              {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
          </div>
        </div>
      </Link>

      <div className={`p-4 ${featured ? 'md:w-1/2 md:p-6' : ''}`}>
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-display font-bold text-lg mb-2 group-hover:text-[#2D5C34] transition-colors">
            {post.title}
          </h3>
        </Link>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar size={14} className="mr-1" />
            <span>{formatDate(post.date)}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readTime} min</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-[#2D5C34] font-medium hover:text-[#2D5C34]/80 transition-colors">
          Leer más
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;
