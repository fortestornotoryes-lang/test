
import React from 'react';
import { useAppContext } from '../App';

const About: React.FC = () => {
  const { t, theme } = useAppContext();
  return (
    <section id="about" className="py-32 bg-stone-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-500">
      {/* Background Text Overlay */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] md:text-[20rem] font-black text-stone-900/[0.02] dark:text-white/[0.01] select-none pointer-events-none uppercase transition-colors">
        Heritage
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-amber-500/10 dark:bg-amber-400/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src="https://images.unsplash.com/photo-1531938716357-224c16b5ace3?auto=format&fit=crop&q=80&w=1000" 
              alt="Artisanal Workshop" 
              className="rounded-[2.5rem] shadow-2xl relative z-10 w-full object-cover aspect-[4/5] border border-stone-200 dark:border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            <div className={`absolute -bottom-10 -right-10 p-10 rounded-[2rem] z-20 border shadow-2xl transition-all duration-500 ${
              theme === 'light' ? 'bg-white border-stone-100' : 'glass border-white/10'
            }`}>
              <p className="text-amber-600 dark:text-amber-400 font-black text-7xl leading-none">15+</p>
              <p className="text-stone-500 dark:text-stone-400 text-[10px] font-black uppercase tracking-widest mt-2">{t.about.years}</p>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="h-1 w-16 bg-amber-600 dark:bg-amber-400 mb-8 transition-colors"></div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 leading-tight text-stone-900 dark:text-white uppercase tracking-tighter transition-colors">{t.about.title}</h2>
            
            <div className="space-y-8 mb-12">
              <p className="text-stone-600 dark:text-stone-300 text-xl font-medium leading-relaxed italic border-l-4 border-amber-500 dark:border-amber-400 pl-8 transition-all">
                {t.about.p1}
              </p>
              <p className="text-stone-500 dark:text-stone-400 text-lg leading-relaxed transition-colors">
                {t.about.p2}
              </p>
            </div>
            
            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-10 p-8 rounded-3xl border transition-all duration-500 ${
              theme === 'light' ? 'bg-white border-stone-200 shadow-xl shadow-stone-200/50' : 'glass border-white/5'
            }`}>
              <div className="group/feat">
                <div className="text-amber-600 dark:text-amber-400 text-2xl font-black mb-3 group-hover/feat:translate-x-2 transition-transform">01.</div>
                <h4 className="font-black text-stone-900 dark:text-white text-lg mb-3 uppercase tracking-tighter">{t.about.feature1Title}</h4>
                <p className="text-stone-500 dark:text-stone-500 text-sm leading-relaxed font-medium">{t.about.feature1Desc}</p>
              </div>
              <div className="group/feat">
                <div className="text-amber-600 dark:text-amber-400 text-2xl font-black mb-3 group-hover/feat:translate-x-2 transition-transform">02.</div>
                <h4 className="font-black text-stone-900 dark:text-white text-lg mb-3 uppercase tracking-tighter">{t.about.feature2Title}</h4>
                <p className="text-stone-500 dark:text-stone-500 text-sm leading-relaxed font-medium">{t.about.feature2Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
