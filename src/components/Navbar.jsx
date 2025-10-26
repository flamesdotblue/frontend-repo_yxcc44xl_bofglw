import React from 'react';
import { Rocket, Upload, User } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `hover:text-white transition ${isActive ? 'text-white' : 'text-white/80'}`}
  >
    {children}
  </NavLink>
);

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
            <Rocket className="h-4 w-4" />
          </div>
          <span className="font-semibold tracking-tight">SmartHub</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavItem to="/chat">RAG Q&A</NavItem>
          <NavItem to="/quiz">Quiz</NavItem>
          <NavItem to="/upload">Upload</NavItem>
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/upload" className="inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm hover:bg-white/10 transition">
            <Upload className="h-4 w-4" /> Upload
          </Link>
          <Link to="/login" className="inline-flex items-center gap-2 rounded-md bg-white text-black px-3 py-2 text-sm font-medium hover:bg-white/90 transition">
            <User className="h-4 w-4" /> Sign in
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
