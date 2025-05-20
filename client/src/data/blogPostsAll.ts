import { blogPosts } from './blogPosts';
import { moreBlogPosts } from './blogPostsMore';
import { extraBlogPosts } from './blogPostsExtra';

// Combinar todos los posts del blog
export const allBlogPosts = [...blogPosts, ...moreBlogPosts, ...extraBlogPosts];

// Exportar por defecto para facilitar la importación
export default allBlogPosts;
