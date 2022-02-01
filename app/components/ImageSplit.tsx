import { useEffect, useRef, useState } from "react";

export default function ImageSplit() {
  return (
    <section className="relative bg-lightbg -mx-4 px-4 z-20 -mt-12 flex flex-col">
      <div className="flex w-full">
        <div className="w-2/3 h-screen sticky top-0 flex items-center">
          {currentImage === 0 ? (
            <img src="/images/image-1.jpg" className="relative rounded" />
          ) : null}
          {currentImage === 1 ? (
            <img src="/images/shotbox-main.jpg" className="relative rounded" />
          ) : null}
          {currentImage === 2 ? (
            <img src="/images/image-3.jpg" className="relative rounded" />
          ) : null}
          {currentImage === 3 ? (
            <img src="/images/image-4.jpg" className="relative rounded" />
          ) : null}
        </div>
        <div className="relative w-1/3 ">
          <div className="h-screen flex items-center">
            <h1 className="ml-10 text-bold max-w-lg font-bold text-5xl">
              All it takes is your phone
            </h1>
          </div>
          <div className="h-screen flex items-center">
            <h1
              className="ml-10 text-bold max-w-lg font-bold text-5xl"
              ref={containerRef}
            >
              Just place any item inside
            </h1>
          </div>
          <div className="h-screen flex items-center">
            <h1 className="ml-10 text-bold max-w-lg font-bold text-5xl">
              And take a picture
            </h1>
          </div>
          <div className="h-screen flex items-center">
            <h1 className="ml-10 text-bold max-w-lg font-bold text-5xl">
              It's so easy, anyone can do it
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
