import Link from "next/link";
import { FaYoutube, FaTwitter, FaGithub, FaLaptop } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="pros pros-xl mx-auto flex justify-between flex-col items-center sm:flex-row">
        <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
          <Link
            className="text-white/90 no-underline hover:text-white"
            href="/"
          >
            Sagor
          </Link>
        </h1>
        <div className="flex gap-4">
          <Link className="text-white/90 hover:text-white" href="">
            <FaYoutube></FaYoutube>
          </Link>
          <Link className="text-white/90 hover:text-white" href="">
            <FaTwitter></FaTwitter>
          </Link>
          <Link className="text-white/90 hover:text-white" href="">
            <FaGithub></FaGithub>
          </Link>
          <Link className="text-white/90 hover:text-white" href="">
            <FaLaptop></FaLaptop>
          </Link>
        </div>
      </div>
    </nav>
  );
}
