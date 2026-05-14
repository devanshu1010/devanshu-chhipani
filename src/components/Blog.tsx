import { ArrowUpRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    title: "Building Scalable React Applications",
    excerpt: "Architecture notes for React applications that stay readable as teams, routes, and product states grow.",
    date: "March 15, 2024",
    readTime: "5 min",
    category: "React",
    slug: "building-scalable-react-applications",
  },
  {
    title: "Modern CSS Techniques for Better UX",
    excerpt: "Practical CSS patterns for responsive polish, interaction feedback, and interfaces that do not fight the user.",
    date: "March 10, 2024",
    readTime: "4 min",
    category: "CSS",
    slug: "modern-css-techniques",
  },
  {
    title: "TypeScript Best Practices",
    excerpt: "How to use TypeScript as a design tool for safer data flow and clearer engineering contracts.",
    date: "March 5, 2024",
    readTime: "6 min",
    category: "TypeScript",
    slug: "typescript-best-practices",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="relative overflow-hidden px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-12 grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="font-mono text-xs uppercase text-emerald-600 dark:text-emerald-400">Field notes</p>
          <h2 className="text-4xl font-black leading-tight tracking-normal text-zinc-950 dark:text-white sm:text-5xl">
            Writing that documents the <span className="text-emerald-600 dark:text-emerald-400">thinking</span> behind the code.
          </h2>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Technical posts on product architecture, CSS, TypeScript, and the small decisions that make software easier to maintain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
              <article className="flex h-full min-h-[320px] flex-col rounded-lg border border-black/10 bg-[#ffffff]/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/55 hover:shadow-[10px_10px_0_rgba(16,185,129,0.14)] dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-emerald-400/45 dark:hover:shadow-[10px_10px_0_rgba(16,185,129,0.10)]">
                <div className="mb-10 flex items-start justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-md bg-zinc-950 text-[#ffffff] shadow-[inset_0_-2px_0_rgba(16,185,129,0.85)] dark:bg-white dark:text-zinc-950">
                    <FileText className="h-5 w-5" />
                  </div>
                  <span className="font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400">0{index + 1}</span>
                </div>

                <div className="mb-5 flex items-center justify-between gap-4 font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="mb-4 text-2xl font-black leading-tight tracking-normal text-zinc-950 transition-colors group-hover:text-emerald-700 dark:text-white dark:group-hover:text-emerald-400">
                  {post.title}
                </h3>

                <p className="mb-8 line-clamp-3 flex-1 leading-7 text-zinc-700 dark:text-zinc-300">{post.excerpt}</p>

                <div className="flex items-center justify-between border-t border-zinc-950/10 pt-4 text-sm font-semibold text-zinc-950 dark:border-white/10 dark:text-white">
                  <span>{post.date}</span>
                  <ArrowUpRight className="h-5 w-5 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
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
