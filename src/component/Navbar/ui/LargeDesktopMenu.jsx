import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LargeDesktopMenu = ({ scrollToSection }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

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

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.4 + custom * 0.1,
      },
    }),
    hover: {
      backgroundColor: "#ffffff",
      color: "#1E1E1E",
      scale: 1.05,
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      transition: { duration: 0.2 },
    },
    tap: { scale: 0.98 },
  };

  const textSlideVariants = {
    initial: { width: 0, opacity: 0, x: -10 },
    animate: {
      width: "auto",
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
      },
    },
    exit: {
      width: 0,
      opacity: 0,
      x: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const navItems = [
    { id: "home", icon: "fa-house", label: "Home", active: true },
    { id: "skills", icon: "fa-code", label: "Skills" },
    { id: "practice", icon: "fa-shield-halved", label: "Practice" },
    { id: "experience", icon: "fa-briefcase", label: "Experience" },
    { id: "projects", icon: "fa-folder", label: "Projects" },
    { id: "contact", icon: "fa-paper-plane", label: "Contact" },
  ];

  return (
    <div className="absolute left-0 right-0 z-10 justify-between items-center gap-2 hidden 2xl:flex">
      <div className="flex">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="px-16 text-shadow flex items-center gap-3"
        >
          <motion.img
            src="/LogoFilled.svg"
            alt="logoFilled"
            className="h-7 w-7"
            variants={logoVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          />
          <p className="font-display text-[24px] font-bold leading-none tracking-[-0.025em] text-dgray">
            Lats
            <span className="text-gray-500">Marbls</span>
          </p>
        </motion.div>
      </div>
      <div className="flex pl-4 py-4 bg-dgray rounded-bl-[1.5rem] nav-union">
        <div>
          <ul className="flex gap-2.5 duration-500">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={menuItemVariants}
                whileHover="hover"
                whileTap="tap"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`flex ${
                  item.active
                    ? "text-white bg-white"
                    : "border-2 text-white border-white"
                } hover:cursor-pointer px-5 rounded-[12px] justify-center items-center text-sm transition ease-in-out duration-500 group overflow-hidden h-11`}
                onClick={() => item.id !== "home" && scrollToSection(item.id)}
                aria-label={item.label}
                title={item.label}
              >
                <div className="flex items-center h-full">
                  <i
                    className={`fa-solid ${item.icon} ${
                      item.active
                        ? "text-dgray cursor-default"
                        : "group-hover:text-dgray"
                    }`}
                  ></i>
                  <AnimatePresence>
                    {(hoveredItem === item.id || item.active) && (
                      <motion.p
                        variants={textSlideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className={`font-semibold ${
                          item.active
                            ? "text-dgray cursor-default"
                            : "group-hover:text-dgray"
                        } whitespace-nowrap ml-3 my-0`}
                      >
                        {item.label}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LargeDesktopMenu;
