"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="mt-3 flex items-center justify-between rounded-full border border-ink/10 bg-paper/80 py-1.5 pl-3 pr-2 backdrop-blur-md shadow-[0_1px_0_0_rgba(18,20,15,0.04)] sm:py-2.5 sm:pl-5 sm:pr-3 md:mt-4">
          <Link href="/" className="flex min-w-0 shrink-0 items-center">
            <Logo
              markClassName="h-11 w-11 sm:h-14 sm:w-14 md:h-16 md:w-16"
              wordmarkClassName="text-lg sm:text-xl md:text-2xl"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-ink/70 hover:text-ink transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="btn-shine inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-amber-deep"
            >
              Talk to Our Team
            </Link>
          </div>

          <button
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {open ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden mt-2 rounded-3xl border border-ink/10 bg-paper px-6 py-6 shadow-xl">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl px-2 py-2.5 text-base font-medium text-ink/80 transition-colors hover:bg-ink/5 hover:text-ink"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
                onClick={() => setOpen(false)}
              >
                Talk to Our Team
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
