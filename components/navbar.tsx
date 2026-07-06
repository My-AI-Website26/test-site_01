"use client";

import * as React from "react";
import { Menu, X, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#cafe", label: "Cafe" },
  { href: "#catering", label: "Catering" },
  { href: "#menu", label: "Menu" },
  { href: "#contact", label: "Contact Us" },
];

export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-cream-50/95 shadow-soft backdrop-blur-md transition-all duration-300",
        scrolled
          ? "md:bg-cream-50/90 md:shadow-soft md:backdrop-blur-md"
          : "md:bg-transparent md:shadow-none md:backdrop-blur-0"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-2 font-serif text-xl font-semibold text-ink">
          <Coffee className="h-6 w-6 text-terracotta-600" aria-hidden="true" />
          Torsbeanie
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-ink/70 transition-colors hover:text-terracotta-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href="#contact">Book Food Truck</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink/10 bg-cream-50 px-5 pb-6 md:hidden">
          <ul className="flex flex-col gap-1 pt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-ink/80 hover:bg-ink/5 hover:text-terracotta-600"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-3 w-full" onClick={() => setOpen(false)}>
            <a href="#contact">Book Food Truck</a>
          </Button>
        </div>
      )}
    </header>
  );
}
