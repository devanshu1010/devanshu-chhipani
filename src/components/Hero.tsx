import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePersona } from '../context/PersonaContext';
import HeroSE from './HeroSE';
import HeroAI from './HeroAI';

const Hero: React.FC = () => {
  const { persona } = usePersona();

  return (
    <div className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        {persona === 'se' ? (
          <motion.div
            key="se"
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <HeroSE />
          </motion.div>
        ) : (
          <motion.div
            key="ai"
            initial={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <HeroAI />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
