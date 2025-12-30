
import React, { useState, useCallback, useMemo } from 'react';
import { useAppContext } from '../App';

const PRICES = {
  'heels': 'від 250 грн',
  'sole': 'від 300 грн',
  'stretch': '350 грн',
  'belt': '150 грн',
  'handles': 'від 450 грн',
  'hardware': 'від 200 грн',
  'bagPaint': 'від 1200 грн',
  'jacketPaint': 'від 2500 грн',
  'cleaning': 'від 600 грн',
  'corners': 'від 500 грн',
  'saphir': 'від 700 грн',
  'recolor': 'від 1500 грн'
};

const Services: React.FC = () => {
  const { t, theme } = useAppContext();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const categories = useMemo(() => [
    { key: 'base', name: t.services.categories.base, icon: '🛠️' },
    { key: 'restore', name: t.services.categories.restore, icon: '✨' },
    { key: 'premium', name: t.services.categories.premium, icon: '🎖️' },
  ], [t]);

  const getServicesForCategory = useCallback((key: string) => {
    const categoryMap: Record<string, string[]> = {
      base: ['heels', 'sole', 'stretch', 'belt', 'hardware'],
      restore: ['handles', 'jacketPaint', 'cleaning', 'corners'],
      premium: ['bagPaint', 'saphir', 'recolor']
    };

    return categoryMap[key].map(id => ({
      id,
      name: (t.services.items as any)[id],
      description: (t.services.items as any)[`${id}Desc`],
      price: (PRICES as any)[id]
    }));
  }, [t]);

  const toggleCategory = (key: string) => {
    setExpandedCategories(prev =>
      prev.includes(key) ? prev.filter(item => item !== key) : [...prev, key]
    );
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-10">
          <div className="max-w-3xl">
            <div className="h-3 md:h-4 w-20 md:w-24 bg-black dark:bg-amber-400 mb-6 md:mb-10 rounded-full"></div>
            <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 md:mb-8 text-black dark:text-white uppercase tracking-tighter leading-[0.9]">
              {t.services.title}
            </h2>
            <p className="text-black dark:text-stone-400 text-lg md:text-2xl font-bold border-l-4 border-black dark:border-stone-800 pl-6 md:pl-8 transition-colors">
              {t.services.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 xl:gap-12 items-start">
          {categories.map((cat) => {
            const isExpanded = expandedCategories.includes(cat.key);
            const categoryServices = getServicesForCategory(cat.key);

            return (
              <div 
                key={cat.key} 
                className={`rounded-[2.5rem] md:rounded-[3rem] transition-all duration-700 overflow-hidden border ${
                  theme === 'light' 
                  ? 'bg-white border-black shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)]' 
                  : 'bg-stone-900 border-white/5 shadow-2xl'
                } ${isExpanded ? 'ring-2 md:ring-4 ring-black dark:ring-amber-400 scale-[1.02]' : 'hover:scale-[1.01]'} will-change-transform transform-gpu`}
              >
                <button
                  onClick={() => toggleCategory(cat.key)}
                  className="w-full p-8 lg:p-10 xl:p-12 text-left flex flex-col focus:outline-none group relative h-full"
                >
                  <div className="flex justify-between items-start w-full mb-8 md:mb-12">
                    <div className="text-6xl md:text-7xl lg:text-8xl transition-all group-hover:scale-110 duration-500 drop-shadow-xl select-none">
                      {cat.icon}
                    </div>
                    <div className={`transition-transform duration-700 ${isExpanded ? 'rotate-180' : ''}`}>
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border-2 border-black dark:border-white/10 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-amber-400 transition-all shadow-xl">
                        <svg className="w-6 h-6 md:w-10 md:h-10 text-black dark:text-white group-hover:text-white dark:group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black text-black dark:text-white mb-4 md:mb-6 uppercase tracking-tighter leading-[0.9] break-words hyphens-auto">
                    {cat.name}
                  </h3>
                  
                  <div className="flex items-center gap-3 md:gap-4 mt-auto">
                    <span className="h-2 w-8 md:h-2.5 md:w-12 bg-black dark:bg-amber-400 rounded-full"></span>
                    <span className="text-black dark:text-stone-300 text-[10px] md:text-sm uppercase font-black tracking-widest whitespace-nowrap">
                      {categoryServices.length} {t.services.variants}
                    </span>
                  </div>
                </button>

                <div className={`grid transition-all duration-700 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <ul className="px-8 lg:px-10 xl:px-12 pb-10 md:pb-12 space-y-10 md:space-y-12">
                      {categoryServices.map((service) => (
                        <li key={service.id} className="flex flex-col group/item border-b-2 border-black/5 dark:border-white/5 pb-8 md:pb-10 last:border-0">
                          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-8">
                            <h4 className="font-black text-black dark:text-stone-200 text-xl md:text-2xl group-hover/item:text-amber-600 transition-colors uppercase tracking-tight leading-tight">
                              {service.name}
                            </h4>
                            <span className="font-black text-white dark:text-black whitespace-nowrap bg-black dark:bg-amber-400 px-4 py-2 md:px-6 md:py-3 rounded-xl text-xs md:text-sm shadow-2xl transition-all group-hover/item:scale-105">
                              {service.price}
                            </span>
                          </div>
                          {service.description && (
                            <p className="text-stone-900 dark:text-stone-500 text-base md:text-lg mt-4 md:mt-5 leading-relaxed font-bold italic">
                              {service.description}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
