import { useState, useEffect } from 'react';

export function useTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const opts = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Africa/Lagos',
        hour12: false,
      };
      setTime(now.toLocaleTimeString('en-GB', opts) + ' WAT');
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return time;
}
