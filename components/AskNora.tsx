"use client";

import type { ReactNode } from "react";

/**
 * Opens the floating Nora chat widget (see NoraChat) via the `nora:open` event.
 * Used for CTAs that used to link to the /nora page, which has been removed in
 * favour of the always-available widget. Pass `seed` to start the conversation
 * with a message, or mode="home" to land on the call-first screen.
 */
export function AskNora({
  children,
  className,
  seed,
  mode = "chat",
  ariaLabel,
}: {
  children: ReactNode;
  className?: string;
  seed?: string;
  mode?: "chat" | "home";
  ariaLabel?: string;
}) {
  const open = () =>
    window.dispatchEvent(
      new CustomEvent("nora:open", {
        detail: { mode, ...(seed ? { seed } : {}) },
      }),
    );

  return (
    <button type="button" onClick={open} aria-label={ariaLabel} className={className}>
      {children}
    </button>
  );
}
