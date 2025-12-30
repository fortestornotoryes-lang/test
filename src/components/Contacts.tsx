
import React from 'react';
import { CONTACTS } from '../constants';
import { useAppContext } from '../App';

const Contacts: React.FC = () => {
  const { t, theme } = useAppContext();
  const phoneNumberClean = CONTACTS.phone.replace(/[^0-9+]/g, '');

  return (
    <section id="contacts" className="py-32 bg-white dark:bg-[#0a0a0a] text-[#171717] dark:text-white relative transition-colors duration-700">
       {/* Background accent */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-stone-50 dark:bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="h-1.5 w-24 bg-amber-600 dark:bg-amber-400 mb-10 rounded-full"></div>
            <h2 className="text-6xl md:text-8xl font-black mb-16 tracking-tighter uppercase leading-none">{t.contacts.title}</h2>
            <div className="grid gap-10">
              <div className={`p-10 rounded-[2.5rem] border group transition-all duration-700 ${
                theme === 'light' ? 'bg-white border-stone-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] hover:border-amber-500' : 'glass border-white/5 hover:border-amber-400/20 shadow-2xl'
              }`}>
                <div className="flex items-center gap-8">
                  <div className="p-5 bg-[#171717] dark:bg-amber-400 rounded-[1.5rem] group-hover:scale-110 transition-all shadow-xl shadow-black/20">
                    <svg className="w-10 h-10 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 mb-2">{t.contacts.address}</h4>
                    <p className="text-2xl font-bold text-[#171717] dark:text-white leading-tight">{CONTACTS.address}</p>
                  </div>
                </div>
              </div>

              <div className={`p-10 rounded-[2.5rem] border group transition-all duration-700 ${
                theme === 'light' ? 'bg-white border-stone-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] hover:border-amber-500' : 'glass border-white/5 hover:border-amber-400/20 shadow-2xl'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
                  <div className="flex items-center gap-8">
                    <div className="p-5 bg-amber-600 dark:bg-amber-400 rounded-[1.5rem] group-hover:scale-110 transition-all shadow-xl shadow-amber-600/20">
                      <svg className="w-10 h-10 text-white dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 mb-2">{t.contacts.phone}</h4>
                      <p className="text-3xl font-black text-[#171717] dark:text-white">{CONTACTS.phone}</p>
                    </div>
                  </div>
                  <a 
                    href={`tel:${phoneNumberClean}`}
                    className="bg-[#171717] dark:bg-white text-white dark:text-black text-[10px] px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] hover:bg-amber-600 dark:hover:bg-amber-400 transition-all shadow-xl active:scale-95 text-center"
                  >
                    {t.contacts.callBtn}
                  </a>
                </div>
              </div>

              <div className={`p-10 rounded-[2.5rem] border group transition-all duration-700 ${
                theme === 'light' ? 'bg-white border-stone-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.06)] hover:border-amber-500' : 'glass border-white/5 hover:border-amber-400/20 shadow-2xl'
              }`}>
                <div className="flex items-center gap-8">
                  <div className="p-5 bg-stone-100 dark:bg-stone-800 rounded-[1.5rem] group-hover:scale-110 transition-all shadow-sm">
                    <svg className="w-10 h-10 text-stone-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-black text-[10px] uppercase tracking-[0.4em] text-stone-400 dark:text-stone-500 mb-2">{t.contacts.hours}</h4>
                    <p className="text-2xl font-bold text-[#171717] dark:text-white leading-tight">{CONTACTS.workHours}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[650px] rounded-[4rem] overflow-hidden border-[12px] border-stone-100 dark:border-white/5 shadow-2xl hover:border-amber-500/10 transition-all duration-1000 grayscale-[0.5] hover:grayscale-0">
            <iframe
              src={CONTACTS.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ 
                border: 0, 
                filter: theme === 'dark' ? 'invert(90%) hue-rotate(180deg) brightness(0.9) contrast(1.2)' : 'grayscale(0.2) contrast(1.1)',
                transition: 'filter 1s ease-in-out'
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
