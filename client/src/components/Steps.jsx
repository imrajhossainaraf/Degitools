import React from 'react';
import { MousePointer2, CreditCard, LayoutTemplate, Send } from 'lucide-react';

const steps = [
  {
    icon: MousePointer2,
    title: "Select Product",
    desc: "Browse our curated collection of premium digital tools and assets."
  },
  {
    icon: LayoutTemplate,
    title: "Customize",
    desc: "Tailor the tools to your specific workflow and project needs."
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    desc: "Fast and encrypted checkout with multiple payment options."
  },
  {
    icon: Send,
    title: "Boost Workflow",
    desc: "Start creating better products faster with your new digital toolkit."
  }
];

const Steps = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">How it Works</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm font-medium leading-relaxed">
            Get started with DigiTools in four simple steps and transform your digital workflow today.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-16 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center space-y-8 group">
              <div className="w-24 h-24 rounded-[32px] bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/30 group-hover:-translate-y-2">
                <step.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-slate-800">{step.title}</h3>
                <p className="text-[13px] text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[2px] bg-slate-100 -z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
