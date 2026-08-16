import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import Categories from "./Categories";
import LargeSearchBar from "./LargeSearchBar";
import SmallSearchBar from "./SmallSearchBar";
import UserMenu from "./UserMenu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchTransition = { type: "spring", stiffness: 260, damping: 24, mass: 0.8 };

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-[1600px] px-3 py-2 sm:px-6 lg:px-12 lg:py-2">
        <div className="hidden items-center justify-between lg:flex lg:items-center lg:gap-6">
          <Logo />

          <AnimatePresence mode="wait">
            {!isScrolled && (
              <motion.div
                key="desktop-categories"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={searchTransition}
                className="flex flex-1 justify-center"
              >
                <Categories />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-end">
            <UserMenu />
          </div>
        </div>

        <div className="hidden lg:block lg:pt-1">
          <AnimatePresence mode="wait">
            {isScrolled && (
              <motion.div
                key="small-search-on-scroll"
                initial={{ opacity: 0, y: -16, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.96 }}
                transition={searchTransition}
                className="pointer-events-none absolute left-1/2 top-2 -translate-x-1/2"
              >
                <div className="pointer-events-auto flex items-center justify-center">
                  <SmallSearchBar />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-3 lg:hidden">
          <SmallSearchBar />
        </div>

        <div className="mt-4 lg:hidden">
          <Categories />
        </div>

        <div className="hidden lg:flex lg:justify-center">
          <AnimatePresence mode="wait">
            {!isScrolled ? (
              <motion.div
                key="large-search"
                initial={{ opacity: 0, y: -10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={searchTransition}
                className="mt-1"
              >
                <LargeSearchBar />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;