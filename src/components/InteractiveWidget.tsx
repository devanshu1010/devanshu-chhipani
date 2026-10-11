import { usePersona } from '@/context/PersonaContext';
import { AnimatePresence } from 'framer-motion';
import CliWidget from './CliWidget';
import ChatWidget from './ChatWidget';

export default function InteractiveWidget() {
  const { persona } = usePersona();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence mode="wait">
        {persona === 'se' ? (
          <CliWidget key="cli" />
        ) : (
          <ChatWidget key="chat" />
        )}
      </AnimatePresence>
    </div>
  );
}

