import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Download, FileText } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Price Lists — Harmony @ Hana Day Spa" },
      { name: "description", content: "Download our latest hair removal and full service price lists. Transparent, friendly pricing for every treatment at Harmony @ Hana Bloemfontein." },
      { property: "og:title", content: "Pricing — Harmony @ Hana" },
      { property: "og:description", content: "Download our spa price lists." },
    ],
  }),
  component: PricingPage,
});

const lists = [
  {
    title: "Hair Removal Prices",
    desc: "Full waxing menu — eyebrows to full body, gentle and precise.",
    file: "#",
  },
  {
    title: "Full Service Prices",
    desc: "Everything we offer — nails, facials, massages, body treatments and more.",
    file: "#",
  },
];

const highlights = [
  ["Express Manicure", "From R180"],
  ["Classic Pedicure", "From R280"],
  ["Gel Overlay", "From R320"],
  ["Eyebrow Shape & Tint", "From R150"],
  ["Express Facial", "From R380"],
  ["Full Body Massage (60 min)", "From R550"],
  ["Hot Stone Massage", "From R650"],
  ["Body Scrub", "From R450"],
];

function PricingPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Investment in You"
        title="Pricing & price lists"
        subtitle="Honest, transparent pricing for every ritual. Download a full list or browse our most-loved treatments below."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-6 max-w-4xl">
          {lists.map((l) => (
            <div key={l.title} className="bg-card border border-border rounded-3xl p-10 hover:shadow-luxe transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-5">
                <FileText size={22} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl mb-2">{l.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{l.desc}</p>
              <a
                href={l.file}
                onClick={(e) => {
                  if (l.file === "#") {
                    e.preventDefault();
                    alert("Price list will be available soon — please contact us for details.");
                  }
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm hover:bg-accent transition-colors"
              >
                <Download size={16} /> Download PDF
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-20 md:py-24 bg-muted/40">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Most Loved</p>
            <h2 className="font-serif text-4xl md:text-5xl">A taste of our menu</h2>
          </div>
          <ul className="divide-y divide-border bg-card rounded-3xl px-8 md:px-12 py-4 shadow-soft">
            {highlights.map(([name, price]) => (
              <li key={name} className="flex justify-between items-center py-5">
                <span className="font-serif text-lg md:text-xl">{name}</span>
                <span className="text-accent tracking-wide text-sm md:text-base">{price}</span>
              </li>
            ))}
          </ul>
          <p className="text-center text-muted-foreground text-xs mt-6">
            Prices are guidelines and may vary by therapist and product. Final pricing confirmed at booking.
          </p>
        </div>
      </section>
    </Layout>
  );
}
