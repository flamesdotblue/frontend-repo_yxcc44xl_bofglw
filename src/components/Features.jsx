import { motion } from 'framer-motion';
import { Upload, Brain, MessageCircle, BarChart3, FileText, BadgeCheck } from 'lucide-react';

const features = [
  {
    icon: Upload,
    title: 'Upload Anything',
    desc: 'PDF, PPTX, DOCX, TXT, and images. We extract clean text automatically.',
  },
  {
    icon: Brain,
    title: 'AI Study Suite',
    desc: 'Summaries, clarifications, flashcards, quizzes, mind maps, and study plans powered by Gemini 2.5 Flash.',
  },
  {
    icon: MessageCircle,
    title: 'Ask My Notes (RAG)',
    desc: 'Context-aware Q&A with vector search for precise, grounded answers.',
  },
  {
    icon: BarChart3,
    title: 'Progress & Gamification',
    desc: 'Track scores, XP, badges, and trends to stay motivated over time.',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Everything you need to learn smarter
        </motion.h2>
        <motion.p
          className="mt-4 text-white/70"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
        >
          Built for students who want clarity, retention, and results — fast.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] hover:bg-white/[0.05] transition"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
              <f.icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-indigo-300/90">
              <BadgeCheck className="h-4 w-4" />
              <span>Production-ready design</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div id="upload" className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-indigo-600/30 via-purple-600/20 to-pink-600/20 p-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h4 className="text-xl font-semibold text-white">Start by uploading your notes</h4>
            <p className="mt-1 text-white/75 text-sm">We’ll parse and prepare them for AI-powered study in seconds.</p>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition shadow"
          >
            Upload Files
          </a>
        </div>
      </div>
    </section>
  );
}
