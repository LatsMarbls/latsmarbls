import React from "react";

const Button = ({
  onClick,
  href,
  icon,
  text,
  variant = "primary",
  className = "",
  iconClassName = "",
  buttonClassName = "",
}) => {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-[14px] px-5 py-3 text-sm font-semibold transition-colors duration-200";

  const variants = {
    primary: "bg-dgray text-white hover:bg-black",
    secondary:
      "border border-line bg-white text-dgray hover:border-dgray hover:bg-paper2",
    accent: "bg-black text-white hover:bg-gray-800",
  };

  const classes = `${base} ${variants[variant] || variants.primary} ${buttonClassName} ${className}`;

  const content = (
    <>
      {icon && (
        <i
          className={`${icon} ${iconClassName} text-sm transition-transform duration-200 group-hover:-translate-y-0.5`}
          aria-hidden="true"
        />
      )}
      <span>{text}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;
