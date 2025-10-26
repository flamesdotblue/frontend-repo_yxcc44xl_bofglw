import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pt-10 md:pt-16 lg:pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-14">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight"
          >
            The AI-Powered Student Knowledge Hub
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-white/80 max-w-xl"
          >
            Upload your notes and slides, then study smarter with summaries, clarifications, flashcards, quizzes, and RAG-based Q&A — all in one place.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            <a href="#upload" className="rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-5 py-2.5 text-sm font-medium transition">Upload Materials</a>
            <a href="#features" className="rounded-md border border-white/15 hover:bg-white/10 px-5 py-2.5 text-sm transition">Explore Features</a>
          </motion.div>
          <div className="mt-6 flex items-center gap-4 text-xs text-white/60">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Powered by Gemini, Pinecone, and MongoDB</span>
          </div>
        </div>

        <div className="relative h-[420px] md:h-[520px] lg:h-[560px] rounded-xl overflow-hidden border border-white/10 bg-white/5">
          <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0b1020]/0 via-transparent to-indigo-500/10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
