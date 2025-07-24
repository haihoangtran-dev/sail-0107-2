import { useEffect, useRef } from 'react';

export const useScrollAnimation = (
  animationType: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade-in' | 'scale-up' = 'fade-up',
  delay: number = 0
) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Add initial animation class
    element.classList.add('animate-hidden', `animate-${animationType}`);
    
    // Add delay if specified
    if (delay > 0) {
      element.style.animationDelay = `${delay}ms`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animationType, delay]);

  return elementRef;
};