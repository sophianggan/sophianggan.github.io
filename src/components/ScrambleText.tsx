import { useEffect, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?';

export const ScrambleText = ({ text, className = '', delay = 0 }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      let iteration = 0;
      const originalText = text;
      
      const interval = setInterval(() => {
        setDisplayText(
          originalText
            .split('')
            .map((char, index) => {
              if (char === ' ') return ' ';
              if (index < iteration) return originalText[index];
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= originalText.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
    </span>
  );
};
