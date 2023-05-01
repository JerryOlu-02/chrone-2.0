import { useState, useMemo, useEffect } from 'react';

export const useObserver = function (elementRef, rootElement) {
  const [isTouching, setIsTouching] = useState(null);
  const [observerEntry, setObserverEntry] = useState(null);

  const observerHandler = function (entries, observe) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    setIsTouching(entry.isIntersecting);
    setObserverEntry(entry);
  };

  const options = useMemo(() => {
    return {
      root: rootElement,
      threshold: 0.3,
    };
  }, [rootElement]);

  useEffect(() => {
    const observer = new IntersectionObserver(observerHandler, options);
    const target = elementRef.current;

    if (target) observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [options, elementRef]);

  return [observerEntry, isTouching];
};
