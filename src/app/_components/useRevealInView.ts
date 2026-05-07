'use client';

import { useEffect, useRef, useState } from 'react';

export function useRevealInView<T extends HTMLElement>(
  options?: IntersectionObserverInit,
) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setIsVisible(true);
        observer.disconnect();
      },
      options ?? { threshold: 0.2 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isVisible, options]);

  return { ref, isVisible };
}
