import Link from "next/link";

const NAV = [
  { label: "How it works", href: "/#how" },
  { label: "Projects", href: "/#categories" },
  { label: "Blog", href: "/#blog" },
];

/**
 * Primary site header. `variant="onDark"` renders the light-on-dark version
 * used over the full-bleed media hero.
 */
export function Header({ variant = "default" }: { variant?: "default" | "onDark" }) {
  const onDark = variant === "onDark";
  return (
    <header
      className={
        onDark
          ? "relative z-10 px-5 py-5 sm:px-8 lg:px-12"
          : "border-b border-line px-5 py-[18px] sm:px-8 lg:px-12"
      }
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-5 sm:gap-[30px]">
          <Link
            href="/"
            className={`text-[18px] font-extrabold leading-none tracking-[-.03em] ${
              onDark ? "text-white hover:text-white" : "text-ink hover:text-ink"
            }`}
          >
            MyHomeQuote
          </Link>
          <nav
            className={`hidden gap-[22px] text-[13.5px] font-medium leading-none md:flex ${
              onDark ? "text-white/80" : "text-ink/60"
            }`}
          >
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={onDark ? "text-white/80 hover:text-white" : "text-ink/60 hover:text-ink"}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/nora"
            className={`hidden text-[13.5px] font-medium leading-none sm:inline ${
              onDark ? "text-white/80 hover:text-white" : "text-ink/60 hover:text-ink"
            }`}
          >
            Sign in
          </Link>
          <Link
            href="/nora"
            className={`rounded-lg px-[17px] py-[10px] text-[13px] font-semibold leading-none ${
              onDark
                ? "bg-white text-ink hover:text-ink"
                : "bg-ink text-white hover:text-white"
            }`}
          >
            Get matched
          </Link>
        </div>
      </div>
    </header>
  );
}
