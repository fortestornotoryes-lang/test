
import React from 'react';
import { useAppContext } from '../App';

const About: React.FC = () => {
    const { t, theme } = useAppContext();
    return (
        <section id="about" className="py-24 bg-stone-50 dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-500">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[10rem] md:text-[12rem] font-black text-stone-900/[0.02] dark:text-white/[0.01] select-none pointer-events-none uppercase transition-colors">
                Heritage
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="lg:w-1/2 relative group">
                        <div className="absolute -inset-2 bg-amber-500/5 dark:bg-amber-400/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <img
                            src="https://images.unsplash.com/photo-1531938716357-224c16b5ace3?auto=format&fit=crop&q=75&w=800"
                            alt={t.seo.aboutAlt}
                            className="rounded-[2rem] shadow-xl relative z-10 w-full object-cover aspect-[4/5] border border-stone-200 dark:border-white/10 grayscale group-hover:grayscale-0 transition-all duration-700"
                            loading="lazy"
                        />
                        <div className={`absolute -bottom-6 -right-6 p-8 rounded-3xl z-20 border shadow-xl transition-all duration-500 ${
                            theme === 'light' ? 'bg-white border-stone-100' : 'bg-stone-900 border-white/10'
                        }`}>
                            <p className="text-amber-600 dark:text-amber-400 font-black text-5xl leading-none">15+</p>
                            <p className="text-stone-500 dark:text-stone-500 text-[9px] font-black uppercase tracking-widest mt-2">{t.about.years}</p>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="h-1.5 w-12 bg-amber-600 dark:bg-amber-400 mb-8 transition-colors"></div>
                        <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-stone-900 dark:text-white uppercase tracking-tighter">
                            {t.about.title}
                        </h2>

                        <div className="space-y-6 mb-10">
                            <p className="text-stone-700 dark:text-stone-300 text-lg md:text-xl font-medium leading-relaxed italic border-l-4 border-amber-500 dark:border-amber-400 pl-6 transition-all">
                                {t.about.p1}
                            </p>
                            <p className="text-stone-500 dark:text-stone-500 text-base leading-relaxed">
                                {t.about.p2}
                            </p>
                        </div>

                        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 p-6 lg:p-8 rounded-3xl border transition-all duration-500 ${
                            theme === 'light' ? 'bg-white border-stone-200 shadow-lg' : 'bg-stone-800/50 border-white/5'
                        }`}>
                            <div className="group/feat">
                                <div className="text-amber-600 dark:text-amber-400 text-xl font-black mb-2 transition-transform group-hover/feat:translate-x-1">01.</div>
                                <h4 className="font-black text-stone-900 dark:text-white text-base mb-2 uppercase tracking-tighter">{t.about.feature1Title}</h4>
                                <p className="text-stone-500 dark:text-stone-600 text-[13px] leading-relaxed font-bold">{t.about.feature1Desc}</p>
                            </div>
                            <div className="group/feat">
                                <div className="text-amber-600 dark:text-amber-400 text-xl font-black mb-2 transition-transform group-hover/feat:translate-x-1">02.</div>
                                <h4 className="font-black text-stone-900 dark:text-white text-base mb-2 uppercase tracking-tighter">{t.about.feature2Title}</h4>
                                <p className="text-stone-500 dark:text-stone-600 text-[13px] leading-relaxed font-bold">{t.about.feature2Desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
