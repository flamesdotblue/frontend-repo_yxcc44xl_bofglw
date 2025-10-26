import React from 'react';
import { Bot, LineChart, Upload, FileText, BookOpen, BadgeCheck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition">
    <div className="flex items-center gap-3">
      <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-white/70">{desc}</p>
      </div>
    </div>
  </div>
);

const ChatBubble = ({ role = 'user', children }) => (
  <div className={`max-w-[85%] rounded-2xl p-3 text-sm ${role === 'user' ? 'bg-indigo-500/20 ml-auto' : 'bg-white/10'} border border-white/10`}> 
    {children}
  </div>
);

const Features = () => {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-14">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold"
      >
        Everything you need to study smarter
      </motion.h2>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FeatureCard icon={Upload} title="Multi-format Uploads" desc="PDF, PPTX, DOCX, TXT, and images with OCR." />
        <FeatureCard icon={FileText} title="AI Summaries" desc="Concise overviews and section-wise notes." />
        <FeatureCard icon={BookOpen} title="Flashcards & Quizzes" desc="Generate practice cards and MCQs instantly." />
        <FeatureCard icon={Shield} title="Secure & Private" desc="Account-based access with JWT protection." />
      </div>

      <div id="upload" className="mt-10 rounded-xl border border-indigo-500/30 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-transparent p-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">Ready to begin?</h3>
            <p className="text-sm text-white/70">Drop your files and let SmartHub create summaries, flashcards, and quizzes.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 px-4 py-2 text-sm font-medium transition">
            <Upload className="h-4 w-4" /> Upload Files
          </a>
        </div>
      </div>

      <div id="rag" className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-2 mb-3">
            <Bot className="h-5 w-5" />
            <h3 className="font-semibold">RAG Q&A Preview</h3>
          </div>
          <div className="flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full px-2 py-1 bg-white/10 border border-white/10">Semantic search</span>
            <span className="rounded-full px-2 py-1 bg-white/10 border border-white/10">Grounded answers</span>
            <span className="rounded-full px-2 py-1 bg-white/10 border border-white/10">Citations</span>
            <span className="rounded-full px-2 py-1 bg-white/10 border border-white/10">Follow-ups</span>
          </div>
          <div className="mt-4 space-y-3">
            <ChatBubble role="user">Explain backpropagation like I’m new to ML.</ChatBubble>
            <ChatBubble>
              Backpropagation is how neural nets learn: compare prediction vs. target (loss), measure each weight’s influence (gradients), and nudge weights to reduce the loss. It repeats over examples until errors shrink.
              <div className="mt-2 text-[11px] text-white/60">Sources: Week2-Notes.pdf (p. 12), Lecture-3.pptx (slide 8)</div>
            </ChatBubble>
            <ChatBubble role="user">Why do we need an activation function?</ChatBubble>
            <ChatBubble>
              Without activation, the network is just linear algebra and can’t model curves. Non-linear activations let it learn complex patterns.
            </ChatBubble>
          </div>
          <div className="mt-4 text-xs text-white/60">Powered by embeddings + Pinecone retrieval</div>
        </div>

        <div id="analytics" className="rounded-xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center gap-2 mb-3">
            <LineChart className="h-5 w-5" />
            <h3 className="font-semibold">Analytics Preview</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-[11px] text-white/60">Study Streak</div>
              <div className="text-lg font-semibold">7 days</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-[11px] text-white/60">Quiz Avg</div>
              <div className="text-lg font-semibold">86%</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-3">
              <div className="text-[11px] text-white/60">Cards Reviewed</div>
              <div className="text-lg font-semibold">142</div>
            </div>
          </div>
          <div className="mt-5 h-32 rounded-lg border border-white/10 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 p-3">
            <div className="h-full w-full flex items-end gap-1">
              {[8,12,10,14,18,16,20,22,19,24,26,23].map((h, i) => (
                <div key={i} className="flex-1 bg-indigo-500/40 rounded-t" style={{ height: `${h * 4}px` }} />
              ))}
            </div>
          </div>
          <div className="mt-3 inline-flex items-center gap-1 text-xs text-emerald-400">
            <BadgeCheck className="h-4 w-4" /> Progress trending up this week
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
