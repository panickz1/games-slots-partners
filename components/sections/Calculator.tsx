"use client";

import { useId, useState } from "react";
import { en } from "@/content/en";
import { REGISTER_URL } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { useTweenedNumber } from "@/lib/motion";

const eur = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export function Calculator() {
  const c = en.commissions.calculator;
  const [model, setModel] = useState<"revshare" | "cpa">("revshare");
  const [players, setPlayers] = useState(40);
  const [revenue, setRevenue] = useState(120);

  const monthly = model === "revshare" ? players * revenue * c.revshareRate : players * c.cpaRate;
  const shown = useTweenedNumber(monthly);

  return (
    <div className="rounded-xl border border-line bg-surface p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold">{c.title}</h3>
        <div
          role="radiogroup"
          aria-label="Commission model"
          className="relative grid grid-cols-2 rounded-lg border border-line p-1 text-sm"
        >
          {/* Sliding highlight behind the selected option */}
          <span
            aria-hidden
            className={`absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-md bg-white transition-transform duration-300 ease-out-soft ${
              model === "cpa" ? "translate-x-full" : ""
            }`}
          />
          {(["revshare", "cpa"] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="radio"
              aria-checked={model === m}
              onClick={() => setModel(m)}
              className={`relative rounded-md px-3 py-1.5 font-semibold transition-colors duration-300 ${
                model === m ? "text-black" : "text-muted hover:text-white"
              }`}
            >
              {c[m]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <Slider label={c.playersLabel} value={players} min={5} max={300} step={5} onChange={setPlayers} format={String} />
        {/* Collapses smoothly when CPA (which ignores revenue) is selected */}
        <div
          inert={model !== "revshare"}
          className={`-mb-2 grid transition-[grid-template-rows,opacity] duration-300 ease-out-soft ${
            model === "revshare" ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-7 pb-2">
              <Slider
                label={c.revenueLabel}
                value={revenue}
                min={20}
                max={500}
                step={10}
                onChange={setRevenue}
                format={eur.format}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <p className="text-sm text-muted">{c.monthly}</p>
        <p className="mt-1 text-4xl font-bold tabular-nums md:text-5xl">{eur.format(shown)}</p>
        {/* Announce only the final value, not every animation frame */}
        <p className="sr-only" aria-live="polite">
          {eur.format(monthly)}
        </p>
        <p className="mt-3 text-sm text-muted">{model === "revshare" ? c.revshareNote : c.cpaNote}</p>
      </div>

      <Button href={REGISTER_URL} className="mt-6 w-full">
        {en.cta.register}
      </Button>
      <p className="mt-4 text-xs text-muted/70">{c.disclaimer}</p>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  onChange,
  format,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  format: (v: number) => string;
}) {
  const id = useId();
  const fill = `${((value - min) / (max - min)) * 100}%`;

  return (
    <div>
      <div className="mb-3 flex items-baseline justify-between gap-4 text-sm">
        <label htmlFor={id} className="text-muted">
          {label}
        </label>
        <output htmlFor={id} className="font-bold tabular-nums">
          {format(value)}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="range-gold w-full"
        style={{ "--fill": fill } as React.CSSProperties}
      />
    </div>
  );
}
