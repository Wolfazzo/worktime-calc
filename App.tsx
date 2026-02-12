import React, { useState } from 'react';
import { Clock, PlayCircle, StopCircle, RefreshCw, Calculator, AlertCircle, CheckCircle2 } from 'lucide-react';
import { TimeSection } from './components/TimeSection';
import { Button } from './components/Button';
import { calculateDiff, formatTimeResult } from './utils/timeUtils';
import { TimeState, CalculationResult } from './types';

const INITIAL_TIME: TimeState = { hours: '', minutes: '', seconds: '' };

const App: React.FC = () => {
  const [startTime, setStartTime] = useState<TimeState>({ ...INITIAL_TIME });
  const [endTime, setEndTime] = useState<TimeState>({ ...INITIAL_TIME });
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);
    setResult(null);

    // Basic validation: Check if empty
    if (!startTime.hours && !startTime.minutes && !startTime.seconds) {
      setError("Inserisci orario inizio.");
      return;
    }
    if (!endTime.hours && !endTime.minutes && !endTime.seconds) {
      setError("Inserisci orario fine.");
      return;
    }

    // Fill empties with 00 for calculation
    const cleanStart = {
      hours: startTime.hours || '00',
      minutes: startTime.minutes || '00',
      seconds: startTime.seconds || '00'
    };
    const cleanEnd = {
      hours: endTime.hours || '00',
      minutes: endTime.minutes || '00',
      seconds: endTime.seconds || '00'
    };

    const diff = calculateDiff(cleanStart, cleanEnd);

    if (!diff) {
      setError("Fine < Inizio.");
      return;
    }

    setResult(diff);
  };

  const handleReset = () => {
    setStartTime({ ...INITIAL_TIME });
    setEndTime({ ...INITIAL_TIME });
    setResult(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-4 px-4 font-sans" style={{
      paddingTop: `max(1rem, var(--safe-area-inset-top))`,
      paddingBottom: `max(1rem, var(--safe-area-inset-bottom))`,
      paddingLeft: `max(1rem, var(--safe-area-inset-left))`,
      paddingRight: `max(1rem, var(--safe-area-inset-right))`
    }}>
      <div className="w-full max-w-full sm:max-w-md flex flex-col h-full gap-4 sm:gap-5">

        {/* Compact Header */}
        <header className="flex items-center justify-center gap-2 py-2">
          <div className="p-1.5 bg-violet-100 rounded-lg text-violet-600">
            <Clock size={20} />
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">Calcolo Ore</h1>
        </header>

        {/* Main Inputs */}
        <main className="flex-1 flex flex-col gap-4">

          <TimeSection
            title="Inizio"
            time={startTime}
            setTime={setStartTime}
            icon={<PlayCircle size={18} />}
          />

          <TimeSection
            title="Fine"
            time={endTime}
            setTime={setEndTime}
            icon={<StopCircle size={18} />}
          />

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <Button variant="secondary" onClick={handleReset} className="flex items-center justify-center gap-2 !py-2.5">
              <RefreshCw size={16} />
              <span>Reset</span>
            </Button>
            <Button onClick={handleCalculate} className="flex items-center justify-center gap-2 !py-2.5">
              <Calculator size={16} />
              Calcola
            </Button>
          </div>

          {/* Error Message - Compact */}
          {error && (
            <div className="bg-red-50 border border-red-200 p-3 rounded-xl animate-fade-in flex items-center gap-2 text-red-700">
              <AlertCircle size={18} className="shrink-0" />
              <p className="text-sm font-semibold">{error}</p>
            </div>
          )}

          {/* Result Display - Compact/Slim Version */}
          {result && (
            <div className="bg-slate-900 text-white rounded-xl p-4 shadow-lg shadow-violet-900/20 animate-fade-in mt-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4">
                <div className="flex items-center gap-2 text-violet-300">
                  <CheckCircle2 size={18} />
                  <span className="text-xs uppercase font-bold tracking-wider">Tempo Trascorso</span>
                </div>
                <div className="text-2xl font-bold leading-none text-right">
                  {formatTimeResult(result)}
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-700 flex justify-between items-center text-[10px] sm:text-xs text-slate-400 font-mono">
                <span>H:M:S &rarr; {String(result.hours).padStart(2, '0')}:{String(result.minutes).padStart(2, '0')}:{String(result.seconds).padStart(2, '0')}</span>
                <span>{result.totalSeconds} sec</span>
              </div>
            </div>
          )}

        </main>

        {/* Footer - Minimal */}
        <footer className="text-center pb-2">
          <p className="text-[10px] text-slate-400">WorkTime Calc</p>
        </footer>
      </div>
    </div>
  );
};

export default App;