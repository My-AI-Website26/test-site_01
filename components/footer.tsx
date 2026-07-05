import { Coffee, MapPin, Phone, Mail, Facebook } from "lucide-react";

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-ink py-14 text-cream-50/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2 font-serif text-xl font-semibold text-cream-50">
              <Coffee className="h-6 w-6 text-terracotta-400" aria-hidden="true" />
              Torsbeanie
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Corner Cafe &middot; Catering &amp; Food Truck &middot; Cakes &amp; Bakes by Tors.
              Family run in Halstead, Essex.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
              10 Weavers Court, Halstead, Essex, CO9 2JN
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
              <a href="tel:+447890896846" className="hover:text-cream-50">
                07890 896846
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
              <a href="mailto:torsbeanie@proton.me" className="hover:text-cream-50">
                torsbeanie@proton.me
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Facebook className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
              <a
                href="https://facebook.com/torsbeanie"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-50"
              >
                facebook.com/torsbeanie
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-cream-50/10 pt-6 text-xs text-cream-50/50">
          &copy; {year} Torsbeanie. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
