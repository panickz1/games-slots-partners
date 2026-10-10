"use client";

import { useEffect, useState } from "react";
import { en } from "@/content/en";

const KEY = "gs-partners-cookies";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const choose = (value: "accepted" | "declined") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 mx-auto flex max-w-md items-center gap-4 rounded-xl border border-line bg-surface-2/95 p-4 shadow-2xl backdrop-blur md:left-6 md:mx-0">
      <p className="flex-1 text-xs text-muted">
        {en.cookie.text}{" "}
        <a href="/cookies/" className="text-white underline underline-offset-2 hover:text-gold">
          {en.cookie.policy}
        </a>
      </p>
      <div className="flex shrink-0 flex-col gap-1.5">
        <button
          type="button"
          onClick={() => choose("accepted")}
          className="rounded-md bg-gold-gradient px-4 py-1.5 text-xs font-bold text-black"
        >
          {en.cookie.accept}
        </button>
        <button
          type="button"
          onClick={() => choose("declined")}
          className="rounded-md px-4 py-1 text-xs font-semibold text-muted hover:text-white"
        >
          {en.cookie.decline}
        </button>
      </div>
    </div>
  );
}
