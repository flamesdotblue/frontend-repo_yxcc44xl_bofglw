import React from 'react';
import { Rocket, Upload, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <Rocket className="h-4 w-4" />
          </div>
          <span className="font-semibold tracking-tight">SmartHub</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#rag" className="hover:text-white transition">RAG Q&A</a>
          <a href="#analytics" className="hover:text-white transition">Analytics</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#upload" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm hover:bg-white/10 transition">
            <Upload className="h-4 w-4" /> Upload
          </a>
          <a href="#auth" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90 transition">
            <User className="h-4 w-4" /> Sign in
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
