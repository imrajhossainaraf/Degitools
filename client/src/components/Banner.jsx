import React from 'react';
import { Play } from 'lucide-react';

const Banner = () => {
  const dashboardImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426";
  
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-bold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            New: AI-Powered Tools Available
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-extrabold text-slate-800 leading-[1.1]">
            Supercharge Your <span className="text-primary">Digital Workflow</span>
          </h1>
          
          <p className="text-lg text-slate-500 max-w-lg leading-relaxed font-medium">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          <p className="text-sm text-slate-400 font-semibold tracking-wide">
            Explore Products
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-primary text-white font-bold py-4 px-10 rounded-2xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/25 active:scale-95">
              Explore Products
            </button>
            <button className="flex items-center justify-center gap-3 border-2 border-primary/20 text-primary font-bold py-4 px-10 rounded-2xl hover:bg-primary/5 transition-all active:scale-95">
              <Play className="w-5 h-5 fill-primary" />
              Watch Demo
            </button>
          </div>
        </div>
        
        <div className="relative animate-in fade-in slide-in-from-right duration-700">
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] group border border-slate-100">
            <img 
              src={dashboardImage} 
              alt="Digital Workflow Dashboard" 
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
            />
          </div>
          {/* Subtle background decoration */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
