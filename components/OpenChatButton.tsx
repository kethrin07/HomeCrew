"use client";

/**
 * Small CTA that opens the floating Nora chat by dispatching a `nora:open`
 * event, which NoraChat listens for. Lets server components (e.g. the hero)
 * trigger the widget without lifting its state up.
 */
export function OpenChatButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("nora:open"))}
      className={className}
    >
      {children}
    </button>
  );
}
