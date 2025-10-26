import React, { useState, useMemo } from 'react';
import { Upload, Bot, HelpCircle, CheckCircle2, XCircle, File, Sparkles } from 'lucide-react';

const TabButton = ({ active, onClick, icon: Icon, label }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition border ${
      active ? 'bg-white text-black border-white' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10'
    }`}
  >
    <Icon className="h-4 w-4" /> {label}
  </button>
);

export const UploadDemo = () => {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  const onDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const dropped = Array.from(e.dataTransfer.files || []);
    if (dropped.length) setFiles((prev) => [...prev, ...dropped.map(f => ({ name: f.name, size: f.size }))]);
  };

  const onPick = (e) => {
    const picked = Array.from(e.target.files || []);
    if (picked.length) setFiles((prev) => [...prev, ...picked.map(f => ({ name: f.name, size: f.size }))]);
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={onDrop}
        className={`flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-8 text-center transition ${
          isDragging ? 'border-indigo-400 bg-indigo-500/10' : 'border-white/15 bg-white/5'
        }`}
      >
        <Upload className="h-6 w-6" />
        <div className="text-sm">
          Drag and drop your files here, or
          <label className="ml-2 inline-flex items-center gap-1 cursor-pointer text-indigo-300 underline">
            browse
            <input type="file" multiple className="hidden" onChange={onPick} accept=".pdf,.pptx,.docx,.txt,.png,.jpg,.jpeg" />
          </label>
        </div>
        <div className="text-xs text-white/60">PDF, PPTX, DOCX, TXT, PNG, JPG, JPEG</div>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((f, idx) => (
            <div key={`${f.name}-${idx}`} className="flex items-center justify-between rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="flex items-center gap-2">
                <File className="h-4 w-4" />
                <span className="text-sm">{f.name}</span>
              </div>
              <span className="text-xs text-white/60">{(f.size / 1024).toFixed(1)} KB</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const ChatDemo = () => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! Ask me anything from your uploaded notes.' }
  ]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);

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
    <div className="rounded-xl border border-white/10 bg-white/5 p-5 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <Bot className="h-5 w-5" />
        <h3 className="font-semibold">Ask My Notes</h3>
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
  );
};

export const QuizDemo = () => {
  const questions = useMemo(() => [
    { q: 'What does RAG stand for?', options: ['Retrieve-And-Generate', 'Retrieval-Augmented Generation', 'Reasoning-Augmented Guidance', 'Random Answer Generator'], correct: 1 },
    { q: 'Which DB stores vectors?', options: ['MongoDB', 'Pinecone', 'Redis', 'MySQL'], correct: 1 },
    { q: 'JWT is commonly used for?', options: ['Styling', 'Routing', 'Authentication', 'Animations'], correct: 2 },
  ], []);

  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const score = useMemo(() => answers.reduce((acc, a, i) => acc + (a === questions[i].correct ? 1 : 0), 0), [answers, questions]);

  const select = (qi, oi) => {
    if (submitted) return;
    setAnswers((a) => a.map((v, i) => (i === qi ? oi : v)));
  };

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
      <div className="flex items-center gap-2 mb-3">
        <HelpCircle className="h-5 w-5" />
        <h3 className="font-semibold">Quick Quiz</h3>
      </div>
      <div className="space-y-4">
        {questions.map((item, qi) => (
          <div key={qi} className="rounded-lg border border-white/10 p-3">
            <div className="text-sm font-medium mb-2">{qi + 1}. {item.q}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {item.options.map((opt, oi) => {
                const picked = answers[qi] === oi;
                let state = 'bg-white/5 hover:bg-white/10';
                if (submitted && picked && oi === item.correct) state = 'bg-emerald-500/20 border-emerald-400';
                else if (submitted && picked && oi !== item.correct) state = 'bg-rose-500/20 border-rose-400';
                else if (picked) state = 'bg-indigo-500/20 border-indigo-400';
                return (
                  <button
                    key={oi}
                    onClick={() => select(qi, oi)}
                    className={`text-left rounded-md border ${state} px-3 py-2 text-sm transition`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between">
        <button onClick={() => setSubmitted(true)} className="rounded-lg bg-indigo-500 hover:bg-indigo-400 px-4 py-2 text-sm font-medium transition">Submit</button>
        {submitted && (
          <div className="inline-flex items-center gap-2 text-sm">
            {score >= 2 ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <XCircle className="h-4 w-4 text-rose-400" />}
            Score: {score}/{questions.length}
          </div>
        )}
      </div>
    </div>
  );
};

const InteractiveLabs = () => {
  const [tab, setTab] = useState('upload');
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className="flex flex-wrap gap-2 mb-5">
        <TabButton active={tab === 'upload'} onClick={() => setTab('upload')} icon={Upload} label="Upload Demo" />
        <TabButton active={tab === 'chat'} onClick={() => setTab('chat')} icon={Bot} label="Ask My Notes" />
        <TabButton active={tab === 'quiz'} onClick={() => setTab('quiz')} icon={HelpCircle} label="Quick Quiz" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tab === 'upload' && (
          <>
            <UploadDemo />
            <ChatDemo />
          </>
        )}
        {tab === 'chat' && (
          <>
            <ChatDemo />
            <QuizDemo />
          </>
        )}
        {tab === 'quiz' && (
          <>
            <QuizDemo />
            <UploadDemo />
          </>
        )}
      </div>
    </section>
  );
};

export default InteractiveLabs;
