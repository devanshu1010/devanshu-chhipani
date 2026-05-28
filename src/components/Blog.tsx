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
  const featuredPost = blogPosts[0];
  const secondaryPosts = blogPosts.slice(1);

  return (
    <section id="blog" className="section-showcase section-flow relative overflow-hidden">
      <div className="container-wide relative">
        <div className="mb-20 max-w-[780px] space-y-6 lg:mb-24">
          <p className="font-mono text-xs uppercase text-indigo-600 dark:text-indigo-400">Field notes</p>
          <h2 className="text-4xl font-black leading-tight tracking-normal text-zinc-950 dark:text-white sm:text-5xl">
            Writing that documents the <span className="text-indigo-600 dark:text-indigo-400">thinking</span> behind the code.
          </h2>
          <p className="max-w-[640px] text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Technical posts on product architecture, CSS, TypeScript, and the small decisions that make software easier to maintain.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          <Link to={`/blog/${featuredPost.slug}`} className="group block lg:col-span-8">
            <article className="flex min-h-[540px] h-full flex-col rounded-2xl border border-black/[0.06] bg-[#ffffff]/90 p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/35 dark:border-white/[0.08] dark:bg-white/[0.04] dark:hover:border-indigo-400/35 sm:p-10">
              <div className="mb-12 flex items-start justify-between gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-md bg-zinc-950 text-[#ffffff] shadow-[inset_0_-2px_0_rgba(79,70,229,0.85)] dark:bg-white dark:text-zinc-950 dark:shadow-[inset_0_-2px_0_rgba(129,140,248,0.85)]">
                  <FileText className="h-5 w-5" />
                </div>
                <span className="font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400">Featured 01</span>
              </div>

              <div className="mb-6 flex items-center justify-between gap-4 font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400">
                <span>{featuredPost.category}</span>
                <span>{featuredPost.readTime}</span>
              </div>

              <h3 className="mb-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-tight text-zinc-950 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 sm:text-5xl">
                {featuredPost.title}
              </h3>

              <p className="mb-10 max-w-2xl flex-1 text-lg leading-8 text-zinc-700 dark:text-zinc-300">{featuredPost.excerpt}</p>

              <div className="flex items-center justify-between border-t border-zinc-950/10 pt-5 text-sm font-semibold text-zinc-950 dark:border-white/10 dark:text-white">
                <span>{featuredPost.date}</span>
                <ArrowUpRight className="h-5 w-5 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
              </div>
            </article>
          </Link>

          <div className="grid gap-6 lg:col-span-4">
            {secondaryPosts.map((post, index) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                <article className="flex min-h-[252px] h-full flex-col rounded-2xl border border-black/[0.06] bg-[#ffffff]/80 p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-500/30 dark:border-white/[0.08] dark:bg-white/[0.03] dark:hover:border-indigo-400/30">
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400">0{index + 2}</span>
                    <span className="font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400">{post.readTime}</span>
                  </div>

                  <h3 className="mb-3 text-2xl font-black leading-tight tracking-normal text-zinc-950 transition-colors group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                    {post.title}
                  </h3>

                  <p className="mb-6 line-clamp-3 flex-1 leading-7 text-zinc-700 dark:text-zinc-300">{post.excerpt}</p>

                  <div className="flex items-center justify-between border-t border-zinc-950/10 pt-4 text-sm font-semibold text-zinc-950 dark:border-white/10 dark:text-white">
                    <span>{post.date}</span>
                    <ArrowUpRight className="h-4 w-4 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
