import { en } from "@/content/en";
import { CONTACT } from "@/lib/config";
import { Icon } from "@/components/ui/Icon";

export function Faq() {
  const { faq } = en;

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-10 border-t border-line pt-6 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold text-gold-soft">{faq.label}</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{faq.title}</h2>
            <p className="mt-4 text-muted">
              {faq.intro}{" "}
              <a href={`mailto:${CONTACT.email}`} className="text-white underline underline-offset-4 hover:text-gold">
                {CONTACT.email}
              </a>
            </p>
          </div>

          <div className="border-t border-line">
            {faq.items.map((item) => (
              <details key={item.q} name="faq" className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold hover:text-gold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Icon
                    name="plus"
                    className="size-5 shrink-0 text-muted transition-transform duration-200 group-open:rotate-45"
                  />
                </summary>
                <p className="max-w-2xl pb-6 leading-relaxed text-muted">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
