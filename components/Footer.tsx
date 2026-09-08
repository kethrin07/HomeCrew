const LINKS = ["For pros", "Careers", "Trust & safety", "Privacy", "© 2026"];

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-[34px] sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-4">
        <div className="text-[15px] font-extrabold leading-none tracking-[-.03em] text-ink">
          HomeCrew
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12.5px] font-normal leading-none text-ink/50">
          {LINKS.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
