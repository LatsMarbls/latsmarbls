import React from "react";

const links = [
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
    href: "https://www.facebook.com/latrell.r.marable",
    icon: "fa-brands fa-facebook-f",
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/lancrms/",
    icon: "fa-brands fa-instagram",
    label: "Instagram",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-white text-gray-500 transition-colors duration-200 hover:border-dgray hover:bg-dgray hover:text-white"
        >
          <i className={`${link.icon} text-xs`} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
