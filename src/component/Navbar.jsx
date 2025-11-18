import React, { useState, useEffect } from "react";
import logo from "../assets/saudio.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScrollY && currentScroll > 80) {
        // scrolling down → hide navbar
        setShowNavbar(false);
      } else {
        // scrolling up → show navbar
        setShowNavbar(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full fixed top-0 z-50 text-white transition-transform duration-500
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-8xl mx-auto flex justify-between items-center px-5 sm:px-8 md:px-10 py-4">
        <a href="#Home">
          <img
            src={logo}
            alt="logo"
            className="w-24 sm:w-28 md:w-36 lg:w-40 cursor-pointer"
          />
        </a>

        <ul className="hidden md:flex gap-6 lg:gap-10 text-base lg:text-lg font-medium">
          <li>
            <a href="#Home" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
          </li>
          <li>
            <a href="#map" className="hover:text-gray-300">
              Map
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>

        <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden bg-black/80 backdrop-blur-lg w-full flex flex-col items-center gap-6 py-8 text-lg transition-all duration-300 
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10 pointer-events-none"
          }
        `}
      >
        <a href="#Home" onClick={() => setOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#services" onClick={() => setOpen(false)}>
          Services
        </a>
        <a href="#map" onClick={() => setOpen(false)}>
          Map
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
