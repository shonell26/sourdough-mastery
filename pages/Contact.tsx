
import React from 'react';
import { Mail, MessageCircle, Instagram, Send, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Info Side */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-bark leading-tight">
                Let's Talk <br /> <span className="text-terracotta">Sourdough</span>.
              </h1>
              <p className="text-xl text-crust/60 max-w-md">
                Have questions about the bundle? Need troubleshooting advice for your starter? 
                Our team of passionate bakers is here to help.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                 <div className="bg-white p-4 rounded-2xl shadow-sm border border-wheat/10">
                    <Mail className="h-6 w-6 text-terracotta" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg mb-1">Email Support</h4>
                    <p className="text-crust/60">hello@sourdoughmastery.com</p>
                    <p className="text-xs text-crust/40 mt-1">We typically respond within 24 hours.</p>
                 </div>
              </div>
              
              <div className="flex items-start space-x-6">
                 <div className="bg-white p-4 rounded-2xl shadow-sm border border-wheat/10">
                    <Instagram className="h-6 w-6 text-terracotta" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg mb-1">Social Media</h4>
                    <p className="text-crust/60">@sourdoughmasterysystem</p>
                    <p className="text-xs text-crust/40 mt-1">Tag us in your bakes! #SourdoughSuccess</p>
                 </div>
              </div>

              <div className="flex items-start space-x-6">
                 <div className="bg-white p-4 rounded-2xl shadow-sm border border-wheat/10">
                    <MapPin className="h-6 w-6 text-terracotta" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg mb-1">The Farmhouse Studio</h4>
                    <p className="text-crust/60">123 Artisan Way, Wheatland OR</p>
                 </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-12 lg:p-16 rounded-[3rem] shadow-2xl border border-wheat/10">
             <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-crust/60 uppercase tracking-widest">Full Name</label>
                      <input 
                        type="text" 
                        placeholder="Claire Baker"
                        className="w-full bg-crumb/50 border-2 border-transparent focus:border-terracotta focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-sm font-bold text-crust/60 uppercase tracking-widest">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="claire@example.com"
                        className="w-full bg-crumb/50 border-2 border-transparent focus:border-terracotta focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all"
                      />
                   </div>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-crust/60 uppercase tracking-widest">Subject</label>
                   <select className="w-full bg-crumb/50 border-2 border-transparent focus:border-terracotta focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all appearance-none">
                      <option>Question about the Bundle</option>
                      <option>Technical Support</option>
                      <option>Starter Troubleshooting</option>
                      <option>Other</option>
                   </select>
                </div>

                <div className="space-y-2">
                   <label className="text-sm font-bold text-crust/60 uppercase tracking-widest">Your Message</label>
                   <textarea 
                     rows={5} 
                     placeholder="How can we help you on your sourdough journey?"
                     className="w-full bg-crumb/50 border-2 border-transparent focus:border-terracotta focus:bg-white rounded-2xl px-6 py-4 outline-none transition-all resize-none"
                   ></textarea>
                </div>

                <button className="w-full bg-bark text-yeast py-6 rounded-2xl font-black text-xl hover:bg-terracotta hover:text-white transition-all shadow-xl flex items-center justify-center space-x-3 group">
                   <span>Send Message</span>
                   <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
             </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
