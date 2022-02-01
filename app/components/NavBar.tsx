import { Link } from "remix";

export default function NavBar() {
  return (
    <nav className="z-50 max-w-6xl mx-auto bg-gradient-to-b from-primary to-primary-dark text-white font-semibold flex items-center justify-between py-4 px-6 rounded-md shadow sticky top-5">
      <img src="/images/ShotboxWhite.png" alt="Shotbox" className="w-56" />
      <ul className="flex items-center space-x-4 text-lg">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Articles</Link>
        </li>
        <li>
          <Link to="/">Videos</Link>
        </li>
        <li>
          <Link
            to="/"
            className="px-3 py-2 bg-primary-light text-primary-dark rounded-md ml-1"
          >
            Buy Now
          </Link>
        </li>
      </ul>
    </nav>
  );
}
