import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
        <div>
          © {year} SmartHub. Built for students who learn smarter.
        </div>
        <div className="flex items-center gap-4">
          <a className="hover:text-white" href="#rag">RAG</a>
          <a className="hover:text-white" href="#analytics">Analytics</a>
          <a className="hover:text-white" href="#features">Features</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
