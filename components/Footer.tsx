
import React from 'react';
import { Link } from 'react-router-dom';
import { Wheat, Instagram, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bark text-crumb pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <Wheat className="h-8 w-8 text-yeast" />
              <span className="font-serif text-2xl font-bold tracking-tight">
                Sourdough<span className="text-yeast">Mastery</span>
              </span>
            </Link>
            <p className="text-crumb/70 max-w-sm mb-6 leading-relaxed">
              Empowering artisan bakers worldwide with proven systems, 
              science-backed techniques, and foolproof recipes. Join our 
              community of over 10,000 successful home bakers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yeast transition-colors"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-yeast transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-yeast transition-colors"><Mail className="h-6 w-6" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-yeast">Quick Links</h4>
            <ul className="space-y-4 text-crumb/70">
              <li><Link to="/" className="hover:text-crumb transition-colors">Home</Link></li>
              <li><Link to="/bundle" className="hover:text-crumb transition-colors">The Bundle</Link></li>
              <li><Link to="/blog" className="hover:text-crumb transition-colors">Baker's Blog</Link></li>
              <li><Link to="/faq" className="hover:text-crumb transition-colors">FAQ & Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-yeast">Resources</h4>
            <ul className="space-y-4 text-crumb/70">
              <li><a href="#" className="hover:text-crumb transition-colors">Starter Guide</a></li>
              <li><a href="#" className="hover:text-crumb transition-colors">Baking Schedules</a></li>
              <li><a href="#" className="hover:text-crumb transition-colors">Troubleshooting</a></li>
              <li><Link to="/contact" className="hover:text-crumb transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-crumb/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-crumb/40">
          <p>© 2024 Sourdough Mastery System. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-crumb">Privacy Policy</a>
            <a href="#" className="hover:text-crumb">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
