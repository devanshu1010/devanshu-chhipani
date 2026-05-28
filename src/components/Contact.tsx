import { Mail, MapPin, Phone, Send } from "lucide-react";

const contactItems = [
  { icon: Mail, label: "Email", value: "work.devanshuchhipani@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 84019 43394" },
  { icon: MapPin, label: "Location", value: "Ahmedabad, Gujarat, India" },
];

const Contact = () => {
  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <p className="font-mono text-xs uppercase text-indigo-600 dark:text-indigo-400">Contact protocol</p>
          <h2 className="text-4xl font-black leading-tight tracking-normal text-zinc-950 dark:text-white sm:text-5xl">
            Bring a product problem. I will bring the <span className="text-indigo-600 dark:text-indigo-400">interface thinking.</span>
          </h2>
          <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            Open to computer engineering roles, product engineering work, technical content, and teams exploring useful AI workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.42fr_0.58fr]">
          <div className="rounded-lg border border-black/10 bg-zinc-950 p-6 text-[#ffffff] dark:border-white/10 dark:bg-[#0a0a0a] sm:p-8">
            <h3 className="mb-5 text-2xl font-black tracking-normal">Signal routes</h3>
            <p className="mb-8 leading-7 text-zinc-300">
              Short, specific messages are easiest to act on. Share the product, team, timeline, and what you need built or improved.
            </p>

            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-indigo-400/30">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-white text-indigo-600">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="font-mono text-xs uppercase text-zinc-400">{label}</p>
                    <p className="font-medium text-white">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-lg border border-black/10 bg-[#ffffff]/85 p-5 dark:border-white/10 dark:bg-white/[0.04] sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-md border border-black/10 bg-[#ffffff] px-4 py-3 text-zinc-950 outline-none transition-colors focus:border-indigo-500 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:border-indigo-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-md border border-black/10 bg-[#ffffff] px-4 py-3 text-zinc-950 outline-none transition-colors focus:border-indigo-500 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:border-indigo-400"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase text-zinc-500 dark:text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                rows={7}
                className="w-full resize-none rounded-md border border-black/10 bg-[#ffffff] px-4 py-3 text-zinc-950 outline-none transition-colors focus:border-indigo-500 dark:border-white/10 dark:bg-black/20 dark:text-white dark:focus:border-indigo-400"
                placeholder="Tell me what you are building..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-950 px-5 py-4 font-semibold text-[#ffffff] transition-transform duration-200 hover:-translate-y-0.5 hover:text-indigo-300 dark:bg-white dark:text-zinc-950 dark:hover:text-indigo-600"
            >
              Send message
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
