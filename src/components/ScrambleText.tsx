import { useEffect, useState } from 'react';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
}

const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?';

export const ScrambleText = ({ text, className = '', delay = 0, speed = 15 }: ScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(text);

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

        iteration += 1 / 2;
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, speed]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
    </span>
  );
};
