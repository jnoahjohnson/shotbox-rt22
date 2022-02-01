import ImageSplit from "~/components/ImageSplit";
import NavBar from "~/components/NavBar";

export default function Index() {
  return (
    <div className="px-4 isolate">
      <NavBar />
      <section className="flex flex-col items-center w-full pt-32 max-w-6xl mx-auto md:items-center md:flex-row sticky top-0 z-0 -mt-20">
        <div className="md:w-5/12 h-full flex flex-col items-start justify-center mb-16">
          <h1 className="text-5xl font-bold mb-2 text-center md:text-left">
            <span className="text-primary">Incredible Stories</span> Are Meant
            To Be Shared
          </h1>
          <h2 className="text-2xl text-gray-600">
            Capture your memories today with the Shotbox Bundle
          </h2>
        </div>
        <img
          src="/images/hero-background.png"
          alt="Hands holding a book"
          className="md:w-7/12"
        />
      </section>
      <div className="relative -mx-4 -mt-4 z-20">
        <svg
          width="1728"
          height="350"
          viewBox="0 0 1728 350"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-5 6.10826C136.619 -21.7473 636.272 56.8697 1766 19.3347L1756.46 350H-4.8556L-5 6.10826Z"
            fill="#EFEFEF"
          />
        </svg>
      </div>
      <section className="relative bg-lightbg -mx-4 px-4 z-20 -mt-64">
        <div className="text-5xl font-bold md:text-left max-w-xl mx-auto mb-32">
          <h1 className="text-center">
            <span className="text-primary">
              The SHOTBOX Story Capture Bundle
            </span>{" "}
            has everything you need to capture your memories
          </h1>
        </div>
        <div className="text-5xl font-bold mb-32 md:text-left max-w-xl mx-auto">
          <h2 className="text-center">
            Best of all,
            <span className="text-primary"> it's simple</span>
          </h2>
        </div>
        <div className="text-5xl font-bold mb-32 md:text-left max-w-xl mx-auto">
          <h2 className="text-center">We promise.</h2>
        </div>

        <div className="sticky bottom-1 h-screen/3 mb-12 max-w-6xl mx-auto">
          <img
            src="/images/shotbox-main.jpg"
            alt="Shotbox on a shelf"
            className="w-full h-full object-center object-cover rounded"
          />
        </div>
      </section>
      <ImageSplit />
      <section className="relative bg-lightbg -mx-4 px-4 z-20 -mt-0 h-screen">
        <div className="text-5xl font-bold md:text-left max-w-xl mx-auto mb-32 flex items-center h-full">
          <h1 className="text-center">
            And with the perfect lighting built in, the
            <span className="text-primary"> results are incredible</span>{" "}
          </h1>
        </div>
      </section>
    </div>
  );
}
