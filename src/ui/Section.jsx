export function Section({ id, index, label, title, description, children, className = "" }) {
  return (
    <section id={id} className={`border-t border-line ${className}`}>
      <div className="shell py-16 md:py-24">
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <p className="label flex items-center gap-3">
              <span className="text-accent">{index}</span>
              <span className="h-px w-6 bg-line" />
              {label}
            </p>
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-3xl leading-[1.1] tracking-[-0.02em] text-fg md:text-[2.75rem]">
              {title}
            </h2>
          </div>
          {description ? (
            <div className="lg:col-span-4">
              <p className="max-w-sm text-sm leading-relaxed text-dim">{description}</p>
            </div>
          ) : null}
        </div>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}

export function Tag({ children }) {
  return (
    <span className="border border-line px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-dim">
      {children}
    </span>
  );
}
