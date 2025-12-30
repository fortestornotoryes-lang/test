
import React, { useState, createContext, useContext, useEffect, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import FadeInSection from './components/FadeInSection';
import { translations } from './translations';

type Language = 'ua' | 'ru';
type Theme = 'light' | 'dark';

interface AppContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    theme: Theme;
    toggleTheme: () => void;
    t: typeof translations.ua;
}

console.log(1);

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext must be used within AppProvider');
    return context;
};

const App: React.FC = () => {
    const [lang, setLangState] = useState<Language>(() => {
        return (localStorage.getItem('lang') as Language) || 'ua';
    });

    const [theme, setThemeState] = useState<Theme>(() => {
        const saved = localStorage.getItem('theme') as Theme;
        if (saved) return saved;
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    const setTheme = useCallback((newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem('theme', newTheme);
        const root = window.document.documentElement;
        if (newTheme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }, [theme, setTheme]);

    const setLang = useCallback((newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('lang', newLang);
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'theme' && e.newValue) {
                setTheme(e.newValue as Theme);
            }
            if (e.key === 'lang' && e.newValue) {
                setLangState(e.newValue as Language);
            }
        };

        mediaQuery.addEventListener('change', handleSystemThemeChange);
        window.addEventListener('storage', handleStorageChange);

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [setTheme]);

    const t = useMemo(() => translations[lang], [lang]);

    // ДИНАМІЧНЕ SEO
    useEffect(() => {
        // 1. Оновлюємо Title
        document.title = t.seo.title;

        // 2. Оновлюємо Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', t.seo.description);
        }

        // 3. Оновлюємо Keywords
        const metaKeywords = document.querySelector('meta[name="keywords"]');
        if (metaKeywords) {
            metaKeywords.setAttribute('content', t.seo.keywords);
        }

        // 4. Оновлюємо мову в атрибуті HTML
        document.documentElement.lang = lang === 'ua' ? 'uk' : 'ru';

        // 5. Оновлюємо OG локаль (для соцмереж, якщо вони раптом перерендують)
        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) {
            ogLocale.setAttribute('content', lang === 'ua' ? 'uk_UA' : 'ru_UA');
        }
    }, [t, lang]);

    return (
        <AppContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
            <div className="min-h-screen bg-white dark:bg-[#0a0a0a] text-black dark:text-stone-100 transition-colors duration-500 selection:bg-amber-100 dark:selection:bg-amber-900">
                <Header />
                <Hero />

                <FadeInSection id="services">
                    <Services />
                </FadeInSection>

                <FadeInSection id="about">
                    <About />
                </FadeInSection>

                <section className="bg-black dark:bg-amber-700 py-24 text-center text-white px-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent opacity-20"></div>
                    <h2 className="text-4xl md:text-7xl font-black mb-6 uppercase tracking-tighter relative z-10">{t.ctaSection.title}</h2>

                    <p className="max-w-2xl mx-auto text-xl text-stone-400 dark:text-amber-100 mb-12 font-bold italic relative z-10">
                        {t.ctaSection.subtitle}
                    </p>

                    <div className="flex justify-center gap-8 md:gap-16 text-[10px] md:text-xs uppercase tracking-[0.4em] font-black opacity-90 flex-wrap relative z-10">
                        {t.ctaSection.features.map((f, i) => (
                            <span key={i} className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-amber-500 rounded-full"></span>
                                {f}
              </span>
                        ))}
                    </div>
                </section>

                <div id="gallery">
                    <Gallery />
                </div>

                <FadeInSection id="contacts">
                    <Contacts />
                </FadeInSection>

                <footer className="bg-white dark:bg-stone-950 py-20 text-center border-t border-stone-100 dark:border-stone-800 transition-colors duration-500">
                    <div className="max-w-7xl mx-auto px-4">
                        <p className="mb-8 text-black dark:text-stone-300 font-black uppercase tracking-[0.4em] text-sm">{t.footer.brand}</p>
                        <div className="w-16 h-2 bg-amber-500 mx-auto mb-8"></div>
                        <p className="text-[10px] font-bold text-black dark:text-stone-600 uppercase tracking-widest">© {new Date().getFullYear()} {t.footer.rights}</p>
                    </div>
                </footer>
            </div>
        </AppContext.Provider>
    );
};

export default App;
