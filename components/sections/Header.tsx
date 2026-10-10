"use client";

import { useEffect, useRef, useState } from "react";
import { en } from "@/content/en";
import { LOGIN_URL, REGISTER_URL } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection();
  const navRef = useRef<HTMLElement>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Position the underline under the active nav link
  useEffect(() => {
    const measure = () => {
      const link = navRef.current?.querySelector<HTMLElement>(`a[href="${active}"]`);
      setIndicator(link ? { left: link.offsetLeft, width: link.offsetWidth } : null);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [active]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 [view-transition-name:site-header] ${
        scrolled || open ? "border-b border-line bg-bg/90 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <a href="/" aria-label="GameSlots Partners home" className="flex items-center gap-3">
          <Logo className="h-6 w-auto md:h-7" />
          <span className="hidden border-l border-line pl-3 text-sm font-semibold text-muted sm:inline">
            Partners
          </span>
        </a>

        <nav ref={navRef} className="relative hidden items-center gap-8 lg:flex">
          {en.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "location" : undefined}
              className={`py-2 text-sm font-medium transition-colors duration-300 hover:text-white ${
                active === item.href ? "text-white" : "text-muted"
              }`}
            >
              {item.label}
            </a>
          ))}
          <span
            aria-hidden
            className="absolute bottom-0 h-0.5 rounded-full bg-gold transition-all duration-500 ease-out-soft"
            style={{
              left: indicator?.left ?? 0,
              width: indicator?.width ?? 0,
              opacity: indicator ? 1 : 0,
            }}
          />
        </nav>

        <div className="flex items-center gap-2">
          <Button href={LOGIN_URL} variant="text" size="sm" className="hidden sm:inline-flex">
            {en.cta.login}
          </Button>
          <Button href={REGISTER_URL} size="sm">
            <span className="sm:hidden">{en.cta.registerShort}</span>
            <span className="hidden sm:inline">{en.cta.register}</span>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="relative ml-1 size-9 rounded-lg border border-line text-muted lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {/* Three bars that morph into an X */}
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ease-out-soft ${
                open ? "-translate-y-1/2 rotate-45" : "-translate-y-[6px]"
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-1/2 top-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-current transition-transform duration-300 ease-out-soft ${
                open ? "-translate-y-1/2 -rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out-soft lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="h-[calc(100dvh-4rem)] border-t border-line bg-bg px-4 py-6">
            <ul className="flex flex-col">
              {en.nav.map((item, i) => (
                <li
                  key={item.href}
                  className={`transition-all duration-500 ease-out-soft ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                  }`}
                  style={{ transitionDelay: open ? `${80 + i * 40}ms` : "0ms" }}
                >
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 text-lg font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid gap-3">
              <Button href={REGISTER_URL} size="lg">
                {en.cta.register}
              </Button>
              <Button href={LOGIN_URL} variant="ghost" size="lg">
                {en.cta.login}
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

/** Returns the nav href ("/#product" etc.) of the section under the middle of the viewport. */
function useActiveSection() {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const sections = en.nav
      .map((n) => document.getElementById(n.href.split("#")[1]))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return; // not on the home page

    const visible = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        }
        const current = sections.find((s) => visible.has(s.id));
        setActive(current ? `/#${current.id}` : null);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return active;
}
