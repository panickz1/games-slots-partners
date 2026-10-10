"use client";

import { useId, useState } from "react";
import { en } from "@/content/en";
import { REGISTER_URL } from "@/lib/config";
import { Button } from "@/components/ui/Button";

const eur = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 0 });

export function Calculator() {
  const c = en.commissions.calculator;
  const [model, setModel] = useState<"revshare" | "cpa">("revshare");
  const [players, setPlayers] = useState(40);
  const [revenue, setRevenue] = useState(120);

  const monthly = model === "revshare" ? players * revenue * c.revshareRate : players * c.cpaRate;

  return (
    <div className="rounded-xl border border-line bg-surface p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold">{c.title}</h3>
        <div role="radiogroup" aria-label="Commission model" className="flex rounded-lg border border-line p-1 text-sm">
          {(["revshare", "cpa"] as const).map((m) => (
            <button
              key={m}
              type="button"
              role="radio"
              aria-checked={model === m}
              onClick={() => setModel(m)}
              className={`rounded-md px-3 py-1.5 font-semibold transition-colors ${
                model === m ? "bg-white text-black" : "text-muted hover:text-white"
              }`}
            >
              {c[m]}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-7">
        <Slider label={c.playersLabel} value={players} min={5} max={300} step={5} onChange={setPlayers} format={String} />
        {model === "revshare" && (
          <Slider
            label={c.revenueLabel}
            value={revenue}
            min={20}
            max={500}
            step={10}
            onChange={setRevenue}
            format={eur.format}
          />
        )}
      </div>

      <div className="mt-8 border-t border-line pt-6">
        <p className="text-sm text-muted">{c.monthly}</p>
        <p className="mt-1 text-4xl font-bold tabular-nums md:text-5xl" aria-live="polite">
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
