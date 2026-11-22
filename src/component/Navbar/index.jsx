import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import MobileHeader from "./ui/MobileHeader";
import MobileMenu from "./ui/MobileMenu";
import NavDesktop from "./ui/NavDesktop";
import useNavigation from "./hooks/useNavigation";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  const { isMenuOpen, toggleMenu, scrollToSection } = useNavigation();

  return (
    <AnimatePresence>
      <motion.div
        className="relative sticky-navbar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <MobileHeader toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} scrollToSection={scrollToSection} />
        <NavDesktop scrollToSection={scrollToSection} />
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
