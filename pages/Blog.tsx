
import React from 'react';
import { BLOG_POSTS, IMAGES } from '../constants';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1);

  return (
    <div className="bg-[#FDFBF7] min-h-screen pb-24">
      {/* Header */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
           <h1 className="font-serif text-5xl md:text-6xl font-bold text-bark">The Baker's Journal</h1>
           <p className="text-xl text-crust/60 max-w-2xl mx-auto">
             Guides, science, and inspiration for your artisan sourdough journey.
           </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl bg-white border border-wheat/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-auto overflow-hidden">
               <img 
                 src={featuredPost.image} 
                 className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                 alt={featuredPost.title}
               />
            </div>
            <div className="p-12 lg:p-20 flex flex-col justify-center space-y-6">
               <div className="flex items-center space-x-4 text-sm font-bold text-terracotta tracking-widest uppercase">
                  <span>{featuredPost.category}</span>
                  <span className="h-1 w-1 rounded-full bg-wheat/40"></span>
                  <span className="text-crust/40 uppercase">{featuredPost.date}</span>
               </div>
               <h2 className="font-serif text-4xl lg:text-5xl font-bold text-bark leading-tight group-hover:text-terracotta transition-colors">
                  {featuredPost.title}
               </h2>
               <p className="text-lg text-crust/60 leading-relaxed">
                  {featuredPost.excerpt}
               </p>
               <button className="flex items-center space-x-2 font-bold text-bark hover:text-terracotta transition-colors group/btn">
                  <span>Read Full Article</span>
                  <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="relative h-64 overflow-hidden rounded-3xl mb-6 shadow-lg">
                <img src={post.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-sm text-crust/40 font-medium">
                   <Calendar className="h-4 w-4" />
                   <span>{post.date}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-bark group-hover:text-terracotta transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-crust/60 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                   <span className="inline-flex items-center text-terracotta font-bold group-hover:space-x-4 transition-all">
                     Read Article <ArrowRight className="ml-2 h-4 w-4" />
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-5xl mx-auto px-4 mt-32">
         <div className="bg-bark rounded-[3rem] p-12 lg:p-20 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
               <Tag className="h-32 w-32 text-yeast" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-yeast leading-tight">Join Our Baking Community</h2>
            <p className="text-crumb/60 text-lg max-w-xl mx-auto">
              Get the latest recipes, baking tips, and special bundle offers delivered to your inbox every Sunday.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
               <input 
                 type="email" 
                 placeholder="yourname@email.com" 
                 className="flex-grow bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-crumb placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-terracotta"
               />
               <button className="bg-terracotta text-white px-8 py-4 rounded-xl font-bold hover:bg-yeast hover:text-bark transition-colors">
                 Subscribe
               </button>
            </form>
         </div>
      </section>
    </div>
  );
};

export default Blog;
