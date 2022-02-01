import { Transition } from "@headlessui/react";
import { AnimationProps, motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ImageSplit() {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const options = {
    root: null,
    rootMargin: "0px",
    threshhold: 1.0,
  };

  const containerRefOne = useRef(null);
  const containerRefTwo = useRef(null);
  const containerRefThree = useRef(null);
  const containerRefFour = useRef(null);

  useEffect(() => {
    const observerOne = new IntersectionObserver((entries) => {
      const [entry] = entries;
      console.log(entry);
      if (entry.isIntersecting) {
        setCurrentImage(0);
      }
    }, options);

    const observerTwo = new IntersectionObserver((entries) => {
      const [entry] = entries;
      console.log(entry);
      if (entry.isIntersecting) {
        setCurrentImage(1);
      }
    }, options);

    const observerThree = new IntersectionObserver((entries) => {
      const [entry] = entries;
      console.log(entry);
      if (entry.isIntersecting) {
        setCurrentImage(2);
      }
    }, options);

    const observerFour = new IntersectionObserver((entries) => {
      const [entry] = entries;
      console.log(entry);
      if (entry.isIntersecting) {
        setCurrentImage(3);
      }
    }, options);

    if (containerRefOne.current) observerOne.observe(containerRefOne.current);
    if (containerRefTwo.current) observerTwo.observe(containerRefTwo.current);
    if (containerRefThree.current)
      observerThree.observe(containerRefThree.current);
    if (containerRefFour.current)
      observerFour.observe(containerRefFour.current);

    return () => {
      if (containerRefOne.current)
        observerOne.unobserve(containerRefOne.current);
      if (containerRefTwo.current)
        observerTwo.unobserve(containerRefTwo.current);
      if (containerRefThree.current)
        observerThree.unobserve(containerRefThree.current);
      if (containerRefFour.current)
        observerFour.unobserve(containerRefFour.current);
    };
  }, [containerRefOne, options]);

  const variants: Variants = {
    show: { opacity: 1, scale: 1 },
    hide: { opacity: 0, scale: 0 },
  };

  return (
    <section className="relative bg-lightbg -mx-4 px-4 z-50 -mt-12 flex flex-col">
      <div className="flex w-full">
        <div className="w-2/3 h-screen sticky top-0 flex items-center">
          <motion.img
            src="/images/image-1.jpg"
            animate={currentImage === 0 ? "show" : "hide"}
            variants={variants}
            className="absolute left-0 top-0 bottom-0 my-auto rounded"
          />

          <motion.img
            src="/images/shotbox-main.jpg"
            animate={currentImage === 1 ? "show" : "hide"}
            variants={variants}
            className="absolute left-0 top-0 bottom-0 my-auto rounded"
          />

          <motion.img
            src="/images/image-3.jpg"
            animate={currentImage === 2 ? "show" : "hide"}
            variants={variants}
            className="absolute left-0 top-0 bottom-0 my-auto rounded"
          />

          <motion.img
            src="/images/image-4.jpg"
            animate={currentImage === 3 ? "show" : "hide"}
            variants={variants}
            className="absolute left-0 top-0 bottom-0 my-auto rounded"
          />
        </div>
        <div className="relative w-1/3 space-y-32">
          <div className="h-screen flex items-center">
            <h1
              className="ml-10 text-bold max-w-lg font-bold text-5xl"
              ref={containerRefOne}
            >
              All it takes is your phone
            </h1>
          </div>
          <div className="h-screen flex items-center">
            <h1
              className="ml-10 text-bold max-w-lg font-bold text-5xl"
              ref={containerRefTwo}
            >
              Just place any item inside
            </h1>
          </div>
          <div className="h-screen flex items-center">
            <h1
              className="ml-10 text-bold max-w-lg font-bold text-5xl"
              ref={containerRefThree}
            >
              And take a picture
            </h1>
          </div>
          <div className="h-screen flex items-center">
            <h1
              className="ml-10 text-bold max-w-lg font-bold text-5xl"
              ref={containerRefFour}
            >
              It's so easy, anyone can do it
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
