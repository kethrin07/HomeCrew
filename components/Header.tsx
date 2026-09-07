import Link from "next/link";

const NAV = [
  { label: "Projects", href: "/#projects" },
  { label: "Find pros", href: "/#categories" },
  { label: "Guides", href: "/guides/kitchen-30k" },
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
          ? "relative z-10 flex items-center justify-between px-8 py-5"
          : "flex items-center justify-between border-b border-line px-8 py-[18px] sm:px-12"
      }
    >
      <div className="flex items-center gap-[30px]">
        <Link
          href="/"
          className={`text-[18px] font-extrabold leading-none tracking-[-.03em] ${
            onDark ? "text-white hover:text-white" : "text-ink hover:text-ink"
          }`}
        >
          HomeCrew
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
      <div className="flex items-center gap-4">
        <Link
          href="/ava"
          className={`hidden text-[13.5px] font-medium leading-none sm:inline ${
            onDark ? "text-white/80 hover:text-white" : "text-ink/60 hover:text-ink"
          }`}
        >
          Sign in
        </Link>
        <Link
          href="/ava"
          className={`rounded-lg px-[17px] py-[10px] text-[13px] font-semibold leading-none ${
            onDark
              ? "bg-white text-ink hover:text-ink"
              : "bg-ink text-white hover:text-white"
          }`}
        >
          Get matched
        </Link>
      </div>
    </header>
  );
}
