import ImageSplit from "~/components/ImageSplit";
import NavBar from "~/components/NavBar";

export default function Index() {
  return (
    <div className="isolate px-4">
      <NavBar />
      <section className="sticky top-0 z-0 mx-auto -mt-20 flex w-full max-w-6xl flex-col items-center pt-32 md:flex-row md:items-center">
        <div className="mb-16 flex h-full flex-col items-start justify-center md:w-5/12">
          <h1 className="mb-2 text-center text-5xl font-bold md:text-left">
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
      <div className="relative z-20 -mx-4 -mt-4">
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
      <section className="relative z-20 -mx-4 -mt-64 bg-lightbg px-4">
        <div className="mx-auto mb-32 max-w-xl text-5xl font-bold md:text-left">
          <h1 className="text-center">
            <span className="text-primary">
              The SHOTBOX Story Capture Bundle
            </span>{" "}
            has everything you need to capture your memories
          </h1>
        </div>
        <div className="mx-auto mb-32 max-w-xl text-5xl font-bold md:text-left">
          <h2 className="text-center">
            Best of all,
            <span className="text-primary"> it's simple</span>
          </h2>
        </div>
        <div className="mx-auto mb-32 max-w-xl text-5xl font-bold md:text-left">
          <h2 className="text-center">We promise.</h2>
        </div>

        <div className="sticky bottom-1 mx-auto mb-12 h-screen/3 max-w-6xl">
          <img
            src="/images/shotbox-main.jpg"
            alt="Shotbox on a shelf"
            className="h-full w-full rounded object-cover object-center"
          />
        </div>
      </section>
      <ImageSplit />
      <section className="relative z-20 -mx-4 -mt-0 bg-lightbg px-4">
        <div className="sticky top-0 bottom-0 mx-auto mb-32 flex h-full max-w-xl items-center text-5xl font-bold md:text-left">
          <h1 className="text-center">
            And with the perfect lighting built in, the
            <span className="text-primary"> results are incredible</span>{" "}
          </h1>
        </div>
      </section>
    </div>
  );
}
