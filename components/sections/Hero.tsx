/* eslint-disable @next/next/no-img-element */
import { en } from "@/content/en";
import { LOGIN_URL, REGISTER_URL } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Screenshot } from "@/components/ui/Screenshot";

export function Hero() {
  const { hero, cta } = en;

  return (
    <section id="top" className="pt-28 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-3xl">
            <h1 className="text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted md:text-xl">{hero.subtitle}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={REGISTER_URL} size="lg">
                {cta.register}
              </Button>
              <Button href={LOGIN_URL} variant="ghost" size="lg">
                {cta.login}
              </Button>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm font-semibold">
              {hero.terms.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-gold" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <Coin />
        </div>

        <Screenshot
          src={hero.screenshot.src}
          label={hero.screenshot.label}
          priority
          className="mt-14 aspect-[16/9] md:mt-20"
        />
      </div>
    </section>
  );
}

function Coin() {
  return (
    <div className="relative mx-auto hidden aspect-square w-full max-w-[420px] lg:block" aria-hidden>
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(closest-side,rgba(234,208,109,0.18),transparent)]" />
      <div className="absolute inset-[8%] rounded-full border border-gold/15" />
      <div className="absolute inset-[16%] animate-[spin_60s_linear_infinite] rounded-full border border-dashed border-gold/25 motion-reduce:animate-none" />
      <img
        src="/spade.svg"
        alt=""
        className="absolute inset-[25%] animate-[coin-float_6s_ease-in-out_infinite] drop-shadow-[0_0_36px_rgba(234,208,109,0.35)] motion-reduce:animate-none"
      />
    </div>
  );
}
