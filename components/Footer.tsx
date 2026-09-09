const LINKS = ["For pros", "Careers", "Trust & safety", "Privacy", "© 2026"];

export function Footer() {
  return (
    <footer className="bg-surface px-5 py-[34px] sm:px-8 lg:px-11">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4">
        <div className="font-display text-[16px] font-semibold uppercase leading-none tracking-[.08em] text-olive-dark">
          HomeCrew
        </div>
        <div className="flex flex-wrap gap-x-[26px] gap-y-2 text-[12.5px] leading-none text-ink/55">
          {LINKS.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
