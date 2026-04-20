import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Bookings — Harmony @ Hana Day Spa Bloemfontein" },
      { name: "description", content: "Visit Harmony @ Hana at Lemo Mall, Dr Belcher Street, Bloemfontein. Call 066 478 3475 or send us a message to book your treatment." },
      { property: "og:title", content: "Contact Harmony @ Hana" },
      { property: "og:description", content: "Bookings, hours and directions to our Bloemfontein day spa." },
    ],
  }),
  component: ContactPage,
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  email: z.string().trim().email("Valid email required").max(255),
  date: z.string().max(20).optional(),
  time: z.string().max(20).optional(),
  message: z.string().trim().max(1000).optional(),
});

const hours = [
  ["Mon – Fri", "09:00 – 17:30"],
  ["Saturday", "09:00 – 15:00"],
  ["Sunday", "09:00 – 13:00"],
  ["Public Holidays", "09:00 – 12:00"],
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      alert(parsed.error.issues[0]?.message ?? "Please check your details.");
      return;
    }
    setSubmitting(true);
    const text = `Hi Harmony @ Hana,\n\nName: ${parsed.data.name}\nPhone: ${parsed.data.phone}\nEmail: ${parsed.data.email}\nDate: ${parsed.data.date ?? "-"}\nTime: ${parsed.data.time ?? "-"}\n\n${parsed.data.message ?? ""}`;
    window.open(`https://wa.me/27664783475?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitting(false);
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Get in Touch"
        title="We'd love to welcome you"
        subtitle="Send a message, give us a ring, or pop by — we'll find the perfect time for your visit."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 bg-card border border-border rounded-3xl p-8 md:p-12 shadow-soft space-y-5"
          >
            <h2 className="font-serif text-3xl mb-2">Request a booking</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Fill in your details and we'll confirm via WhatsApp.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" name="name" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Preferred date" name="date" type="date" />
              <Field label="Preferred time" name="time" type="time" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                maxLength={1000}
                placeholder="Which treatment are you interested in?"
                className="w-full px-4 py-3 rounded-2xl bg-background border border-border focus:outline-none focus:border-accent transition-colors text-sm resize-none"
              />
            </div>

            <button
              disabled={submitting}
              className="w-full px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all shadow-soft disabled:opacity-50 tracking-wide"
            >
              {submitting ? "Sending…" : "Send via WhatsApp"}
            </button>
          </form>

          {/* INFO */}
          <aside className="lg:col-span-2 space-y-6">
            <InfoCard icon={MapPin} title="Visit">
              Lemo Mall, Dr Belcher Street<br />Bloemfontein
            </InfoCard>
            <InfoCard icon={Phone} title="Call">
              <a href="tel:+27664783475" className="hover:text-accent">066 478 3475</a>
            </InfoCard>
            <InfoCard icon={Mail} title="Email">
              <a href="mailto:helolemo@harmonyhana.co.za" className="hover:text-accent break-all">
                helolemo@harmonyhana.co.za
              </a>
            </InfoCard>
            <InfoCard icon={Clock} title="Hours">
              <ul className="space-y-1.5 text-sm">
                {hours.map(([d, h]) => (
                  <li key={d} className="flex justify-between gap-4">
                    <span className="text-foreground/70">{d}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </aside>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl overflow-hidden shadow-luxe border border-border">
            <iframe
              title="Harmony @ Hana location"
              src="https://www.google.com/maps?q=Lemo+Mall+Dr+Belcher+Street+Bloemfontein&output=embed"
              width="100%"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0 w-full"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label, name, type = "text", required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}{required && <span className="text-accent"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        className="w-full px-4 py-3 rounded-full bg-background border border-border focus:outline-none focus:border-accent transition-colors text-sm"
      />
    </div>
  );
}

function InfoCard({
  icon: Icon, title, children,
}: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-3xl p-7">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-accent/15 text-accent flex items-center justify-center">
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-xl">{title}</h3>
      </div>
      <div className="text-foreground/80 text-sm leading-relaxed pl-13">{children}</div>
    </div>
  );
}
