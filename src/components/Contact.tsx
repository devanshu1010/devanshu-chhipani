import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Let's work together</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-sky-100 p-3 rounded-lg border border-sky-200 dark:bg-sky-500/20 dark:border-sky-500/30">
                  <Mail className="text-sky-700 dark:text-sky-300" size={20} />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Email</p>
                  <p className="text-gray-700 dark:text-gray-300">your.email@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-sky-100 p-3 rounded-lg border border-sky-200 dark:bg-sky-500/20 dark:border-sky-500/30">
                  <Phone className="text-sky-700 dark:text-sky-300" size={20} />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Phone</p>
                  <p className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-sky-100 p-3 rounded-lg border border-sky-200 dark:bg-sky-500/20 dark:border-sky-500/30">
                  <MapPin className="text-sky-700 dark:text-sky-300" size={20} />
                </div>
                <div>
                  <p className="text-gray-900 dark:text-white font-medium">Location</p>
                  <p className="text-gray-700 dark:text-gray-300">Your City, Country</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-white/5 backdrop-blur-lg rounded-lg p-8 border border-gray-200 dark:border-white/10">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 dark:text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-white/40 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:border-sky-400 focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-900 dark:text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white/40 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:border-sky-400 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-900 dark:text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white/40 dark:bg-white/10 border border-gray-200 dark:border-white/20 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-400 focus:border-sky-400 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-sky-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-sky-500/25"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;