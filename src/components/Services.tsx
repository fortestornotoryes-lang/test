
import React, { useState, useCallback, useMemo } from 'react';
import { useAppContext } from '../App';

const PRICES = {
  'heels': 'від 250 ₴',
  'sole': 'від 300 ₴',
  'stretch': '350 ₴',
  'belt': '150 ₴',
  'handles': 'від 450 ₴',
  'hardware': 'від 200 ₴',
  'bagPaint': 'від 1200 ₴',
  'jacketPaint': 'від 2500 ₴',
  'cleaning': 'від 600 ₴',
  'corners': 'від 500 ₴',
  'saphir': 'від 700 ₴',
  'recolor': 'від 1500 ₴'
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
    <section id="services" className="py-20 md:py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:mb-20">
          <div className="h-2 w-16 bg-black dark:bg-amber-400 mb-6 rounded-full"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-black dark:text-white uppercase tracking-tighter leading-none">
            {t.services.title}
          </h2>
          <p className="text-stone-600 dark:text-stone-400 text-base md:text-xl font-bold max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {categories.map((cat) => {
            const isExpanded = expandedCategories.includes(cat.key);
            const categoryServices = getServicesForCategory(cat.key);

            return (
              <div 
                key={cat.key} 
                className={`rounded-[2rem] transition-all duration-500 overflow-hidden border ${
                  theme === 'light' 
                  ? 'bg-white border-stone-200 shadow-xl' 
                  : 'bg-stone-900 border-white/5 shadow-2xl'
                } ${isExpanded ? 'ring-2 ring-black dark:ring-amber-400' : 'hover:border-stone-400 dark:hover:border-stone-700'}`}
              >
                <button
                  onClick={() => toggleCategory(cat.key)}
                  className="w-full p-8 lg:p-10 text-left flex flex-col focus:outline-none group"
                >
                  <div className="flex justify-between items-start w-full mb-8">
                    <div className="text-5xl transition-transform group-hover:scale-110 duration-500 drop-shadow-lg select-none">
                      {cat.icon}
                    </div>
                    <div className={`transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                      <div className="w-10 h-10 rounded-xl border-2 border-stone-200 dark:border-white/10 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-amber-400 transition-all">
                        <svg className="w-4 h-4 text-black dark:text-white group-hover:text-white dark:group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-black text-black dark:text-white mb-4 uppercase tracking-tighter leading-none break-words">
                    {cat.name}
                  </h3>
                  
                  <div className="flex items-center gap-3 mt-4">
                    <span className="h-1.5 w-8 bg-black dark:bg-amber-400 rounded-full"></span>
                    <span className="text-stone-500 dark:text-stone-400 text-[10px] uppercase font-black tracking-widest whitespace-nowrap">
                      {categoryServices.length} {t.services.variants}
                    </span>
                  </div>
                </button>

                <div className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <ul className="px-8 lg:px-10 pb-10 space-y-6">
                      {categoryServices.map((service) => (
                        <li key={service.id} className="flex flex-col group/item border-b border-stone-100 dark:border-white/5 pb-6 last:border-0">
                          <div className="flex justify-between items-start gap-4">
                            <h4 className="font-black text-black dark:text-stone-200 text-lg group-hover/item:text-amber-600 transition-colors uppercase tracking-tight leading-tight">
                              {service.name}
                            </h4>
                            <span className="font-black text-white dark:text-black whitespace-nowrap bg-black dark:bg-amber-400 px-3 py-1.5 rounded-lg text-[10px] shadow-lg">
                              {service.price}
                            </span>
                          </div>
                          {service.description && (
                            <p className="text-stone-500 dark:text-stone-500 text-sm mt-2 leading-relaxed font-bold italic">
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
