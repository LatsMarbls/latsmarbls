import React from "react";
import { motion } from "framer-motion";

const StickyNavbarLogo = ({ isSticky = false }) => {
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      },
    },
    hover: {
      scale: 1.04,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 18,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2,
      },
    },
  };

  return (
    <div
      className={`flex ${
        isSticky ? "gap-1" : "gap-2"
      } items-center justify-center`}
    >
      <motion.img
        src="/LogoFilled.svg"
        alt="logo"
        className="h-5 w-5"
        variants={logoVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
      />
      <motion.span
        className={`font-display text-[15px] font-bold leading-none tracking-[-0.01em] text-dgray ${
          isSticky ? "hidden md:block" : ""
        }`}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        Lats
        <span className="text-gray-500">Marbls</span>
      </motion.span>
    </div>
  );
};

export default StickyNavbarLogo;
