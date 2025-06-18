
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for building large-scale React applications that are maintainable and performant.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "React",
      slug: "building-scalable-react-applications",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Modern CSS Techniques for Better UX",
      excerpt: "Explore advanced CSS features and techniques that can significantly improve user experience on your websites.",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "CSS",
      slug: "modern-css-techniques",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "TypeScript Best Practices",
      excerpt: "Discover how to leverage TypeScript effectively in your projects for better code quality and developer experience.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "TypeScript",
      slug: "typescript-best-practices",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="blog" className="py-20 relative overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 mb-6">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Latest Posts</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Latest{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Blog Posts
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on modern web development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={index}
              to={`/blog/${post.slug}`}
              className="group block animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <article className="h-full bg-white/80 dark:bg-black/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50 rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                {/* Card Header with Gradient */}
                <div className={`h-32 bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium border border-white/30">
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800">
                      {post.category}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-blue-700 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-200 text-sm font-semibold transition-colors">
                    Read more 
                    <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
