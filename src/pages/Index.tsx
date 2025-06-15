
import Header from '../components/Header';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import TechStack from '../components/TechStack';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent),linear-gradient(-45deg,transparent_25%,rgba(68,68,68,.1)_50%,transparent_75%,transparent)] bg-[length:20px_20px]"></div>
        
        <Header />
        <Hero />
        <Experience />
        <TechStack />
        <Blog />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
