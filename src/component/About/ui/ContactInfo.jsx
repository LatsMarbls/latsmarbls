import React from "react";
import SocialLinks from "./SocialLinks";

const details = [
  {
    label: "Email",
    value: "marablelatrell@gmail.com",
    href: "mailto:marablelatrell@gmail.com",
    icon: "fa-solid fa-envelope",
  },
  {
    label: "Phone",
    value: "0995 332 4941",
    href: "tel:+639953324941",
    icon: "fa-solid fa-phone",
  },
  {
    label: "Based in",
    value: "Taytay, Rizal \u2014 Philippines",
    icon: "fa-solid fa-location-dot",
  },
];

const ContactInfo = () => {
  return (
    <div className="rounded-[18px] border border-line bg-paper2 p-5 sm:p-6">
      <p className="font-mono text-2xs uppercase tracking-[0.18em] text-gray-500">
        Direct
      </p>

      <ul className="mt-4 space-y-1">
        {details.map((detail) => {
          const content = (
            <>
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line bg-white text-gray-500">
                <i className={`${detail.icon} text-xs`} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-2xs uppercase tracking-[0.14em] text-gray-500">
                  {detail.label}
                </span>
                <span className="block truncate text-sm font-medium text-dgray">
                  {detail.value}
                </span>
              </span>
            </>
          );

          return (
            <li key={detail.label}>
              {detail.href ? (
                <a
                  href={detail.href}
                  className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors duration-200 hover:bg-white"
                >
                  {content}
                </a>
              ) : (
                <div className="flex items-center gap-3 px-2 py-2">
                  {content}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      <div className="mt-5 border-t border-line pt-4">
        <p className="mb-3 font-mono text-2xs uppercase tracking-[0.18em] text-gray-500">
          Elsewhere
        </p>
        <SocialLinks />
      </div>

      <div className="mt-5 flex items-center gap-2 rounded-xl border border-line bg-white px-3 py-2.5">
        <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-dgray" />
        <span className="text-xs font-medium text-gray-600">
          Open to security &amp; platform work
        </span>
      </div>
    </div>
  );
};

export default ContactInfo;
