import { en } from "@/content/en";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Calculator } from "./Calculator";

export function Commissions() {
  const { commissions } = en;
  const { table } = commissions;

  return (
    <section id="commissions" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeader label={commissions.label} title={commissions.title} intro={commissions.intro} />

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="min-w-0">
            <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:px-0">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-muted">
                    {table.head.map((h) => (
                      <th key={h} scope="col" className="pr-4 pb-3 font-medium">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map(([model, ...cells]) => (
                    <tr key={model} className="border-b border-line align-top">
                      <th scope="row" className="py-5 pr-4 text-base font-bold">
                        {model}
                      </th>
                      {cells.map((c, i) => (
                        <td key={i} className={`py-5 pr-4 ${i === 0 ? "font-semibold text-gold" : "text-muted"}`}>
                          {c}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-5 text-sm text-muted">{table.footnote}</p>
          </div>

          <Calculator />
        </div>
      </div>
    </section>
  );
}
