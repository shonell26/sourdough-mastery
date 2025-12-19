import React from 'react';
import { IMAGES } from '../constants';
import { Quote, Heart, Sprout, Wheat } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-crumb min-h-screen pb-24">
      {/* Intro - Background Image Removed */}
      <section className="relative h-[40vh] flex items-center justify-center text-white overflow-hidden bg-coffee-dark">
        <div className="relative z-10 text-center space-y-6 px-4">
           <h1 className="font-serif text-5xl md:text-7xl font-bold">Our Story</h1>
           <p className="text-xl font-medium tracking-widest uppercase text-yeast">The Heart Behind the Crust</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-12 lg:p-20 space-y-10">
              <Quote className="h-12 w-12 text-terracotta/20" />
              <div className="space-y-6 text-lg leading-relaxed text-crust/80">
                <p>
                  Sourdough Mastery started as a personal quest in a small farmhouse kitchen. 
                  Like many home bakers, I was captivated by the magic of wild yeast but frustrated 
                  by the inconsistency and overwhelming complexity of traditional methods.
                </p>
                <p>
                  I spent two years deconstructing every variable—flour types, hydration ratios, 
                  ambient temperatures, and fermentation curves. What I discovered was that sourdough 
                  isn't about luck; it's about <span className="text-terracotta font-bold">rhythm and tools</span>.
                </p>
                <p>
                  Our mission is simple: to make the ancient art of sourdough baking accessible 
                  to the modern home cook. We believe that everyone should be able to bake a 
                  bakery-quality loaf in their own kitchen, fitting it seamlessly into a busy life.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-wheat/10">
                 <div className="space-y-2">
                    <Heart className="h-6 w-6 text-terracotta" />
                    <h4 className="font-bold">Passion</h4>
                    <p className="text-xs text-crust/50">Baked into every single recipe we create.</p>
                 </div>
                 <div className="space-y-2">
                    <Sprout className="h-6 w-6 text-terracotta" />
                    <h4 className="font-bold">Simplicity</h4>
                    <p className="text-xs text-crust/50">Removing complexity without losing quality.</p>
                 </div>
                 <div className="space-y-2">
                    <Wheat className="h-6 w-6 text-terracotta" />
                    <h4 className="font-bold">Tradition</h4>
                    <p className="text-xs text-crust/50">Honoring the ancient craft of wild fermentation.</p>
                 </div>
              </div>
            </div>
            <div className="hidden lg:block relative">
               <img src={IMAGES.BAKER_PORTRAIT} className="w-full h-full object-cover" alt="Founder" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-bark p-12 rounded-[2.5rem] text-crumb space-y-6">
                 <h3 className="font-serif text-3xl font-bold text-yeast leading-tight">Artisan results, <br />Everyday ease.</h3>
                 <p className="text-crumb/70">
                   We don't believe in elitist baking. We believe in high standards 
                   that are actually achievable for real people with real jobs and real families.
                 </p>
              </div>
              <div className="relative rounded-[2.5rem] overflow-hidden lg:col-span-2">
                 <img src={IMAGES.BAKER_LIFESTYLE} className="w-full h-full object-cover brightness-75" />
                 <div className="absolute inset-0 flex items-center justify-center p-12">
                    <p className="font-serif text-3xl md:text-4xl text-white text-center italic leading-relaxed">
                      "Sourdough is a conversation between you and the environment. We just give you the language."
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default About;