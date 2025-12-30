
import React, { useState, useRef, useCallback } from 'react';
import { useLanguage } from '../App';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ before, after }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  }, []);

  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full overflow-hidden cursor-ew-resize select-none group"
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      <img 
        src={after} 
        alt="Після" 
        className="absolute inset-0 w-full h-full object-cover" 
        draggable={false}
      />
      
      <div 
        className="absolute inset-0 overflow-hidden" 
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src={before} 
          alt="До" 
          className="absolute inset-0 h-full object-cover" 
          style={{ width: containerRef.current?.offsetWidth || '100vw' }}
          draggable={false}
        />
        <span className="absolute top-4 left-4 bg-black/50 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded backdrop-blur-sm">
          {t.gallery.labels.before}
        </span>
      </div>

      <span className="absolute top-4 right-4 bg-amber-700/80 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded backdrop-blur-sm">
        {t.gallery.labels.after}
      </span>

      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-xl flex items-center justify-center transition-opacity"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center -ml-px border border-stone-200">
          <svg className="w-4 h-4 text-stone-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 7l-5 5m0 0l5 5m-5-5h18m-5-5l5 5m0 0l-5 5" />
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 text-white text-[10px] px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
        {t.gallery.hint}
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
