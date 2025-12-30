
import React, { useEffect, useState, useRef } from 'react';
import { useAppContext } from '../App';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const { t, theme } = useAppContext();
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Використовуємо requestAnimationFrame для плавної анімації без навантаження на процесор
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      requestRef.current = requestAnimationFrame(() => {
        setOffsetY(window.pageYOffset);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-black transition-colors duration-700">
      <div 
        className="absolute inset-0 z-0 opacity-20 dark:opacity-40 grayscale will-change-transform"
        style={{ transform: `translateY(${offsetY * 0.2}px) scale(1.05)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=70&w=1200"
          className="w-full h-full object-cover"
          alt="Premium Leather Care"
          loading="eager" 
        />
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(#00000030_2px,transparent_2px)] dark:bg-[radial-gradient(#ffffff08_1.5px,transparent_1.5px)] [background-size:80px_80px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-end gap-20">
          <div className="flex-1">
            <div className="inline-flex items-center gap-4 bg-black dark:bg-amber-400 text-white dark:text-black px-8 py-3 text-sm font-black tracking-[0.4em] uppercase mb-12 rounded-full shadow-2xl">
              <span className="w-3 h-3 bg-amber-500 dark:bg-black rounded-full animate-pulse"></span>
              SASHKA STUDIO | ODESSA
            </div>
            
            <h1 
              className="text-7xl md:text-[10rem] font-black mb-12 leading-[0.8] tracking-tighter text-black dark:text-white transition-colors uppercase"
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            />
            
            {/* Виправлено: Текст тепер text-black для кращої видимості */}
            <p className="text-black dark:text-stone-400 text-2xl md:text-4xl mb-16 max-w-3xl font-black leading-tight border-l-[12px] border-black dark:border-amber-400 pl-12 transition-all">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap gap-10">
              <a
                href="#services"
                className="group relative bg-black dark:bg-amber-400 text-white dark:text-black px-16 py-8 rounded-2xl font-black text-base uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-[0_30px_60px_rgba(0,0,0,0.4)]"
              >
                <span className="relative z-10">{t.hero.priceBtn}</span>
                <div className="absolute inset-0 bg-amber-600 opacity-0 group-hover:opacity-20 transition-opacity rounded-2xl"></div>
              </a>
              <a
                href="#contacts"
                className="bg-white dark:bg-white/5 backdrop-blur-md text-black dark:text-white border-4 border-black dark:border-white/20 px-16 py-8 rounded-2xl font-black text-base uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all shadow-2xl"
              >
                {t.hero.findBtn}
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block w-96 transform translate-y-20 will-change-transform">
             <div className={`${theme === 'light' ? 'bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-4 border-black' : 'bg-stone-900 shadow-2xl border-white/5'} p-12 rounded-[4rem] rotate-3 hover:rotate-0 transition-all duration-1000 transform-gpu`}>
                <div className="flex gap-2 text-amber-600 text-4xl mb-8">★★★★★</div>
                <p className="text-xl text-black dark:text-stone-300 italic mb-10 leading-relaxed font-black uppercase tracking-tight">"Сашка таки робить красиво. Мої старі снікерси тепер виглядають краще за нові з бутіка!"</p>
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center font-black text-xl">AS</div>
                  <p className="text-xs font-black text-black dark:text-stone-400 uppercase tracking-widest">— Преміум Клієнт</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -right-24 text-[30rem] font-black text-black/[0.08] dark:text-white/[0.02] select-none pointer-events-none whitespace-nowrap leading-none uppercase tracking-tighter transition-colors">
        STYLE
      </div>
    </section>
  );
};

export default Hero;
