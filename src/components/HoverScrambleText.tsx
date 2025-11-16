import { useEffect, useState } from 'react';

interface HoverScrambleTextProps {
  text: string;
  className?: string;
  shouldScramble: boolean;
}

const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?';

export const HoverScrambleText = ({ text, className = '', shouldScramble }: HoverScrambleTextProps) => {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    if (!shouldScramble) {
      setDisplayText(text);
      return;
    }

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
    }, 30);

    return () => clearInterval(interval);
  }, [text, shouldScramble]);

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
    </span>
  );
};
