import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ContactInfo from "./ui/ContactInfo";
import ContactModal from "../layouts/forms/ContactModal";
import SectionBadge from "../layouts/SectionBadge";
import SectionSwarm from "../layouts/SectionSwarm";

import Button from "../layouts/buttons/Button";
import useAboutAnimation from "./hooks/useAboutAnimation";

const About = () => {
  const sectionRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState("");
  const { scrollTriggerReached, scrollProgress } =
    useAboutAnimation(sectionRef);

  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setStatus("");
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "772012b3-85ef-4d30-b354-b9c9c07587ef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message has been sent successfully!");
        setTimeout(() => {
          closeModal();
        }, 1000);
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred. Please try again.");
      console.error("Error during fetch:", error);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          closeModal();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";
      };
    }
  }, [showModal]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative w-full border-t border-line pb-16 pt-10 sm:pt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: scrollTriggerReached ? 1 : scrollProgress }}
      transition={{ duration: 0.3 }}
    >
      <SectionBadge index="07" title="Contact" icon="fa-regular fa-paper-plane" place="left" />

        <SectionSwarm />

      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12 lg:gap-16">
        <div>
          <h3 className="max-w-lg font-display text-[28px] font-bold leading-[1.15] tracking-tight text-dgray sm:text-[30px]">
            Let&apos;s build something
            <span className="text-gray-300">.</span>
          </h3>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-gray-500">
            Open to conversations about backend work, application security and
            platform reliability. Email is fastest — or send a note straight
            from here.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button
              onClick={openModal}
              icon="fa-solid fa-paper-plane"
              text="Send a message"
            />
            <a
              href="mailto:latrellmarable00@gmail.com"
              className="text-sm font-semibold text-gray-600 underline-offset-4 transition-colors hover:text-dgray hover:underline"
            >
              latrellmarable00@gmail.com
            </a>
          </div>

          <div className="mt-10 border-t border-line pt-6">
            <p className="font-mono text-2xs uppercase tracking-[0.18em] text-gray-500">
              Happy to help with
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                "Backend systems in Laravel",
                "Security review and hardening",
                "API integration and production troubleshooting",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-500"
                >
                  <span className="h-1 w-1 rounded-full bg-gray-300" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ContactInfo />
      </div>

      <ContactModal
        showModal={showModal}
        closeModal={closeModal}
        status={status}
        onSubmit={onSubmit}
      />
    </motion.section>
  );
};

export default About;
