import { en } from "@/content/en";
import { CONTACT } from "@/lib/config";
import { Icon } from "@/components/ui/Icon";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function GetStarted() {
  const { start } = en;

  return (
    <section id="start" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader label={start.label} title={start.title} />

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <ol className="self-start divide-y divide-line border-y border-line">
            {start.steps.map((s, i) => (
              <li key={s.title} className="grid gap-2 py-6 sm:grid-cols-[3rem_10rem_1fr] sm:gap-4">
                <span className="font-mono text-sm text-gold-soft">{i + 1}.</span>
                <h3 className="font-bold">{s.title}</h3>
                <p className="text-muted">{s.text}</p>
              </li>
            ))}
          </ol>

          <div className="space-y-10">
            <div>
              <h3 className="mb-4 font-bold">{start.toolsTitle}</h3>
              <ul className="space-y-2.5 text-muted">
                {start.tools.map((t) => (
                  <li key={t} className="flex gap-3">
                    <Icon name="check" className="mt-1 size-4 shrink-0 text-gold" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-surface p-6">
              <h3 className="font-bold">{start.manager.title}</h3>
              <p className="mt-2 text-sm text-muted">{start.manager.text}</p>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                {/* PLACEHOLDER — replace with the manager's photo */}
                <div className="size-12 shrink-0 rounded-full border border-dashed border-line bg-surface-2" />
                <div className="min-w-0">
                  <p className="font-semibold">{start.manager.name}</p>
                  <p className="text-sm text-muted">{start.manager.role}</p>
                </div>
                <a
                  href={CONTACT.telegram}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-line px-3 py-2.5 text-sm font-semibold hover:border-muted"
                >
                  <Icon name="send" className="size-4" />
                  {start.manager.handle}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
