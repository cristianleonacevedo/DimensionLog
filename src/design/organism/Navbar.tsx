import { Link } from "react-router-dom";
import SearchBar from "../molecules/SearchBar";

function Navbar() {

  return (
    <nav
      id="Navbar"
      className="flex w-full sticky top-0 gap-75 items-center bg-slate-700 z-50"
    >
        <img src="https://tse3.mm.bing.net/th/id/OIP.JQfcfPjD0i29a5tk0GXJvAHaEo?rs=1&pid=ImgDetMain&o=7&rm=3" alt="" id="icon" className="w-18 m-2 rounded-full" />

        <SearchBar />

      <div className="absolute right-0">
        <Link
          to="/anime-favorites"
          className="text-2xl m-1.5 p-1 bg-gray-400 rounded-md font-bold hover:bg-gray-300 transition-colors duration-200"
        >
          Favorites
        </Link>

        <Link
          to="/about-us"
          className="text-2xl m-1.5 p-1 bg-gray-400 rounded-md font-bold hover:bg-gray-300 transition-colors duration-200"
        >
          About us
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;