import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CliWidget() {
  const [output, setOutput] = useState<string[]>(['> init system... OK', '> ready for commands (try "help")']);
  const [input, setInput] = useState('');

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!input.trim()) return;
      const newOutput = [...output, `> ${input}`];
      
      const cmd = input.trim().toLowerCase();
      if (cmd === 'help') {
        newOutput.push('Available commands: help, about, clear');
      } else if (cmd === 'clear') {
        setOutput([]);
        setInput('');
        return;
      } else if (cmd === 'about') {
        newOutput.push('Devanshu Chhipani. Software Engineer.');
      } else {
        newOutput.push(`Command not found: ${cmd}`);
      }
      
      setOutput(newOutput);
      setInput('');
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      data-testid="cli-widget" 
      className="w-80 h-96 bg-black/90 border border-white/10 rounded-lg p-4 flex flex-col font-mono text-sm text-green-400 backdrop-blur-md shadow-2xl"
    >
      <div className="flex-1 overflow-y-auto space-y-1 mb-2">
        {output.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <span>&gt;</span>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent border-none outline-none flex-1 text-green-400 placeholder:text-green-900"
          autoFocus
        />
      </div>
    </motion.div>
  );
}

