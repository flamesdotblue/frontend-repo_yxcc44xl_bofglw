import { motion } from 'framer-motion';
import { Upload, Brain, MessageCircle, BarChart3, FileText, BadgeCheck, LineChart, Bot } from 'lucide-react';

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

      {/* RAG Preview Section */}
      <section id="rag" className="mt-20 grid gap-6 lg:grid-cols-2">
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
            <Bot className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-semibold text-white">Ask Your Notes</h3>
          <p className="mt-2 text-white/70 text-sm">
            Chat with your uploaded content using retrieval-augmented generation. Answers cite relevant passages for trust.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-white/70">
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">Semantic search</div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">Source grounding</div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">Follow-up prompts</div>
            <div className="rounded-lg border border-white/10 bg-black/20 p-3">Citations</div>
          </div>
        </motion.div>

        <motion.div
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-pink-600/20 p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
        >
          <div className="text-sm text-white/80">
            <p className="font-medium text-white">Sample Q&A</p>
            <div className="mt-3 rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-white/90">Q: Explain the difference between supervised and unsupervised learning.</p>
              <p className="mt-2 text-white/80">A: Supervised learning uses labeled data to learn a mapping from inputs to outputs...
                <span className="text-indigo-300"> [See: Week2-lecture.pdf §3]</span>
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Analytics Preview Section */}
      <section id="analytics" className="mt-20">
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg">
              <LineChart className="h-5 w-5" />
            </div>
            <span className="text-xs text-white/60">Preview</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs text-white/60">Study Streak</p>
              <p className="mt-1 text-2xl font-semibold">7 days</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs text-white/60">Quiz Avg</p>
              <p className="mt-1 text-2xl font-semibold">86%</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-xs text-white/60">Flashcards Reviewed</p>
              <p className="mt-1 text-2xl font-semibold">132</p>
            </div>
          </div>

          <div className="mt-6 text-sm text-white/70">
            Track your progress over time and gamify your learning with XP, badges, and goals.
          </div>
        </motion.div>
      </section>
    </section>
  );
}
