import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative">
      <div className="relative h-[640px] w-full overflow-hidden rounded-b-[2rem] border-b border-white/10 bg-[#05060A]">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        {/* Gradient overlays should not block interaction with 3D scene */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
          <div className="max-w-2xl">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              SmartHub — Your AI-Powered Student Knowledge Hub
            </motion.h1>
            <motion.p
              className="mt-5 text-base sm:text-lg text-white/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Upload notes, get instant summaries, flashcards, quizzes, and RAG-backed Q&A. Learn faster with
              Gemini 2.5 Flash.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-500/20 hover:opacity-95 transition"
              >
                Launch Dashboard
              </a>
              <a
                href="#upload"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10 transition"
              >
                Upload Notes
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
