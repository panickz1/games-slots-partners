"use client";

import { useEffect, useState } from "react";
import { en } from "@/content/en";
import { LOGIN_URL, REGISTER_URL } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-20 md:px-8">
        <a href="/" aria-label="GameSlots Partners home" className="flex items-center gap-3">
          <Logo className="h-6 w-auto md:h-7" />
          <span className="hidden border-l border-line pl-3 text-sm font-semibold text-muted sm:inline">
            Partners
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {en.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
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
            className="ml-1 grid size-9 place-items-center rounded-lg border border-line text-muted lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <nav className="h-[calc(100dvh-4rem)] border-t border-line bg-bg px-4 py-6 lg:hidden">
          <ul className="flex flex-col">
            {en.nav.map((item) => (
              <li key={item.href}>
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
      )}
    </header>
  );
}
