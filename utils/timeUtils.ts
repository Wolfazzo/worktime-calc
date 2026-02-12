import { TimeState, CalculationResult } from '../types';

export const timeToSeconds = (time: TimeState): number => {
  const h = parseInt(time.hours || '0', 10);
  const m = parseInt(time.minutes || '0', 10);
  const s = parseInt(time.seconds || '0', 10);
  return (h * 3600) + (m * 60) + s;
};

export const calculateDiff = (start: TimeState, end: TimeState): CalculationResult | null => {
  const startSec = timeToSeconds(start);
  const endSec = timeToSeconds(end);

  let diff = endSec - startSec;

  if (diff < 0) {
    // Handling cases where end time is "smaller" than start time.
    // Based on requirements, we can return null (error) or handle midnight.
    // Prompt says: "Non è necessario gestire il cambio di giorno... salvo diversa indicazione".
    // But it also says "Validazione dei campi".
    // Let's return a negative result indicator via null or throwing, to let the UI handle the error message.
    return null;
  }

  const hours = Math.floor(diff / 3600);
  const remainingAfterHours = diff % 3600;
  const minutes = Math.floor(remainingAfterHours / 60);
  const seconds = remainingAfterHours % 60;

  return {
    hours,
    minutes,
    seconds,
    totalSeconds: diff
  };
};

export const formatTimeResult = (result: CalculationResult): string => {
  const parts = [];
  if (result.hours > 0) parts.push(`${result.hours} ${result.hours === 1 ? 'ora' : 'ore'}`);
  if (result.minutes > 0) parts.push(`${result.minutes} ${result.minutes === 1 ? 'minuto' : 'minuti'}`);
  if (result.seconds > 0 || parts.length === 0) parts.push(`${result.seconds} ${result.seconds === 1 ? 'secondo' : 'secondi'}`);
  
  return parts.join(', ');
};
