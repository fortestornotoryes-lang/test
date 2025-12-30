
import React, { useEffect, useState, useRef } from 'react';
import { useAppContext } from '../App';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const { t, theme } = useAppContext();
  const requestRef = useRef<number>(null);

  useEffect(() => {
    const handleScroll = () => {
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

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white dark:bg-black transition-colors duration-700">
      <div 
        className="absolute inset-0 z-0 opacity-15 dark:opacity-30 grayscale will-change-transform"
        style={{ transform: `translateY(${offsetY * 0.2}px) scale(1.05)` }}
      >
        <img
          src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?auto=format&fit=crop&q=75&w=1400"
          className="w-full h-full object-cover"
          alt="Професійна реставрація шкіряного взуття Одеса"
          loading="eager" 
        />
      </div>

      <div className="absolute inset-0 z-0 bg-[radial-gradient(#00000020_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:40px_40px]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12 lg:gap-20">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 bg-black dark:bg-amber-400 text-white dark:text-black px-6 py-2 text-[10px] font-black tracking-[0.4em] uppercase mb-8 rounded-full shadow-lg">
              <span className="w-2 h-2 bg-amber-500 dark:bg-black rounded-full animate-pulse"></span>
              SASHKA STUDIO | ODESSA
            </div>
            
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter text-black dark:text-white transition-colors uppercase"
              dangerouslySetInnerHTML={{ __html: t.hero.title }}
            />
            
            <p className="text-black dark:text-stone-400 text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto lg:mx-0 font-bold leading-tight border-stone-200 dark:border-amber-400 lg:border-l-[6px] lg:pl-8 transition-all">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
              <a
                href="#services"
                onClick={(e) => handleScrollTo(e, 'services')}
                className="group relative bg-black dark:bg-amber-400 text-white dark:text-black px-8 py-4 md:px-12 md:py-6 rounded-xl font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all hover:scale-105 active:scale-95 shadow-xl"
              >
                {t.hero.priceBtn}
              </a>
              <a
                href="#contacts"
                onClick={(e) => handleScrollTo(e, 'contacts')}
                className="bg-white dark:bg-white/5 backdrop-blur-md text-black dark:text-white border-2 border-black dark:border-white/20 px-8 py-4 md:px-12 md:py-6 rounded-xl font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
              >
                {t.hero.findBtn}
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block w-80 transform translate-y-10">
             <div className={`${theme === 'light' ? 'bg-white shadow-2xl border-2 border-black' : 'bg-stone-900 shadow-2xl border-white/5'} p-8 rounded-[3rem] rotate-2 hover:rotate-0 transition-all duration-700`}>
                <div className="flex gap-1 text-amber-600 text-2xl mb-6">★★★★★</div>
                <p className="text-base text-black dark:text-stone-300 italic mb-8 leading-relaxed font-black uppercase tracking-tight">"Сашка таки робить красиво. Мої старі снікерси тепер виглядають краще за нові з бутіка!"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-black text-sm">AS</div>
                  <p className="text-[10px] font-black text-black dark:text-stone-400 uppercase tracking-widest">— Преміум Клієнт</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-12 -right-12 text-huge font-black text-black/[0.04] dark:text-white/[0.02] select-none pointer-events-none whitespace-nowrap leading-none uppercase tracking-tighter transition-colors">
        STYLE
      </div>
    </section>
  );
};

export default Hero;
