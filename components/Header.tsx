
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wheat } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'The Bundle', path: '/bundle' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-coffee-dark/95 backdrop-blur-lg border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-terracotta/20 p-2 rounded-xl group-hover:bg-terracotta transition-colors">
               <Wheat className="h-8 w-8 text-yeast group-hover:text-coffee-dark transition-colors" />
            </div>
            <span className="font-serif text-2xl font-black tracking-tight text-crumb">
              Sourdough<span className="text-terracotta">Mastery</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-black uppercase tracking-widest transition-all hover:text-terracotta ${
                  location.pathname === link.path ? 'text-terracotta border-b-2 border-terracotta' : 'text-crumb/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/bundle"
              className="bg-terracotta text-white px-8 py-3 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-terracotta transition-all shadow-lg"
            >
              Get The Bundle
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-crumb p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-coffee-bean border-t border-white/5 px-6 py-10 space-y-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-2xl font-serif font-bold text-crumb hover:text-terracotta transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/bundle"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-terracotta text-white px-8 py-5 rounded-2xl font-black uppercase tracking-widest"
          >
            Get The Bundle
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
