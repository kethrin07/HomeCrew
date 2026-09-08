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
          : "bg-ink px-5 py-[18px] sm:px-8 lg:px-12"
      }
    >
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between">
        <div className="flex items-center gap-5 sm:gap-[30px]">
          <Link
            href="/"
            className="text-[18px] font-extrabold leading-none tracking-[-.03em] text-white hover:text-white"
          >
            HomeCrew
          </Link>
          <nav className="hidden gap-[22px] text-[13.5px] font-medium leading-none text-white/75 md:flex">
            {NAV.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/75 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="/ava"
            className="hidden text-[13.5px] font-medium leading-none text-white/75 hover:text-white sm:inline"
          >
            Sign in
          </Link>
          <Link
            href="/ava"
            className="rounded-lg bg-accent px-[17px] py-[10px] text-[13px] font-semibold leading-none text-white hover:text-white"
          >
            Get matched
          </Link>
        </div>
      </div>
    </header>
  );
}
