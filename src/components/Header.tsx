
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contacts, href: '#contacts' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80; // Висота шапки
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-2xl px-6 flex justify-between items-center h-16 transition-all duration-500 border ${
          scrolled 
          ? 'shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:shadow-2xl border-stone-200 dark:border-white/10' 
          : 'border-transparent'
        } ${
          theme === 'light' ? 'bg-white/95 backdrop-blur-2xl' : 'bg-black/70 backdrop-blur-xl'
        }`}>
          {/* Logo */}
          <div className="flex items-center">
            <span 
              className="text-xl font-black tracking-tighter cursor-pointer brand-font flex items-center gap-2" 
              onClick={() => { window.scrollTo({top: 0, behavior: 'smooth'}); setIsOpen(false); }}
            >
              <span className="bg-black dark:bg-amber-400 text-white dark:text-black px-3 py-1 rounded-lg transition-all shadow-xl">SASHKA</span>
              <span className="text-black dark:text-white hidden xs:inline transition-colors text-[10px] font-black uppercase tracking-widest ml-1">Робить Красиво</span>
            </span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600 dark:text-stone-400 hover:text-black dark:hover:text-amber-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            <div className="flex items-center gap-3">
              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-stone-100 dark:bg-white/5 hover:bg-stone-200 dark:hover:bg-amber-500/10 transition-all border border-stone-200 dark:border-white/10"
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
              onClick={(e) => handleLinkClick(e, '#contacts')}
              className="bg-black dark:bg-white text-white dark:text-black text-[10px] px-8 py-3 rounded-xl hover:bg-amber-600 dark:hover:bg-amber-400 transition-all font-black uppercase tracking-widest shadow-2xl"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
             <button onClick={toggleTheme} className="w-10 h-10 flex items-center justify-center rounded-xl bg-stone-100 dark:bg-white/5 border border-stone-200">
               {theme === 'dark' ? '☀️' : '🌙'}
             </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-10 h-10 flex items-center justify-center text-black dark:text-white"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsOpen(false)}></div>
        <div className={`absolute right-4 top-24 left-4 p-8 bg-white dark:bg-stone-900 rounded-[2.5rem] shadow-2xl border border-stone-200 dark:border-white/10 transition-all duration-500 transform ${isOpen ? 'translate-y-0 scale-100' : '-translate-y-10 scale-95'}`}>
          <div className="flex flex-col space-y-6 text-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xl font-black uppercase tracking-widest text-black dark:text-white"
              >
                {link.name}
              </a>
            ))}
            
            <div className="h-px bg-stone-100 dark:bg-white/5 my-4"></div>
            
            <div className="flex flex-col gap-6">
              <div className="flex justify-center items-center gap-4">
                <button 
                  onClick={() => { setLang('ua'); }}
                  className={`px-6 py-3 rounded-xl text-xs font-black transition-all ${lang === 'ua' ? 'bg-black dark:bg-amber-400 text-white dark:text-black' : 'bg-stone-100 dark:bg-white/5 text-stone-500'}`}
                >
                  УКРАЇНСЬКА
                </button>
                <button 
                  onClick={() => { setLang('ru'); }}
                  className={`px-6 py-3 rounded-xl text-xs font-black transition-all ${lang === 'ru' ? 'bg-black dark:bg-amber-400 text-white dark:text-black' : 'bg-stone-100 dark:bg-white/5 text-stone-500'}`}
                >
                  РУССКИЙ
                </button>
              </div>

              <a
                href="#contacts"
                onClick={(e) => handleLinkClick(e, '#contacts')}
                className="bg-amber-600 dark:bg-white text-white dark:text-black py-5 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl"
              >
                {t.nav.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
