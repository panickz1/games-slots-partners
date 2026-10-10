export function SectionHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mb-12 grid gap-4 border-t border-line pt-6 md:mb-16 md:grid-cols-[1fr_1fr] md:gap-12">
      <div>
        <p className="mb-3 text-sm font-semibold text-gold-soft">{label}</p>
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
      </div>
      {intro && <p className="self-end text-muted md:text-lg">{intro}</p>}
    </header>
  );
}
