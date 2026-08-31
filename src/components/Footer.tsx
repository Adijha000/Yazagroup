import Link from "next/link";
import { Logo } from "./Logo";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/insights", label: "Insights" },
    ],
  },
  {
    title: "Work With Us",
    links: [
      { href: "/services", label: "Services" },
      { href: "/solutions", label: "Solutions" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-ink pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 md:grid-cols-[1.2fr_1fr] md:gap-10">
          <div>
            <Logo variant="light" markClassName="h-9 w-9" wordmarkClassName="text-xl" />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/45">
              Yaza IT Solution and Consulting Private Limited. A consulting
              partner first, staffing partner second — built around the work
              ahead.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-paper/40">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-sm text-paper/65 transition-colors hover:text-amber"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-paper/10 pt-8 text-xs text-paper/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Yaza IT Solution and Consulting Private Limited.</p>
          <p>Jaipur, Rajasthan, India</p>
        </div>
      </div>
    </footer>
  );
}
