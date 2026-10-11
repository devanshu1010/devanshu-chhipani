import { useEffect, useState } from 'react';
import About from '../components/About';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import DacLoader from '../components/DacLoader';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SelectedWork from '../components/SelectedWork';
import TechStack from '../components/TechStack';
import InteractiveWidget from '../components/InteractiveWidget';


const Index = () => {
  const [isLoading, setIsLoading] = useState(() => !sessionStorage.getItem('loaderShown'));

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);

  const handleLoaderComplete = () => {
    sessionStorage.setItem('loaderShown', '1');
    setIsLoading(false);
  };

  if (isLoading) {
    return <DacLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-zinc-50/50 text-zinc-950 transition-colors duration-300 dark:bg-[#0a0a0a] dark:text-zinc-50">
      <Navbar />
      <main className="w-full max-w-[1200px] mx-auto pt-[56px]">
        <Hero />
        <About />
        <SelectedWork />
        <Experience />
        <TechStack />
        <Blog />
        <Education />
        <Contact />
      </main>
      <InteractiveWidget />
      <Footer />
    </div>
  );
};

export default Index;
