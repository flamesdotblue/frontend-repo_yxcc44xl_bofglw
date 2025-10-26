import React from 'react';
import { Bot, Sparkles } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = React.useState([
    { role: 'assistant', content: 'Hi! Ask me anything from your uploaded notes by topic.' }
  ]);
  const [input, setInput] = React.useState('');
  const [thinking, setThinking] = React.useState(false);

  const ask = async () => {
    const q = input.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: 'user', content: q }]);
    setInput('');
    setThinking(true);
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'assistant', content: 'Here\'s a concise answer grounded in your materials with key points and a simple example.' }]);
      setThinking(false);
    }, 800);
  };

  return (
    <section className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-2xl md:text-3xl font-semibold mb-4">Ask My Notes</h1>
      <div className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col h-[520px]">
        <div className="flex items-center gap-2 mb-3">
          <Bot className="h-5 w-5" />
          <h3 className="font-semibold">Chat</h3>
        </div>
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[85%] rounded-2xl p-3 text-sm border border-white/10 ${m.role === 'user' ? 'ml-auto bg-indigo-500/20' : 'bg-white/10'}`}>
              {m.content}
            </div>
          ))}
          {thinking && (
            <div className="max-w-[60%] rounded-2xl p-3 text-sm border border-white/10 bg-white/10 inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 animate-pulse" /> AI is thinking...
            </div>
          )}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && ask()}
            className="flex-1 rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-indigo-400"
            placeholder="Ask a question from your notes..."
          />
          <button onClick={ask} className="rounded-lg bg-indigo-500 hover:bg-indigo-400 px-4 py-2 text-sm font-medium transition">Send</button>
        </div>
      </div>
    </section>
  );
};

export default Chat;
