const LINKS = ["For pros", "Careers", "Trust & safety", "Privacy", "© 2026"];

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-line px-8 py-[34px] sm:px-12">
      <div className="text-[15px] font-extrabold leading-none tracking-[-.03em] text-ink">
        HomeCrew
      </div>
      <div className="flex flex-wrap gap-6 text-[12.5px] font-normal leading-none text-ink/50">
        {LINKS.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </footer>
  );
}
