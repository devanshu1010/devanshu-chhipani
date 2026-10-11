import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePersona } from '../context/PersonaContext';
import HeroSE from './HeroSE';
import HeroAI from './HeroAI';

const Hero: React.FC = () => {
  const { persona } = usePersona();

  return (
    <div className="relative min-h-[82vh] overflow-hidden">
      <AnimatePresence mode="wait">
        {persona === 'se' ? (
          <motion.div
            key="se"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full"
          >
            <HeroSE />
          </motion.div>
        ) : (
          <motion.div
            key="ai"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full"
          >
            <HeroAI />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hero;
