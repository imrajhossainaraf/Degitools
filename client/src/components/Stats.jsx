import React from 'react';

const stats = [
  { label: 'Active Users', value: '50K+' },
  { label: 'Premium Tools', value: '200+' },
  { label: 'Rating', value: '4.9' },
];

const Stats = () => {
  return (
    <section className="bg-primary py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-white text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center gap-2 relative">
              <div className="text-6xl font-extrabold tracking-tight">
                {stat.value}
              </div>
              <div className="text-lg font-medium opacity-80">
                {stat.label}
              </div>
              {idx < stats.length - 1 && (
                <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/20"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
