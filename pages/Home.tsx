import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Play, Star, Users, Flame, Info, Timer, GraduationCap } from 'lucide-react';
import { IMAGES, BOOKS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section - Background Image Removed as requested */}
      <section className="relative min-h-screen flex items-center bg-coffee-dark text-crumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center space-x-2 bg-terracotta/20 text-yeast border border-terracotta/30 px-4 py-2 rounded-full text-sm font-semibold tracking-wide">
                <Flame className="h-4 w-4 text-terracotta" />
                <span>ARTISAN SOURDOUGH BREAD MAKING FOR BEGINNERS</span>
              </div>
              <h1 className="font-serif text-5xl md:text-7xl font-black leading-tight">
                Master the Art of <br />
                <span className="text-terracotta">Sourdough Mastery</span> <br />
                Without the Confusion.
              </h1>
              <p className="text-xl text-crumb/80 leading-relaxed max-w-xl">
                Our proven <span className="text-yeast font-bold">72-hour sourdough starter protocol</span> and 
                <span className="text-yeast font-bold"> same-day baking timeline</span> takes you from novice to pro in just one week. 
                Skip the wasted flour and flat loaves.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/bundle" className="bg-terracotta text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-terracotta transition-all shadow-2xl shadow-terracotta/20 flex items-center justify-center space-x-3 group">
                  <span>Claim Your Bundle</span>
                  <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </Link>
                <button className="flex items-center justify-center space-x-3 text-crumb font-bold text-lg border-2 border-crumb/20 px-10 py-5 rounded-2xl hover:bg-crumb/10 transition-colors">
                  <Play className="h-5 w-5 fill-yeast text-yeast" />
                  <span>Free Starter Guide</span>
                </button>
              </div>
              <div className="flex items-center space-x-4 pt-4 border-t border-crumb/10">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/${i+50}/100/100`} className="h-12 w-12 rounded-full border-4 border-coffee-dark" alt="Baker Success Story" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center text-yeast">
                    {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                  </div>
                  <p className="font-bold text-crumb">Ranked #1 Sourdough Resource for Home Bakers</p>
                </div>
              </div>
            </div>
            <div className="relative group lg:block hidden">
              <div className="absolute -inset-4 bg-terracotta/20 rounded-[3rem] blur-3xl transform -rotate-6 group-hover:rotate-0 transition-transform duration-700"></div>
              <img 
                src={IMAGES.HERO_LOAF} 
                alt="Perfect Artisan Loaf with High Oven Spring" 
                className="relative rounded-[3rem] shadow-2xl z-10 border-4 border-coffee-bean/50 transform hover:scale-[1.01] transition-transform duration-500"
              />
              <div className="absolute -bottom-8 -left-8 bg-coffee-bean p-8 rounded-3xl shadow-2xl z-20 border border-terracotta/30">
                <p className="text-terracotta font-serif text-4xl font-bold mb-1">100%</p>
                <p className="text-yeast/60 text-xs font-black uppercase tracking-[0.2em]">Consistency Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust section removed as requested */}

      {/* SEO Optimized Long-Tail Content Section */}
      <section className="py-32 bg-crumb relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <h2 className="font-serif text-4xl md:text-6xl font-black text-coffee-dark leading-tight">
                Stop Wasting Flour on <br />
                <span className="text-terracotta underline decoration-wheat/30">Failed Starters.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex space-x-6 p-6 bg-white rounded-3xl shadow-sm border border-wheat/10 hover:shadow-xl transition-shadow">
                  <div className="bg-terracotta/10 p-4 rounded-2xl h-fit">
                    <Timer className="h-8 w-8 text-terracotta" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold">72-Hour Rapid Starter Protocol</h3>
                    <p className="text-coffee-dark/60 leading-relaxed">Most guides take weeks. Our accelerated method leverages precise microbial timing to get your starter vigorous and ready for its first bake in 3 days.</p>
                  </div>
                </div>
                <div className="flex space-x-6 p-6 bg-white rounded-3xl shadow-sm border border-wheat/10 hover:shadow-xl transition-shadow">
                  <div className="bg-coffee-dark/5 p-4 rounded-2xl h-fit">
                    <GraduationCap className="h-8 w-8 text-coffee-dark" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold">Same-Day Baking Timeline</h3>
                    <p className="text-coffee-dark/60 leading-relaxed">Learn the professional "Short-Bulk" technique that allows you to mix, shape, and bake within a single day without sacrificing that signature tang.</p>
                  </div>
                </div>
                <div className="flex space-x-6 p-6 bg-white rounded-3xl shadow-sm border border-wheat/10 hover:shadow-xl transition-shadow">
                  <div className="bg-wheat/10 p-4 rounded-2xl h-fit">
                    <Info className="h-8 w-8 text-wheat" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold">Artisan Troubleshooting Guides</h3>
                    <p className="text-coffee-dark/60 leading-relaxed">Instantly diagnose gummy crumb, flat crust, or overly sour flavor with our visual diagnostic charts used by professional bakeries.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src={IMAGES.BAKER_CLOSEUP} alt="Redhaired Baker Inspecting Sourdough Crumb" className="rounded-[4rem] shadow-2xl z-10 relative border-8 border-white" />
              <div className="absolute -top-10 -right-10 bg-yeast p-10 rounded-full shadow-2xl z-20 border-8 border-crumb hidden lg:flex flex-col items-center justify-center text-center w-48 h-48 rotate-12">
                <span className="font-serif text-4xl font-black text-coffee-dark">#1</span>
                <span className="text-[10px] font-black uppercase tracking-widest text-coffee-dark/40">Bestselling Bundle</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards - Coffee Theme */}
      <section className="py-32 bg-coffee-dark text-crumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-black italic text-yeast">Inside the Mastery System</h2>
            <p className="text-xl text-crumb/50 max-w-3xl mx-auto">
              We've deconstructed the complex chemistry of sourdough into 4 simple, high-impact manuals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {BOOKS.map((book) => (
              <div key={book.id} className="bg-coffee-bean/50 p-10 rounded-[2.5rem] border border-white/5 hover:border-terracotta/50 transition-all hover:-translate-y-4 group flex flex-col h-full">
                <div className="text-6xl font-serif font-black text-white/5 mb-6 group-hover:text-terracotta/20 transition-colors">0{book.id}</div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-yeast leading-tight">{book.title}</h3>
                <p className="text-crumb/60 text-sm mb-10 flex-grow leading-relaxed">{book.description}</p>
                <Link to="/bundle" className="inline-flex items-center space-x-2 text-terracotta font-black uppercase tracking-widest text-xs group-hover:text-white transition-colors">
                  <span>Explore Book</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dark Footer CTA - Background Pattern Removed */}
      <section className="py-32 bg-terracotta text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-12 relative z-10">
          <h2 className="font-serif text-5xl md:text-7xl font-black leading-tight">
            Stop Searching. <br /> Start Baking.
          </h2>
          <p className="text-2xl opacity-90 font-medium max-w-2xl mx-auto">
            Get instant access to the <span className="underline decoration-white/40 italic">Complete Sourdough Mastery System™</span> and bake your first artisan loaf this weekend.
          </p>
          <div className="flex flex-col items-center space-y-8">
            <Link to="/bundle" className="bg-coffee-dark text-yeast px-16 py-8 rounded-[2rem] font-black text-3xl hover:scale-105 transition-all shadow-3xl shadow-black/40 inline-block">
              Get The Bundle $37
            </Link>
            <div className="flex items-center space-x-12 text-white/60 font-black uppercase tracking-widest text-xs">
              <span className="flex items-center space-x-2"><CheckCircle2 className="h-4 w-4" /> <span>Instant PDF Access</span></span>
              <span className="flex items-center space-x-2"><CheckCircle2 className="h-4 w-4" /> <span>Updated for 2024</span></span>
              <span className="flex items-center space-x-2"><CheckCircle2 className="h-4 w-4" /> <span>30-Day Guarantee</span></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
