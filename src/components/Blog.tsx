const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for building large-scale React applications that are maintainable and performant.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "React"
    },
    {
      title: "Modern CSS Techniques for Better UX",
      excerpt: "Explore advanced CSS features and techniques that can significantly improve user experience on your websites.",
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "CSS"
    },
    {
      title: "TypeScript Best Practices",
      excerpt: "Discover how to leverage TypeScript effectively in your projects for better code quality and developer experience.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "TypeScript"
    }
  ];

  return (
    <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
          Latest Blog Posts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className={`
                bg-white dark:bg-white/5
                backdrop-blur-lg rounded-lg overflow-hidden 
                border border-gray-200 dark:border-white/10
                hover:border-sky-300 dark:hover:border-sky-500/30
                transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-sky-100/30 dark:hover:shadow-sky-500/10 group cursor-pointer
              `}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-sky-100 text-sky-800 dark:bg-sky-500/20 dark:text-sky-300 px-2 py-1 rounded text-sm border border-sky-200 dark:border-sky-500/30">
                    {post.category}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-sky-700 dark:group-hover:text-sky-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</span>
                  <span className="text-sky-700 hover:text-sky-500 dark:text-sky-300 dark:hover:text-sky-200 text-sm transition-colors">
                    Read more →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
