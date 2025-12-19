
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { Plus, Minus, HelpCircle, ShieldCheck } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-crumb min-h-screen pb-24">
      {/* Header */}
      <section className="bg-white py-24 border-b border-wheat/10">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
           <HelpCircle className="h-12 w-12 text-terracotta mx-auto mb-4" />
           <h1 className="font-serif text-5xl font-bold text-bark">Common Questions</h1>
           <p className="text-xl text-crust/60 max-w-2xl mx-auto">
             Everything you need to know about the Sourdough Mastery System™ and your purchase.
           </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 mt-20">
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`border-2 rounded-2xl transition-all duration-300 ${
                openIndex === index ? 'bg-white border-terracotta shadow-xl' : 'bg-transparent border-wheat/20'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className={`text-lg font-bold ${openIndex === index ? 'text-bark' : 'text-crust'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-terracotta" />
                ) : (
                  <Plus className="h-5 w-5 text-wheat" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-crust/70 leading-relaxed border-t border-wheat/10 pt-4 mt-2 animate-in fade-in slide-in-from-top-2">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-20 bg-bark p-12 rounded-[2.5rem] text-center space-y-8">
           <div className="h-16 w-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
              <ShieldCheck className="h-8 w-8 text-yeast" />
           </div>
           <h3 className="font-serif text-2xl font-bold text-crumb">30-Day Happiness Guarantee</h3>
           <p className="text-crumb/60">
             We are so confident in our system that if you don't bake your first beautiful loaf 
             within 30 days of following the steps, we'll give you a full refund. No questions asked.
           </p>
           <button className="text-yeast font-bold border-b border-yeast/30 hover:text-white hover:border-white transition-all pb-1">
             Learn more about our guarantee
           </button>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
