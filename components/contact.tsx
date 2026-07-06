"use client";

import * as React from "react";
import { MapPin, Phone, Mail, Facebook, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";

const CONTACT = {
  address: "10 Weavers Court, Halstead, Essex, CO9 2JN",
  phoneDisplay: "07890 896846",
  phoneHref: "tel:+447890896846",
  email: "torsbeanie@proton.me",
  facebook: "https://facebook.com/torsbeanie",
  lat: 51.9432274,
  lng: 0.6358559,
};

const SERVICE_OPTIONS = [
  { value: "cafe-table", label: "Cafe Table Booking" },
  { value: "food-truck", label: "Food Truck Booking" },
  { value: "cake-order", label: "Cake Order" },
];

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [sending, setSending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      service: String(data.get("service") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    setSending(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "Failed to send message.");
      }

      form.reset();
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-cream-50 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow justify-center">Get In Touch</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Visit, Book, or Say Hello
          </h2>
          <p className="mt-4 text-ink/70">
            Whether it&apos;s a table for two or a truck for two hundred,
            we&apos;d love to hear from you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* NAP + Map */}
          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-5 rounded-3xl bg-cream-100 p-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600" aria-hidden="true" />
                <p className="text-ink/80">{CONTACT.address}</p>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600" aria-hidden="true" />
                <a href={CONTACT.phoneHref} className="text-ink/80 hover:text-terracotta-600">
                  {CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600" aria-hidden="true" />
                <a href={`mailto:${CONTACT.email}`} className="text-ink/80 hover:text-terracotta-600">
                  {CONTACT.email}
                </a>
              </div>
              <div className="flex items-start gap-4">
                <Facebook className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-600" aria-hidden="true" />
                <a
                  href={CONTACT.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink/80 hover:text-terracotta-600"
                >
                  facebook.com/torsbeanie
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-soft">
              <iframe
                title="Torsbeanie location map"
                src={`https://www.google.com/maps?q=${CONTACT.lat},${CONTACT.lng}&z=16&output=embed`}
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-cream-100 p-8 shadow-soft lg:col-span-3">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-12 w-12 text-olive-600" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-2xl text-ink">
                  Message sent
                </h3>
                <p className="mt-2 max-w-sm text-ink/65">
                  Thanks for reaching out &mdash; we&apos;ll get back to you as soon as we can.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <Select id="service" name="service" defaultValue="cafe-table">
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell us about your event, booking, or cake order..."
                  />
                </div>

                {error && (
                  <p className="text-sm font-medium text-terracotta-600">{error}</p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={sending}
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  {sending ? "Sending..." : "Send Enquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
