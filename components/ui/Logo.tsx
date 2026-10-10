/* eslint-disable @next/next/no-img-element */
export function Logo({ className = "h-7 w-auto" }: { className?: string }) {
  return <img src="/logo.svg" alt="GameSlots" width={1740} height={440} className={className} />;
}
