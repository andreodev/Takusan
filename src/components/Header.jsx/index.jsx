import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { AnimeSearch } from "../Search";

const NavLink = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-white"
    whileHover={{ scale: 1.1, color: "#3b82f6" }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    {children}
  </motion.a>
);

const word = "Takusan";

export default function Header() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 0) return;

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Controles de animação para cada letra
  const controlsArray = word.split("").map(() => useAnimation());

  // Handlers para mouse enter/leave
  const handleMouseEnter = () => {
    controlsArray.forEach((controls, index) => {
      // Delay stagger usando setTimeout para cada letra
      setTimeout(() => {
        controls.start({
          y: [0, -10, 0],
          transition: { duration: 0.5, ease: "easeInOut" },
        });
      }, index * 100);
    });
  };

  const handleMouseLeave = () => {
    controlsArray.forEach((controls) => {
      controls.start({
        y: 0,
        transition: { duration: 0.3, ease: "easeOut" },
      });
    });
  };

  return (
    <motion.header
      initial={{ y: 0, opacity: 1, boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }}
      animate={
        show
          ? { y: 0, opacity: 1, boxShadow: "0 4px 15px rgba(0,0,0,0.3)" }
          : { y: "-100%", opacity: 0, boxShadow: "none" }
      }
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 bg-[#31363F] z-50"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold title-font flex cursor-pointer select-none"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {word.split("").map((letter, index) => (
            <motion.span
              key={index}
              animate={controlsArray[index]}
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">Sobre</NavLink>
            </li>
          </ul>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <AnimeSearch />
          </motion.div>
        </nav>
      </div>
    </motion.header>
  );
}
