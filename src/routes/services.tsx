import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import nailsImg from "@/assets/service-nails.jpg";
import beautyImg from "@/assets/service-beauty.jpg";
import bodyImg from "@/assets/service-body.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Nails, Beauty & Body Treatments | Harmony @ Hana" },
      { name: "description", content: "Explore our full menu of spa treatments in Bloemfontein: gel & acrylic nails, manicures, pedicures, facials, waxing, massages, body scrubs and slimming treatments." },
      { property: "og:title", content: "Spa Services — Harmony @ Hana Bloemfontein" },
      { property: "og:description", content: "Nails, beauty & body treatments crafted with care." },
      { property: "og:image", content: bodyImg },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  {
    id: "nails",
    title: "Nails",
    image: nailsImg,
    blurb: "Beautifully finished hands and feet — from quick polish to lasting gel.",
    items: [
      { name: "Gel / Acrylic Nails", desc: "Long-wear shine in classic neutrals or your colour of choice." },
      { name: "Manicure", desc: "Soak, shape, soften and polish — a small, perfect ritual." },
      { name: "Pedicure", desc: "Restoring foot soak, exfoliation and finishing polish." },
    ],
  },
  {
    id: "beauty",
    title: "Beauty",
    image: beautyImg,
    blurb: "Polish your everyday with treatments that frame your features.",
    items: [
      { name: "Eyebrow Shape & Tint", desc: "Defined, natural-looking brows tailored to your face." },
      { name: "Waxing", desc: "Gentle, professional hair removal for face and body." },
      { name: "Facials", desc: "Cleansing, hydrating and brightening rituals for every skin." },
    ],
  },
  {
    id: "body",
    title: "Body",
    image: bodyImg,
    blurb: "Treatments designed to release tension and reset the body.",
    items: [
      { name: "Massages", desc: "Swedish, deep tissue, hot stone and aromatherapy." },
      { name: "Slimming Treatments", desc: "Targeted contouring sessions to support your goals." },
      { name: "Body Scrubs", desc: "Exfoliating rituals that leave skin glowing and soft." },
    ],
  },
];

function ServicesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="The Menu"
        title="Treatments crafted with care"
        subtitle="A curated menu of nail, beauty and body rituals — each performed by skilled hands in a calm, unhurried space."
      />

      <section className="py-20 md:py-28 space-y-24">
        {categories.map((cat, idx) => (
          <div key={cat.id} className="container mx-auto px-6">
            <div className={`grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative">
                <img
                  src={cat.image}
                  alt={`${cat.title} treatments at Harmony @ Hana`}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="rounded-3xl w-full h-[480px] object-cover shadow-luxe"
                />
                <div className="absolute top-6 left-6 bg-background/95 backdrop-blur px-5 py-2 rounded-full text-xs uppercase tracking-[0.3em]">
                  {cat.title}
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">
                  Category 0{idx + 1}
                </p>
                <h2 className="font-serif text-4xl md:text-5xl mb-4 leading-tight">
                  {cat.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{cat.blurb}</p>

                <ul className="divide-y divide-border">
                  {cat.items.map((item) => (
                    <li key={item.name} className="py-5">
                      <div className="flex justify-between items-baseline gap-4 mb-1">
                        <h3 className="font-serif text-xl">{item.name}</h3>
                        <Link
                          to="/pricing"
                          className="text-xs uppercase tracking-widest text-accent hover:underline whitespace-nowrap"
                        >
                          View Price
                        </Link>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="font-serif text-4xl md:text-5xl mb-5 text-balance">
            Ready for your treatment?
          </h2>
          <p className="text-muted-foreground mb-8">
            Reach out and we'll find a time that suits you best.
          </p>
          <a
            href="https://wa.me/27664783475?text=Hi%20Harmony%20%40%20Hana%2C%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all shadow-soft"
          >
            Book on WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
