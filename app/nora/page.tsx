import { redirect } from "next/navigation";

/**
 * The dedicated /nora page has been removed in favour of the always-available
 * floating chat widget (components/NoraChat.tsx). Visiting /nora sends people
 * home; entry points across the site open the widget instead.
 *
 * The full three-panel intake design is preserved for reference in
 * components/nora/NoraFlow.tsx (currently unused). Restore this page by
 * rendering <NoraFlow /> here if the standalone experience is ever wanted again.
 */
export default function NoraPage() {
  redirect("/");
}
