import React from "react";
import { motion } from "framer-motion";
import Button from "../../layouts/buttons/Button";

const socials = [
  {
    href: "https://github.com/Havennnn",
    icon: "fa-brands fa-github",
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/latrell-marable-b43a37256/",
    icon: "fa-brands fa-linkedin-in",
    label: "LinkedIn",
  },
  {
    href: "mailto:marablelatrell@gmail.com",
    icon: "fa-solid fa-envelope",
    label: "Email",
  },
];

const START = { year: 2026, month: 0 };

const monthsInProduction = () => {
  const now = new Date();
  const months =
    (now.getFullYear() - START.year) * 12 + (now.getMonth() - START.month);
  return Math.max(1, months);
};

const facts = () => {
  const months = monthsInProduction();
  const tenure =
    months >= 12
      ? `${Math.floor(months / 12)} yr ${months % 12} mo`
      : `${months} months`;

  return [
    { label: "In production", value: tenure },
    { label: "Core stack", value: "Laravel · MySQL · Pest" },
    { label: "Education", value: "Cum Laude · 1.4 GWA" },
  ];
};

const HeroContent = ({ handleDownloadCV }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { when: "beforeChildren", staggerChildren: 0.08, delayChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={container}
      className="relative z-10 w-full md:w-[52%] lg:w-[54%]"
    >
      <motion.p
        variants={item}
        className="font-mono text-2xs uppercase tracking-[0.22em] text-gray-500"
      >
        <span className="text-dgray">01</span> — hello
      </motion.p>

      <motion.h1
        variants={item}
        className="mt-4 font-display text-[2.6rem] font-bold leading-[1.03] tracking-tight text-dgray sm:text-6xl xl:text-7xl"
      >
        Latrell
        <span className="text-gray-300">.</span>
        <br />
        Marable
      </motion.h1>

      <motion.div
        variants={item}
        className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2"
      >
        <p className="font-display text-xl font-semibold text-gray-600 sm:text-2xl">
          Backend Developer
        </p>
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-paper2 px-3 py-1 font-mono text-2xs uppercase tracking-[0.14em] text-gray-600">
          <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-dgray" />
          PRAXXYS Solutions
        </span>
      </motion.div>

      <motion.p
        variants={item}
        className="mt-6 max-w-xl text-[15px] leading-relaxed text-gray-500 sm:text-base"
      >
        I build Laravel systems for enterprise clients, and I treat security,
        testing and code review as part of the work rather than an afterthought.
        Nearly a year in production, shipping features that have to hold up
        under review.
      </motion.p>

      <motion.p
        variants={item}
        className="mt-6 max-w-xl border-l-2 border-line pl-4 font-display text-lg leading-snug text-gray-600"
      >
        &ldquo;Lets make idea into reality&rdquo;
      </motion.p>

      <motion.dl
        variants={item}
        className="mt-8 grid max-w-lg grid-cols-1 gap-x-8 gap-y-3 border-y border-line py-4 sm:grid-cols-3"
      >
        {facts().map((fact) => (
          <div key={fact.label}>
            <dt className="font-mono text-2xs uppercase tracking-[0.14em] text-gray-500">
              {fact.label}
            </dt>
            <dd className="mt-1 font-display text-sm font-semibold leading-snug text-dgray">
              {fact.value}
            </dd>
          </div>
        ))}
      </motion.dl>

      <motion.div variants={item} className="mt-7 flex items-center gap-3">
        <Button
          onClick={handleDownloadCV}
          icon="fa-solid fa-file-arrow-down"
          text="Resume"
        />
        <Button
          href="#projects"
          icon="fa-solid fa-folder-open"
          text="Projects"
          variant="secondary"
        />
      </motion.div>

      <motion.div variants={item} className="mt-8 flex items-center gap-3">
        <span className="font-mono text-2xs uppercase tracking-[0.18em] text-gray-500">
          Find me
        </span>
        <span className="h-px w-6 bg-gray-200" />
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={social.label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-gray-500 transition-colors duration-200 hover:border-dgray hover:bg-dgray hover:text-white"
          >
            <i className={social.icon} aria-hidden="true" />
          </a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
