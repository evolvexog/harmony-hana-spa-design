import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import aboutImg from "@/assets/about-spa.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Harmony @ Hana Day Spa Bloemfontein" },
      { name: "description", content: "Founded in 2018, Harmony @ Hana grew from two massage beds to two welcoming branches in Bloemfontein. Discover our story." },
      { property: "og:title", content: "About Harmony @ Hana" },
      { property: "og:description", content: "Our story of relaxation, confidence and self-care in Bloemfontein." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Relaxation", text: "Every visit begins with stillness — soft music, warm light, and time that slows just for you." },
  { title: "Confidence", text: "Treatments tailored to make you feel beautifully yourself, never anyone else." },
  { title: "Self-Care", text: "Because looking after you is not a luxury — it is the gentle work of a good life." },
];

function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our Story"
        title="A quiet sanctuary, lovingly grown"
        subtitle="From two massage beds in 2018 to two cherished branches across Bloemfontein."
      />

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <img
            src={aboutImg}
            alt="Harmony @ Hana spa interior"
            loading="lazy"
            width={1280}
            height={1024}
            className="rounded-3xl shadow-luxe w-full h-[520px] object-cover"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">2018 — Today</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
              Built on gentle hands and good intent
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Harmony @ Hana opened its doors in 2018 with two massage beds, a
                small jar of essential oils, and a promise — that every guest
                would leave feeling truly cared for.
              </p>
              <p>
                Word travelled gently. Today we welcome guests across two branches
                in Bloemfontein, with a team of skilled therapists who share that
                same original promise.
              </p>
              <p>
                We don't rush. We don't oversell. We simply create space for you
                to come back to yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VALUES */}
      <section className="py-20 md:py-28 bg-muted/40">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Our Mission</p>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Three quiet promises
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="bg-card border border-border/60 rounded-3xl p-10 text-center">
                <div className="font-serif text-5xl text-accent/40 mb-4">0{i + 1}</div>
                <h3 className="font-serif text-2xl mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="font-serif italic text-3xl md:text-5xl leading-tight text-foreground text-balance">
            "Who needs a superhero when you have an amazing massage therapist."
          </p>
          <div className="mt-8 w-12 h-px bg-accent mx-auto" />
        </div>
      </section>
    </Layout>
  );
}
