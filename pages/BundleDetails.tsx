import React from 'react';
import { Check, BookOpen, Calculator, Calendar, ListChecks, ArrowRight, Zap, Trophy, ShieldCheck } from 'lucide-react';
import { IMAGES, BOOKS, ACCELERATOR_PACK } from '../constants';

const BundleDetails: React.FC = () => {
  return (
    <div className="bg-crumb min-h-screen">
      {/* Search-First SEO Headline Section - Background Image Removed */}
      <section className="bg-coffee-dark text-crumb py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl space-y-8 animate-in fade-in duration-700">
            <h1 className="font-serif text-5xl md:text-7xl font-black leading-tight text-white">
              The Complete <span className="text-terracotta italic">Artisan</span> Sourdough Mastery System™
            </h1>
            <p className="text-2xl text-crumb/70 leading-relaxed font-medium">
              A scientifically backed, beginner-friendly framework designed to eliminate guesswork and produce 
              bakery-quality loaves from your very first bake.
            </p>
            <div className="flex flex-wrap gap-4">
               <span className="bg-terracotta/20 border border-terracotta/40 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-terracotta">Premium Training System</span>
               <span className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-yeast">Updated for 2024</span>
               <span className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest text-yeast">Instant Digital Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* Book Breakdown - SEO Structured H2s */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-24 space-y-4">
            <div className="bg-terracotta/10 p-4 rounded-full">
              <BookOpen className="h-8 w-8 text-terracotta" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-black text-coffee-dark">4 Comprehensive Training Manuals</h2>
            <p className="text-coffee-dark/50 max-w-xl text-lg">Every manual is built around our "Visual Success Path" to ensure you never get stuck.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-24">
            {BOOKS.map((book, index) => (
              <div key={book.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-6 bg-coffee-dark/5 rounded-[4rem] group-hover:bg-terracotta/10 transition-colors duration-500"></div>
                    <img 
                      src={index === 0 ? IMAGES.BOOK_MODERN : index === 1 ? IMAGES.BOOK_PIN_VERTICAL : index === 2 ? IMAGES.HERO_LOAF : IMAGES.BAKER_KITCHEN_1} 
                      alt={book.title} 
                      className="relative rounded-[3rem] shadow-2xl w-full aspect-[4/5] object-cover border-4 border-white"
                    />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-10">
                  <div className="inline-flex items-center space-x-4 bg-coffee-dark text-yeast font-black text-xs px-6 py-2 rounded-full uppercase tracking-widest">
                    Manual 0{index + 1}
                  </div>
                  <h3 className="font-serif text-5xl font-black text-coffee-dark leading-tight">{book.title}</h3>
                  <p className="text-2xl text-coffee-dark/60 leading-relaxed italic font-serif">"{book.description}"</p>
                  <ul className="space-y-6">
                    {book.features.map((feature, i) => (
                      <li key={i} className="flex items-start space-x-4 text-coffee-dark/80 group">
                        <div className="mt-1 bg-terracotta/10 p-1 rounded-lg group-hover:bg-terracotta transition-colors">
                          <Check className="h-5 w-5 text-terracotta group-hover:text-white" />
                        </div>
                        <span className="text-lg font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accelerator Pack - Conversion Section */}
      <section className="py-32 bg-coffee-dark text-crumb relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-10">
              <div className="flex items-center space-x-4">
                <Zap className="h-10 w-10 text-terracotta" />
                <h2 className="font-serif text-4xl font-black text-yeast">Sourdough Accelerator Pack™</h2>
              </div>
              <p className="text-xl text-crumb/60 leading-relaxed font-medium">
                We've included <span className="text-white font-black underline decoration-terracotta underline-offset-8">14 High-Impact Printables</span> to turn your kitchen into a professional artisan workspace.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {ACCELERATOR_PACK.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 text-sm font-bold text-crumb/80 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                    <Check className="h-4 w-4 text-terracotta" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-coffee-bean p-12 lg:p-16 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
                  <Trophy className="h-64 w-64 text-white" />
               </div>
               <h3 className="font-serif text-3xl font-black mb-10 text-center text-white relative z-10">The Baker's Cheat Sheet System</h3>
               <div className="space-y-6 relative z-10">
                  {[
                    "Visual Stage Photo Pack (What to look for)",
                    "Precise Timing Adjustment Charts",
                    "Hydration Scaling Calculator Sheets",
                    "Daily Sourdough Progress Log",
                    "Laminated Ready-Reference Cards"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center space-x-5 bg-white/5 p-5 rounded-3xl border border-white/10 hover:border-terracotta/50 transition-all">
                      <div className="bg-terracotta h-10 w-10 rounded-2xl flex items-center justify-center text-white font-black text-lg">{i+1}</div>
                      <span className="font-bold text-lg">{text}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table - SEO Final Conversion */}
      <section className="py-32 bg-crumb">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-[4rem] shadow-3xl border border-wheat/20 p-12 lg:p-24 text-center space-y-12 overflow-hidden relative">
            <div className="absolute -top-10 -right-10 bg-terracotta text-white px-20 py-10 rotate-12 font-black tracking-widest uppercase text-sm">
               Limited Time 80% Off
            </div>
            <div className="space-y-4">
               <h2 className="font-serif text-4xl md:text-6xl font-black text-coffee-dark leading-tight">Master Sourdough Today</h2>
               <p className="text-xl text-coffee-dark/50 font-medium">One-time payment. Lifetime updates. Zero recurring fees.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex items-baseline space-x-4 mb-10">
                 <span className="text-coffee-dark/20 text-4xl line-through font-black">$197</span>
                 <span className="text-8xl font-serif font-black text-coffee-dark">$37</span>
              </div>
              <button className="w-full max-w-lg bg-coffee-dark text-yeast px-16 py-8 rounded-[2.5rem] font-black text-3xl hover:bg-terracotta hover:text-white transition-all shadow-2xl flex items-center justify-center space-x-4 group">
                <span>Access The System</span>
                <ArrowRight className="h-8 w-8 group-hover:translate-x-3 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-wheat/10 text-xs font-black uppercase tracking-widest text-coffee-dark/40">
               <div className="flex flex-col items-center space-y-2">
                 <ShieldCheck className="h-6 w-6 text-terracotta" />
                 <span>30-Day Guarantee</span>
               </div>
               <div className="flex flex-col items-center space-y-2">
                 <Zap className="h-6 w-6 text-terracotta" />
                 <span>Instant Download</span>
               </div>
               <div className="flex flex-col items-center space-y-2 col-span-2 md:col-span-1">
                 <ListChecks className="h-6 w-6 text-terracotta" />
                 <span>Secure Checkout</span>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BundleDetails;