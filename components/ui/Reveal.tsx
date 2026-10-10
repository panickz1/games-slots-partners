"use client";

import type { ReactNode } from "react";
import { useInView } from "@/lib/motion";

export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const [ref, inView] = useInView<HTMLDivElement>();
  return (
    <div ref={ref} data-reveal="" data-inview={inView ? "" : undefined} className={className}>
      {children}
    </div>
  );
}
