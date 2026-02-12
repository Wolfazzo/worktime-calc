import React, { useState, useRef, useEffect } from 'react';

interface TimeInputUnitProps {
  value: string;
  onChange: (val: string) => void;
  max: number;
  label: string;
}

export const TimeInputUnit: React.FC<TimeInputUnitProps> = ({ value, onChange, max, label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Generate options for the dropdown
  const options = Array.from({ length: max + 1 }, (_, i) => i.toString().padStart(2, '0'));

  // Handle click outside and touch events to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col items-center gap-1 relative" ref={dropdownRef}>
      <span className="text-xs sm:text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</span>

      <div className="relative group w-full">
        <input
          type="text"
          value={value}
          readOnly
          onClick={handleToggle}
          onTouchEnd={(e) => {
            e.preventDefault();
            handleToggle();
          }}
          className="w-full min-h-[48px] h-14 sm:h-12 text-center text-2xl sm:text-2xl font-bold bg-white border-2 border-slate-200 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 outline-none transition-all tabular-nums text-slate-800 z-10 cursor-pointer caret-transparent selection:bg-transparent touch-manipulation"
          placeholder="00"
        />

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 max-h-48 sm:max-h-40 overflow-y-auto bg-white border-2 border-slate-200 rounded-lg shadow-xl z-50 smooth-scroll divide-y divide-slate-50">
            {options.map((opt) => (
              <button
                key={opt}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleSelect(opt);
                }}
                onClick={() => handleSelect(opt)}
                className={`w-full min-h-[44px] py-3 text-center text-base sm:text-sm font-medium hover:bg-violet-50 active:bg-violet-100 transition-colors touch-manipulation ${value === opt ? 'bg-violet-100 text-violet-700' : 'text-slate-600'
                  }`}
              >
                {opt}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};