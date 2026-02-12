import React from 'react';
import { TimeInputUnit } from './TimeInputUnit';
import { TimeState } from '../types';

interface TimeSectionProps {
  title: string;
  time: TimeState;
  setTime: (time: TimeState) => void;
  icon?: React.ReactNode;
}

export const TimeSection: React.FC<TimeSectionProps> = ({ title, time, setTime, icon }) => {
  const handleChange = (field: keyof TimeState, value: string) => {
    setTime({ ...time, [field]: value });
  };

  return (
    <div className="bg-white p-5 sm:p-6 rounded-xl shadow-sm border border-slate-100">
      <div className="flex items-center gap-2 mb-3 sm:mb-4">
        {icon && <span className="text-violet-500">{icon}</span>}
        <h2 className="text-sm sm:text-base font-semibold text-slate-800">{title}</h2>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-4">
        <TimeInputUnit
          label="Ore"
          max={23}
          value={time.hours}
          onChange={(v) => handleChange('hours', v)}
        />
        <div className="relative flex justify-center">
          <span className="absolute top-1/2 -translate-y-1 text-2xl font-bold text-slate-300 select-none pointer-events-none">:</span>
          <TimeInputUnit
            label="Min"
            max={59}
            value={time.minutes}
            onChange={(v) => handleChange('minutes', v)}
          />
        </div>
        <div className="relative flex justify-center">
          <span className="absolute top-1/2 -translate-y-1 text-2xl font-bold text-slate-300 select-none pointer-events-none">:</span>
          <TimeInputUnit
            label="Sec"
            max={59}
            value={time.seconds}
            onChange={(v) => handleChange('seconds', v)}
          />
        </div>
      </div>
    </div>
  );
};