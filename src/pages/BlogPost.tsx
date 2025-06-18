
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);

  // Mock blog post data - in real app this would come from API
  const blogPosts = {
    'building-scalable-react-applications': {
      title: "Building Scalable React Applications",
      content: `
        <h2>Introduction</h2>
        <p>Building scalable React applications requires careful planning and the right architectural decisions. In this comprehensive guide, we'll explore the best practices and patterns that help you create maintainable, performant applications that can grow with your needs.</p>
        
        <h2>1. Component Architecture</h2>
        <p>The foundation of any scalable React application lies in its component architecture. Here are the key principles:</p>
        <ul>
          <li><strong>Single Responsibility Principle:</strong> Each component should have one clear purpose</li>
          <li><strong>Composition over Inheritance:</strong> Use composition to build complex UIs</li>
          <li><strong>Props Interface Design:</strong> Design clear, type-safe props interfaces</li>
        </ul>

        <h2>2. State Management</h2>
        <p>Choosing the right state management solution is crucial for scalability:</p>
        <ul>
          <li>Local state for component-specific data</li>
          <li>Context API for theme and auth state</li>
          <li>External libraries (Redux, Zustand) for complex global state</li>
        </ul>

        <h2>3. Performance Optimization</h2>
        <p>Performance considerations become critical as your application grows:</p>
        <ul>
          <li>Implement code splitting with React.lazy()</li>
          <li>Use React.memo() for expensive components</li>
          <li>Optimize bundle size with tree shaking</li>
          <li>Implement proper caching strategies</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Building scalable React applications is an iterative process. Start with solid foundations, follow best practices, and continuously refactor as your application grows. The key is to maintain clean, readable code that your team can easily understand and extend.</p>
      `,
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "React",
      author: "Er. Devanshu Chhipani"
    },
    'modern-css-techniques': {
      title: "Modern CSS Techniques for Better UX",
      content: `
        <h2>The Evolution of CSS</h2>
        <p>CSS has evolved tremendously over the years. Modern CSS provides powerful tools for creating exceptional user experiences without relying heavily on JavaScript.</p>
        
        <h2>CSS Grid and Flexbox</h2>
        <p>These layout systems have revolutionized how we approach web layouts:</p>
        <ul>
          <li>CSS Grid for two-dimensional layouts</li>
          <li>Flexbox for one-dimensional layouts</li>
          <li>Combining both for complex designs</li>
        </ul>

        <h2>Custom Properties (CSS Variables)</h2>
        <p>CSS custom properties enable dynamic theming and more maintainable stylesheets.</p>

        <h2>Modern Animations</h2>
        <p>CSS animations and transitions create smooth, performant user experiences.</p>
      `,
      date: "March 10, 2024",
      readTime: "4 min read",
      category: "CSS",
      author: "Er. Devanshu Chhipani"
    },
    'typescript-best-practices': {
      title: "TypeScript Best Practices",
      content: `
        <h2>Why TypeScript?</h2>
        <p>TypeScript brings static typing to JavaScript, enabling better tooling, fewer bugs, and improved developer experience.</p>
        
        <h2>Type Safety</h2>
        <p>Leverage TypeScript's type system to catch errors at compile time rather than runtime.</p>

        <h2>Interface Design</h2>
        <p>Design clear, extensible interfaces that make your code self-documenting.</p>
      `,
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "TypeScript",
      author: "Er. Devanshu Chhipani"
    }
  };

  useEffect(() => {
    if (slug) {
      const foundPost = blogPosts[slug as keyof typeof blogPosts];
      setPost(foundPost);
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-300">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Post Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Background elements - consistent with main page */}
      <div className="fixed inset-0 bg-gray-50 dark:bg-gray-900">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 dark:bg-black/80 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800">
              {post.category}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
            <span>by {post.author}</span>
          </div>
        </header>

        {/* Article Content */}
        <article 
          className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-strong:text-gray-900 dark:prose-strong:text-white prose-li:text-gray-700 dark:prose-li:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <span className="text-gray-600 dark:text-gray-400">Share this article:</span>
            <button className="p-2 text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPost;
