import { en } from "@/content/en";
import { CONTACT, LOGIN_URL, MAIN_SITE_URL, REGISTER_URL } from "@/lib/config";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const { footer, nav, cta } = en;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-8">
        <div>
          <Logo className="h-7 w-auto" />
          <p className="mt-4 max-w-xs text-sm text-muted">{footer.tagline}</p>
          <a
            href={MAIN_SITE_URL}
            target="_blank"
            rel="noopener"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-soft hover:text-gold"
          >
            gameslots.com <Icon name="arrow" className="size-4" />
          </a>
        </div>

        <FooterCol title="Program">
          {nav.map((n) => (
            <FooterLink key={n.href} href={n.href}>
              {n.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Account">
          <FooterLink href={REGISTER_URL}>{cta.register}</FooterLink>
          <FooterLink href={LOGIN_URL}>{cta.login}</FooterLink>
          {footer.legal.map((l) => (
            <FooterLink key={l.label} href={l.href}>
              {l.label}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol title="Contact">
          <FooterLink href={`mailto:${CONTACT.email}`}>
            <Icon name="mail" className="size-4" /> {CONTACT.email}
          </FooterLink>
          <FooterLink href={CONTACT.telegram}>
            <Icon name="send" className="size-4" /> Telegram
          </FooterLink>
        </FooterCol>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-muted md:flex-row md:items-center md:px-8">
          <span className="grid size-9 shrink-0 place-items-center rounded-full border-2 border-gold-soft font-black text-gold-soft">
            18+
          </span>
          <p className="flex-1">{footer.disclaimer}</p>
          <p className="shrink-0">© {year} GameSlots Partners</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold text-white">{title}</h3>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-gold">
        {children}
      </a>
    </li>
  );
}
