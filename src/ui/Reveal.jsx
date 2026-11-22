/**
 * Layout wrapper kept as a stable API for the sections.
 *
 * There is deliberately no scroll-gated visibility here: hiding content
 * until an IntersectionObserver fires breaks crawlers, print/PDF output
 * and full-page capture. Any motion should be additive, never a gate.
 */
export default function Reveal({ as: Tag = "div", className = "", children, ...rest }) {
  return (
    <Tag className={`reveal ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
