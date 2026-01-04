import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  speed?: number;
  className?: string;
  cursorClassName?: string;
}

export function TypingAnimation({ 
  texts, 
  speed = 80,
  className = "",
  cursorClassName = ""
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentText.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (isDeleting && charIndex > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (!isDeleting && charIndex === currentText.length) {
      // Pause at end before deleting
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      // Move to next text
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, textIndex, isDeleting, texts, speed]);

  return (
    <span className={className}>
      {displayText}
      <span className={`animate-pulse ${cursorClassName}`}>|</span>
    </span>
  );
}
