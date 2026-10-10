import { en } from "@/content/en";
import { LOGIN_URL, REGISTER_URL } from "@/lib/config";
import { Button } from "@/components/ui/Button";

export function FinalCta() {
  const { finalCta, cta } = en;

  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-16 md:flex-row md:items-end md:justify-between md:px-8 md:py-24">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{finalCta.title}</h2>
          <p className="mt-4 text-muted md:text-lg">{finalCta.text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href={REGISTER_URL} size="lg">
            {cta.register}
          </Button>
          <Button href={LOGIN_URL} variant="ghost" size="lg">
            {cta.login}
          </Button>
        </div>
      </div>
    </section>
  );
}
