
import React, { useState, useEffect } from 'react';
import { useAppContext } from '../App';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, theme, toggleTheme, t } = useAppContext();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contacts, href: '#contacts' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl px-6 flex justify-between items-center h-16 transition-all duration-500 border ${
          scrolled 
          ? 'shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:shadow-2xl border-stone-200 dark:border-white/10' 
          : 'border-transparent'
        } ${
          theme === 'light' ? 'bg-white/95' : 'bg-black/70'
        } backdrop-blur-2xl`}>
          <div className="flex items-center">
            <span className="text-xl font-black tracking-tighter cursor-pointer brand-font flex items-center gap-2" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <span className="bg-black dark:bg-amber-400 text-white dark:text-black px-3 py-1 rounded-lg transition-all shadow-xl">SASHKA</span>
              <span className="text-black dark:text-white hidden sm:inline transition-colors text-[10px] font-black uppercase tracking-widest ml-1">Робить Гарно</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-stone-100 dark:bg-white/5 hover:bg-stone-200 dark:hover:bg-amber-500/10 transition-all border border-stone-200 dark:border-white/10 shadow-sm"
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>

              <div className="flex items-center bg-stone-100 dark:bg-white/5 rounded-xl p-1 border border-stone-200 dark:border-white/10">
                <button 
                  onClick={() => setLang('ua')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${lang === 'ua' ? 'bg-white dark:bg-amber-400 text-black shadow-sm' : 'text-stone-500'}`}
                >
                  UA
                </button>
                <button 
                  onClick={() => setLang('ru')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-black transition-all ${lang === 'ru' ? 'bg-white dark:bg-amber-400 text-black shadow-sm' : 'text-stone-500'}`}
                >
                  RU
                </button>
              </div>
            </div>

            <a
              href="#contacts"
              className="bg-black dark:bg-white text-white dark:text-black text-[10px] px-8 py-3 rounded-xl hover:bg-amber-600 dark:hover:bg-amber-400 transition-all font-black uppercase tracking-widest shadow-2xl"
            >
              {t.nav.cta}
            </a>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button onClick={toggleTheme} className="w-10 h-10 flex items-center justify-center rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200">
               {theme === 'dark' ? '☀️' : '🌙'}
             </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-black dark:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
