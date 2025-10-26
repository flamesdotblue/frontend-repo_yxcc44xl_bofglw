import { Brain, Upload, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-2 text-white"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <span className="font-semibold tracking-tight">SmartHub</span>
          </motion.a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#rag" className="hover:text-white transition-colors">RAG</a>
            <a href="#analytics" className="hover:text-white transition-colors">Analytics</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/90 hover:text-white transition-colors">
              <Sparkles className="h-4 w-4" />
              Demo
            </button>
            <button className="inline-flex items-center gap-2 rounded-xl bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm border border-white/10 transition-colors">
              <Upload className="h-4 w-4" />
              Upload
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
