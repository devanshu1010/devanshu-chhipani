import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChatWidget() {
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: 'Hi, I am Devanshu\'s AI assistant. Ask me anything about his work.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (!input.trim()) return;
      const newMsgs = [...messages, { role: 'user' as const, text: input }];
      setMessages(newMsgs);
      setInput('');
      
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'ai', text: 'I am a simulated response.' }]);
      }, 500);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      data-testid="chat-widget" 
      className="w-80 h-96 bg-[#111111]/90 border border-white/10 rounded-2xl p-4 flex flex-col font-sans text-sm text-white backdrop-blur-xl shadow-2xl"
    >
      <div className="flex-1 overflow-y-auto space-y-3 mb-4 pr-2">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-br-none' : 'bg-white/10 text-zinc-200 rounded-bl-none'}`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="relative">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleSend}
          placeholder="Ask something..."
          className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-4 pr-10 outline-none focus:border-indigo-500/50 transition-colors"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center cursor-pointer">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
}

