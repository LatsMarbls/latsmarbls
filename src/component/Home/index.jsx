import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../Navbar";
import HeroContent from "./ui/HeroContent";
import HeroTerminal from "./ui/HeroTerminal";
import ContactModal from "../layouts/forms/ContactModal";
import useContactForm from "./hooks/useContactForm";
import useResume from "./hooks/useResume";

const Home = () => {
  const { showModal, status, openModal, closeModal, onSubmit } =
    useContactForm();
  const handleDownloadCV = useResume();

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key="home-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[24px] border border-line bg-white"
      >
        <Navbar />
        <div className="relative flex flex-col justify-center gap-12 px-6 pb-12 pt-28 sm:px-10 md:flex-row md:items-center md:gap-8 md:px-12 md:pb-16 md:pt-24 xl:min-h-[84vh] xl:px-16">
          <HeroContent handleDownloadCV={handleDownloadCV} />
          <div className="flex flex-1 justify-center md:justify-end">
            <HeroTerminal />
          </div>
        </div>

        <ContactModal
          showModal={showModal}
          closeModal={closeModal}
          status={status}
          onSubmit={onSubmit}
        />
      </motion.section>
    </AnimatePresence>
  );
};

export default Home;
