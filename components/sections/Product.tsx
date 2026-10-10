import { en } from "@/content/en";
import { Reveal } from "@/components/ui/Reveal";
import { Screenshot } from "@/components/ui/Screenshot";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function Product() {
  const { product } = en;

  return (
    <section id="product" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader label={product.label} title={product.title} intro={product.intro} />

        <div className="space-y-16 md:space-y-24">
          {product.items.map((item, i) => (
            <article
              key={item.title}
              className="grid items-center gap-8 md:grid-cols-12 md:gap-12"
            >
              <div className={`md:col-span-5 ${i % 2 ? "md:order-2 md:col-start-8" : ""}`}>
                <p className="mb-3 font-mono text-sm text-gold-soft">0{i + 1}</p>
                <h3 className="text-2xl font-bold tracking-tight md:text-3xl">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-muted md:text-lg">{item.text}</p>
              </div>
              <Reveal className={`md:col-span-7 ${i % 2 ? "md:order-1 md:col-start-1" : ""}`}>
                <Screenshot src={item.screenshot.src} label={item.screenshot.label} className="aspect-video" />
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
