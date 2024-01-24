import { useState } from "react";
import icon from "../src/assets/icon.png";
import { Link, NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

const navItems = [
  { display: "home", link: "/" },
  { display: "destination", link: "/destination" },
  { display: "crew", link: "/crew" },
  { display: "technology", link: "/technology" },
];

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="absolute top-0 z-[999] w-full pl-6 font-barlow-condensed tracking-[2.7px] sm:pl-14 lg:top-10">
      <div className="mt-6 flex w-full items-center justify-between md:mt-0">
        <Link to="/">
          <picture>
            <img className="w-[40px] md:w-[48px]" src={icon} alt="Icon" />
          </picture>
        </Link>
        <div className="z-10 hidden h-px w-[30%] translate-x-[7%] bg-white/25 lg:block xl:w-2/5 xl:translate-x-[10%]"></div>
        <button
          className="mr-6 text-light md:hidden"
          onClick={() => setShowNav(true)}
        >
          <FaBars size={28} />
        </button>
        <div
          className={`fixed right-0 top-0 h-screen w-[320px] bg-white bg-opacity-5 backdrop-blur-[40px] duration-200 md:static md:h-auto md:w-[70%] md:translate-x-0 md:justify-end md:pl-12 md:text-start xl:w-3/5 ${
            showNav ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute right-8 top-8 text-light md:hidden"
            onClick={() => setShowNav(false)}
          >
            <FaTimes size={28} />
          </button>
          <ul className="mt-16 flex flex-col justify-end gap-x-[36px] md:mr-20 md:mt-0 md:flex-row lg:gap-x-[50px]">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                onSetShowNav={setShowNav}
                index={index}
                link={item.link}
              >
                {item.display}
              </NavItem>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ onSetShowNav, link, index, children }) {
  const num = index.toString().padStart(2, "0");
  return (
    <li>
      <NavLink
        onClick={() => onSetShowNav(false)}
        className="relative block py-6 pl-20 uppercase before:absolute before:bottom-1/2 before:right-0 before:h-3/5 before:w-[3px] before:translate-y-1/2 before:bg-white/50 before:opacity-0 before:duration-300 before:content-[''] hover:before:opacity-100 md:py-10 md:pl-0 md:before:bottom-0 md:before:h-[3px] md:before:w-full"
        to={link}
      >
        <span className="mr-[10px] font-bold md:hidden lg:inline">{num}</span>
        {children}
      </NavLink>
    </li>
  );
}
