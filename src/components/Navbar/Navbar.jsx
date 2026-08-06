import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Categories from "./Categories";
import LargeSearchBar from "./LargeSearchBar";
import SmallSearchBar from "./SmallSearchBar";
import UserMenu from "./UserMenu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">

      <div
        className={`mx-auto max-w-[1600px] px-12 transition-all duration-300 ${isScrolled ? "py-3" : "py-6"
          }`}
      >

        {/* Top Row */}
        <div className="relative flex items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Center */}
          {/* Center */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            <AnimatePresence mode="wait">

              {!isScrolled ? (

                <motion.div
                  key="categories"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                >
                  <Categories />
                </motion.div>

              ) : (

                <motion.div
                  key="smallSearch"
                  initial={{
                    opacity: 0,
                    y: 15,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: 15,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
                >
                  <SmallSearchBar />
                </motion.div>

              )}

            </AnimatePresence>

          </div>

          {/* Right */}
          <UserMenu />

        </div>

        {/* Large Search Bar */}
        <div
          className={`flex justify-center overflow-hidden transition-all duration-500 ease-in-out ${isScrolled
            ? "max-h-0 opacity-0 -translate-y-8 scale-95"
            : "max-h-48 opacity-100 translate-y-0 scale-100 pt-8"
            }`}
        >
          <LargeSearchBar />
        </div>

      </div>

    </nav>
  );
};

export default Navbar;