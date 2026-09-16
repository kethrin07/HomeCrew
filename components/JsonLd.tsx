/**
 * Renders a JSON-LD structured-data block. Server component: safe to use in
 * layouts and pages. Pass a schema.org object (or a @graph wrapper).
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inject; no user input flows in here.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
