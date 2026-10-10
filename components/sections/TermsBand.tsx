import { en } from "@/content/en";

export function TermsBand() {
  return (
    <section aria-label="Key terms" className="border-y border-line bg-surface">
      <dl className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {en.terms.items.map((t, i) => (
          <div
            key={t.label}
            className={`flex flex-col-reverse gap-1 px-4 py-8 md:px-8 md:py-12 ${
              i % 2 ? "border-l border-line" : ""
            } ${i > 1 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
          >
            <dt className="text-sm text-muted">{t.label}</dt>
            <dd className="text-3xl font-bold text-gold md:text-5xl">{t.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
