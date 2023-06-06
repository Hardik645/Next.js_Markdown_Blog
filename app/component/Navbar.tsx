import Link from "next/link"
import {FaGithub, FaLinkedin, FaYoutube} from "react-icons/fa"

export default function Navbar() {
  return (
    <nav className="bg-deer p-4 sticky top-0 drop-shadow-xl z-10">
        <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
          <h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
            <Link href="/" className="text-white/90 no-underline hover:text-white hover:scale-125 transition-all duration-500 cursor-pointer"  >Hardik Sharma</Link>
          </h1>
          <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-5xl">
            <Link href="https://www.youtube.com/@athera69" className="Nav-Link">
              <FaYoutube />
            </Link>
            <Link href="https://github.com/Hardik645" className="Nav-Link">
              <FaGithub />
            </Link>
            <Link href="https://www.linkedin.com/in/athera/" className="Nav-Link">
              <FaLinkedin/>
            </Link>
          </div>
        </div>
    </nav>
  )
}
