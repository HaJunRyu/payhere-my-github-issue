import { useRef } from 'react';

function useDebounce<T extends any[]>(callback: (...params: T) => void, delayMs: number) {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (...params: T) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = setTimeout(() => {
      callback(...params);
      timer.current = null;
    }, delayMs);
  };
}

export default useDebounce;
