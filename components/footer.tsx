import { Coffee, MapPin, Phone, Mail, Facebook, Clock } from "lucide-react";
import { CONTACT, OPENING_HOURS } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink py-14 text-cream-50/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2 font-serif text-xl font-semibold text-cream-50">
              <Coffee className="h-6 w-6 text-terracotta-400" aria-hidden="true" />
              {CONTACT.name}
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              Corner Cafe &middot; Catering &amp; Food Truck &middot; Cakes &amp; Bakes by Tors.
              Family run in Halstead, Essex.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
              {CONTACT.address}
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
              <a href={CONTACT.phoneHref} className="hover:text-cream-50">
                {CONTACT.phoneDisplay}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
              <a href={`mailto:${CONTACT.email}`} className="hover:text-cream-50">
                {CONTACT.email}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Facebook className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
              <a
                href={CONTACT.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cream-50"
              >
                {CONTACT.facebookDisplay}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-terracotta-400" aria-hidden="true" />
              {OPENING_HOURS.summary}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-cream-50/10 pt-6 text-xs text-cream-50/50">
          &copy; {year} {CONTACT.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
