/* eslint-disable @next/next/no-img-element */
import fs from "node:fs";
import path from "node:path";

// Renders the image if it exists in /public, otherwise a labelled slot so
// missing assets are obvious. Drop files into public/screens/ to fill them.
export function Screenshot({
  src,
  label,
  className = "",
  priority = false,
}: {
  src: string;
  label: string;
  className?: string;
  priority?: boolean;
}) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  return (
    <figure
      className={`overflow-hidden rounded-xl border border-line bg-surface ${className}`}
    >
      {exists ? (
        <img
          src={src}
          alt={label}
          loading={priority ? "eager" : "lazy"}
          className="block h-full w-full object-cover object-top"
        />
      ) : (
        <div className="flex h-full min-h-56 w-full flex-col items-center justify-center gap-1 border-2 border-dashed border-line p-6 text-center">
          <span className="text-sm font-semibold text-muted">{label}</span>
          <code className="text-xs text-muted/60">public{src}</code>
        </div>
      )}
    </figure>
  );
}
