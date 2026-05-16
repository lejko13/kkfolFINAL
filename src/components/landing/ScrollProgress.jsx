import React, { useState, useEffect } from 'react';
import { useMediaQuery } from "react-responsive";

export default function ScrollProgress() {
  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isDesktop) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  );
}