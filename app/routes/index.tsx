import ImageSplit from "~/components/ImageSplit";
import NavBar from "~/components/NavBar";

const productImages = [
  {
    src: "https://res.cloudinary.com/stashed/image/upload/q_auto:good/v1644420631/Shotbox/craft-zoomed-in-insta_afzmid.jpg",
  },
  {
    src: "https://res.cloudinary.com/stashed/image/upload/q_auto:good/v1644420623/Shotbox/photo-example_vgav1b.jpg",
  },
  {
    src: "https://res.cloudinary.com/stashed/image/upload/q_auto:good/v1644420607/Shotbox/31616865803_b663922c5d_o_oqzaxa.png",
  },
  {
    src: "https://res.cloudinary.com/stashed/image/upload/q_auto:good/v1644420605/Shotbox/21044298043_a5d3e196ef_o_djczzm.jpg",
  },
  {
    src: "https://res.cloudinary.com/stashed/image/upload/q_auto:good/v1644420604/Shotbox/scrapbook-example_u0cugn.jpg",
  },
  {
    src: "https://res.cloudinary.com/stashed/image/upload/q_auto:good/v1644420588/Shotbox/49861450687_571fc2a159_o_i0mzcy.jpg",
  },
];

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
      <section className="relative z-20 -mx-4 -mt-0 min-h-full bg-lightbg px-4">
        <div className="sticky top-0 bottom-0 z-10 mx-auto mb-32 flex h-screen max-w-xl items-center text-5xl font-bold md:text-left">
          <h1 className="text-center">
            And with the perfect lighting built in, the
            <span className="text-primary"> results are incredible</span>{" "}
          </h1>
        </div>
        <div className="relative z-20 mx-auto grid h-full max-w-4xl grid-cols-2 gap-2 bg-lightbg">
          {productImages.map((image, index) => (
            <img
              src={image.src}
              className={`aspect-square h-full w-full rounded-sm border-8 border-solid border-white object-cover`}
            />
          ))}
        </div>
      </section>
      <section className="relative z-20 -mx-4 -mt-0 bg-lightbg px-4 py-16">
        <div className="relative mx-auto flex h-full w-full max-w-6xl flex-row items-stretch justify-between overflow-hidden rounded shadow">
          <img
            className="w-1/3"
            src="https://res.cloudinary.com/stashed/image/upload/v1645586941/Shotbox/SHOTBOXmpsbannertall01_333e9e02-a47d-4eeb-a30b-ca356c232444_rpfaqz.jpg"
          />
          <div className="flex w-full flex-col items-start justify-start bg-gray-50 py-12 px-12">
            <h1 className="text-4xl font-bold">Storytelling Bundle</h1>
            <p className="mb-12">Special!</p>
            <a
              href="/buy"
              target="_blank"
              className="rounded bg-primary-dark px-4 py-2 text-lg font-semibold text-white"
            >
              Buy Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
