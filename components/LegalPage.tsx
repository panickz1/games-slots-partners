import type { LegalDoc } from "@/content/legal";
import { en } from "@/content/en";
import { LEGAL_UPDATED } from "@/lib/config";

export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <main className="pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:px-8 lg:grid-cols-[16rem_1fr] lg:gap-16">
        <aside className="hidden lg:block">
          <nav aria-label="Legal" className="sticky top-28 space-y-1 border-t border-line pt-6">
            {en.footer.legal.map((l) => {
              const active = l.label === doc.title;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={active ? "page" : undefined}
                  className={`block py-1.5 text-sm ${active ? "font-semibold text-gold" : "text-muted hover:text-white"}`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
        </aside>

        <article className="max-w-3xl border-t border-line pt-6">
          <p className="mb-3 text-sm font-semibold text-gold-soft">Last updated {LEGAL_UPDATED}</p>
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{doc.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">{doc.intro}</p>

          <div className="mt-12 space-y-10">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="mb-4 text-xl font-bold">{s.heading}</h2>
                <div className="space-y-4 leading-relaxed text-muted">
                  {s.body.map((b, i) =>
                    Array.isArray(b) ? (
                      <ul key={i} className="space-y-2.5 pl-5 marker:text-gold-soft [list-style:disc]">
                        {b.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={i}>{b}</p>
                    ),
                  )}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  );
}
