
import React, { useState, useMemo } from 'react';
import { GALLERY } from '../constants';
import BeforeAfterSlider from './BeforeAfterSlider';
import FadeInSection from './FadeInSection';
import { useAppContext } from '../App';

const Gallery: React.FC = () => {
    const [visibleCount, setVisibleCount] = useState(4);
    const { t, lang, theme } = useAppContext();

    const titlesUA = useMemo(() => ['Реставрація шкіри', 'Ремонт сумки Hermes', 'Хімчистка кросівок', 'Догляд за замшею', 'Ремонт шкіряної куртки', 'Реставрація портфеля'], []);
    const titlesRU = useMemo(() => ['Реставрация кожи', 'Ремонт сумки Hermes', 'Химчистка кроссовок', 'Уход за замшей', 'Ремонт кожаной куртки', 'Реставрация портфеля'], []);
    const descUA = useMemo(() => ['Повне відновлення кольору та структури елітної шкіри.', 'Відновлення ручок та кутів на дорогому аксесуарі.', 'Глибока очистка підошви та делікатних матеріалів верху.', 'Відновлення ворсу та обробка водовідштовхувальним засобом.', 'Заміна блискавки та фарбування потертостей.', 'Таки повернули блиск діловій людині!'], []);
    const descRU = useMemo(() => ['Полное восстановление цвета и структуры элитной кожи.', 'Восстановление ручек и углов на дорогом аксессуаре.', 'Глубока очистка подошвы и деликатных материалов верха.', 'Уход за замшей: восстановление ворса.', 'Замена молнии и покраска потертостей.', 'Таки вернули блеск деловому человеку!'], []);

    const visibleGallery = GALLERY.slice(0, visibleCount);
    const hasMore = visibleCount < GALLERY.length;

    return (
        <section id="gallery" className="py-24 bg-stone-50/50 dark:bg-[#0a0a0a] border-y border-stone-100 dark:border-white/5 transition-colors duration-700">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <FadeInSection className="text-center mb-20">
                    <div className="inline-block bg-stone-200 dark:bg-white/5 px-4 py-1.5 rounded-full text-[9px] font-black tracking-[0.4em] uppercase text-stone-600 dark:text-amber-400 mb-6 border border-stone-300/30 dark:border-white/10">
                        Portfolio
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter text-[#171717] dark:text-white uppercase transition-colors">
                        {t.gallery.title}
                    </h2>
                    <p className="text-stone-600 dark:text-stone-500 text-lg max-w-xl mx-auto font-bold italic">
                        {t.gallery.subtitle}
                    </p>
                </FadeInSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-20">
                    {visibleGallery.map((item, idx) => {
                        const title = lang === 'ua' ? titlesUA[idx] : titlesRU[idx];
                        const description = lang === 'ua' ? descUA[idx] : descRU[idx];

                        return (
                            <FadeInSection
                                key={idx}
                                delay={(idx % 2) * 100}
                                className="group"
                            >
                                <div className={`flex flex-col lg:flex-row gap-8 p-6 rounded-[2.5rem] border transition-all duration-500 ${
                                    theme === 'light' ? 'bg-white border-stone-200 shadow-lg' : 'bg-stone-900 border-white/5 shadow-2xl'
                                }`}>
                                    <div className="lg:w-1/2 relative overflow-hidden rounded-2xl aspect-square shadow-xl bg-stone-100 dark:bg-stone-950 border border-stone-100 dark:border-white/5">
                                        {item.beforeUrl ? (
                                            <BeforeAfterSlider
                                                before={`${item.beforeUrl}&w=500&q=75`}
                                                after={`${item.url}&w=500&q=75`}
                                                altText={title}
                                            />
                                        ) : (
                                            <img
                                                src={`${item.url}&w=500&q=75`}
                                                alt={title}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                                loading="lazy"
                                            />
                                        )}
                                    </div>

                                    <div className="lg:w-1/2 flex flex-col justify-center py-2">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
                                            <span className="text-[9px] font-black text-stone-500 uppercase tracking-[0.3em]">{t.gallery.done}</span>
                                        </div>
                                        <h4 className="text-[#171717] dark:text-white font-black text-2xl mb-4 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors uppercase tracking-tight leading-none">
                                            {title}
                                        </h4>
                                        <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed font-bold">
                                            {description}
                                        </p>
                                    </div>
                                </div>
                            </FadeInSection>
                        );
                    })}
                </div>

                {hasMore && (
                    <FadeInSection className="flex justify-center">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 4)}
                            className={`group px-12 py-5 font-black transition-all duration-300 rounded-xl border shadow-lg active:scale-95 ${
                                theme === 'light'
                                    ? 'bg-[#171717] text-white border-transparent hover:bg-black'
                                    : 'bg-white dark:bg-white/5 text-white border-white/10 hover:bg-amber-400 hover:text-black'
                            }`}
                        >
                            <span className="uppercase tracking-[0.3em] text-[10px] font-black">{t.gallery.showMore}</span>
                        </button>
                    </FadeInSection>
                )}
            </div>
        </section>
    );
};

export default React.memo(Gallery);
