import { useState, useRef, useEffect } from "react";

const useElementOnScreen = ({ elements }: { elments: any[] }) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const options = {
    root: null,
    rootMargin: "0px",
    threshhold: 1.0,
  };

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      console.log(entry);
      if (entry.isIntersecting) {
        setCurrentImage(1);
      }
    }, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return [currentImage];
};
