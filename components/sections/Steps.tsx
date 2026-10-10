"use client";

import { useEffect, useRef, useState } from "react";

type Step = { title: string; text: string };

// Point in the viewport (from the top) that "reaches" each step
const ANCHOR = 0.6;
// Vertical offset of each step's dot from the top of its row
const DOT_TOP = 30;

export function Steps({ steps }: { steps: Step[] }) {
  const listRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);
  const [reached, setReached] = useState(-1);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = list.getBoundingClientRect();
      const anchor = window.innerHeight * ANCHOR - rect.top;
      setProgress(Math.min(Math.max(anchor / rect.height, 0), 1));
      const items = Array.from(list.children) as HTMLElement[];
      setReached(items.filter((li) => li.offsetTop + DOT_TOP <= anchor).length - 1);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="relative self-start">
      {/* Rail and its gold fill */}
      <div aria-hidden className="absolute top-0 bottom-0 left-[3px] w-px bg-line" />
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-[3px] w-px origin-top bg-gold transition-transform duration-150 ease-out"
        style={{ transform: `scaleY(${progress})` }}
      />

      <ol ref={listRef} className="divide-y divide-line border-y border-line">
        {steps.map((s, i) => {
          const done = i <= reached;
          return (
            <li key={s.title} className="relative grid gap-2 py-6 pl-7 sm:grid-cols-[2rem_10rem_1fr] sm:gap-4">
              <span
                aria-hidden
                className={`absolute left-0 size-[7px] rounded-full transition-colors duration-500 ${
                  done ? "bg-gold" : "bg-line"
                }`}
                style={{ top: DOT_TOP - 3 }}
              />
              <span
                className={`font-mono text-sm transition-colors duration-500 ${done ? "text-gold" : "text-muted"}`}
              >
                {i + 1}.
              </span>
              <h3 className="font-bold">{s.title}</h3>
              <p className="text-muted">{s.text}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
