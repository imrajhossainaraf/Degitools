import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <section className="py-32 px-6 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">Flexible Pricing</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium leading-relaxed">
            Choose the plan that fits your digital tool needs and career goals perfectly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Starter */}
          <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl transition-all duration-500">
            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-extrabold text-slate-800">Basic Pack</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-slate-900">$19</span>
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">/month</span>
              </div>
              <p className="text-[13px] text-slate-500 font-medium">Perfect for starters.</p>
            </div>
            <ul className="space-y-5 mb-12">
              <li className="flex gap-4 text-[13px] font-bold text-slate-600"><Check className="w-5 h-5 text-primary" /> 5 Basic Tools</li>
              <li className="flex gap-4 text-[13px] font-bold text-slate-600"><Check className="w-5 h-5 text-primary" /> Design Assets</li>
              <li className="flex gap-4 text-[13px] font-bold text-slate-600"><Check className="w-5 h-5 text-primary" /> Community Support</li>
              <li className="flex gap-4 text-[13px] font-bold text-slate-300 line-through"><Check className="w-5 h-5" /> API Access</li>
            </ul>
            <button className="w-full py-5 rounded-2xl font-extrabold border-2 border-primary/20 text-primary hover:bg-primary/5 transition-all active:scale-95">Get Started</button>
          </div>

          {/* Professional */}
          <div className="bg-white p-12 rounded-[40px] border-4 border-primary shadow-[0_30px_60px_rgba(124,58,237,0.15)] relative scale-105 z-10 overflow-hidden group">
            <div className="absolute top-0 right-0 bg-primary text-white px-8 py-2 rounded-bl-3xl text-[10px] font-black uppercase tracking-widest">
              Most Popular
            </div>
            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-extrabold text-slate-800">Pro Access</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-slate-900">$49</span>
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">/month</span>
              </div>
              <p className="text-[13px] text-slate-500 font-medium">For mid-career pros.</p>
            </div>
            <ul className="space-y-5 mb-12">
              <li className="flex gap-4 text-[13px] font-bold text-slate-600"><Check className="w-5 h-5 text-primary stroke-[3]" /> Unlimited Tools</li>
              <li className="flex gap-4 text-[13px] font-bold text-slate-600"><Check className="w-5 h-5 text-primary stroke-[3]" /> All Assets Included</li>
              <li className="flex gap-4 text-[13px] font-bold text-slate-600"><Check className="w-5 h-5 text-primary stroke-[3]" /> Full API Access</li>
              <li className="flex gap-4 text-[13px] font-bold text-slate-600"><Check className="w-5 h-5 text-primary stroke-[3]" /> Priority Support</li>
            </ul>
            <button className="w-full py-5 rounded-2xl font-extrabold bg-primary text-white shadow-xl shadow-primary/25 hover:bg-primary-dark transition-all active:scale-95 group-hover:-translate-y-1">Get Started</button>
          </div>

          {/* Elite */}
          <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-100/50 hover:shadow-2xl transition-all duration-500">
            <div className="space-y-6 mb-10">
              <h3 className="text-xl font-extrabold text-slate-800">Elite Toolkit</h3>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-slate-900">$99</span>
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">/month</span>
              </div>
              <p className="text-[13px] text-slate-500 font-medium">For power users.</p>
            </div>
            <ul className="space-y-5 mb-12">
              <li className="flex gap-4 text-[13px] font-bold text-slate-600"><Check className="w-5 h-5 text-primary" /> Everything in Pro</li>
              <li className="flex gap-4 text-[13px] font-bold text-slate-600"><Check className="w-5 h-5 text-primary" /> Custom Integration</li>
              <li className="flex gap-4 text-[13px] font-bold text-slate-600"><Check className="w-5 h-5 text-primary" /> Dedicated Manager</li>
              <li className="flex gap-4 text-[13px] font-bold text-slate-600"><Check className="w-5 h-5 text-primary" /> Network Access</li>
            </ul>
            <button className="w-full py-5 rounded-2xl font-extrabold border-2 border-primary/20 text-primary hover:bg-primary/5 transition-all active:scale-95">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
