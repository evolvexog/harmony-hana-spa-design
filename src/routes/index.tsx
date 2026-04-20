import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Sparkles, Flower2, Hand, ArrowRight, Star, Quote } from "lucide-react";
import heroImg from "@/assets/hero-spa.jpg";
import aboutImg from "@/assets/about-spa.jpg";
import ctaImg from "@/assets/cta-banner.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harmony @ Hana — Day Spa Bloemfontein | Relax, Refresh, Rejuvenate" },
      { name: "description", content: "Premium day spa in Bloemfontein. Book massages, nails, facials, and body treatments at Harmony @ Hana — a sanctuary of calm in Lemo Mall." },
      { property: "og:title", content: "Harmony @ Hana — Day Spa Bloemfontein" },
      { property: "og:description", content: "Relax, Refresh, Rejuvenate. Book your treatment today." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Sparkles, title: "Nails", desc: "Gel, acrylic, manicure & pedicure perfection." },
  { icon: Flower2, title: "Beauty", desc: "Brows, waxing & glow-restoring facials." },
  { icon: Hand, title: "Body", desc: "Massages, slimming & soothing body scrubs." },
];

const testimonials = [
  { name: "Lerato M.", text: "The most relaxing afternoon I've had in months. The hot stone massage was pure bliss.", rating: 5 },
  { name: "Anneke V.", text: "Beautiful space, attentive therapists. My skin has never looked better after their facial.", rating: 5 },
  { name: "Thabo K.", text: "I bought my partner a gift voucher and she's already booked three more sessions.", rating: 5 },
  { name: "Mandi P.", text: "Calm, professional, and so welcoming. Harmony @ Hana lives up to its name.", rating: 5 },
];

function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Serene spa setting with candles and towels"
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
        </div>

        <div className="container relative mx-auto px-6 py-32">
          <div className="max-w-2xl animate-fade-up">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6">
              Day Spa · Bloemfontein
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] text-balance">
              Relax. <em className="text-accent not-italic font-light">Refresh.</em>
              <br />
              Rejuvenate.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              A sanctuary where every treatment is a quiet ritual — crafted to
              restore balance to body, skin and soul.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/27664783475?text=Hi%20Harmony%20%40%20Hana%2C%20I'd%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all shadow-soft tracking-wide"
              >
                Book Appointment
              </a>
              <Link
                to="/services"
                className="px-8 py-4 rounded-full border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all tracking-wide flex items-center gap-2"
              >
                View Services <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Our Treatments</p>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Curated rituals for the modern soul
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <Link
                key={s.title}
                to="/services"
                className="group bg-card border border-border/60 rounded-3xl p-10 hover:shadow-luxe transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <s.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
                <span className="text-sm text-accent group-hover:gap-3 inline-flex items-center gap-2 transition-all">
                  Discover <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-32 bg-muted/40">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Inside Harmony @ Hana spa"
              loading="lazy"
              width={1280}
              height={1024}
              className="rounded-3xl shadow-luxe w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-accent text-accent-foreground px-8 py-6 rounded-2xl shadow-luxe">
              <div className="font-serif text-4xl">7+</div>
              <div className="text-xs uppercase tracking-widest mt-1">Years of care</div>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Our Story</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-6 text-balance">
              From two beds to a beloved sanctuary
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Founded in 2018 with just two massage beds and a quiet dream,
              Harmony @ Hana has grown into two welcoming branches in Bloemfontein —
              still holding fast to the same gentle hands and unhurried care.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Every treatment is an invitation to slow down, breathe deeper, and
              leave a little lighter than when you arrived.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-foreground border-b border-accent pb-1 hover:text-accent transition-colors"
            >
              Read our story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.4em] text-accent mb-4">Kind Words</p>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">
              Loved by our guests
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-card border border-border/60 rounded-3xl p-8 hover:shadow-soft transition-shadow"
              >
                <Quote size={24} className="text-accent mb-4" strokeWidth={1.5} />
                <p className="text-foreground/80 text-sm leading-relaxed mb-6 italic font-serif text-base">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{t.name}</span>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={12} fill="currentColor" className="text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-32 overflow-hidden">
        <img
          src={ctaImg}
          alt=""
          loading="lazy"
          width={1920}
          height={900}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" />
        <div className="container relative mx-auto px-6 text-center text-background">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 text-balance">
            Treat yourself today
          </h2>
          <p className="max-w-xl mx-auto mb-10 text-background/85 leading-relaxed">
            You deserve a quiet hour. Book a treatment and let us take care of the rest.
          </p>
          <a
            href="https://wa.me/27664783475?text=Hi%20Harmony%20%40%20Hana%2C%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full bg-background text-foreground hover:bg-accent hover:text-accent-foreground transition-all tracking-wide"
          >
            Book Your Visit
          </a>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="py-20 bg-secondary/40">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <h3 className="font-serif text-3xl md:text-4xl mb-3">Stay in the calm</h3>
          <p className="text-muted-foreground mb-8 text-sm">
            Quiet promotions, seasonal rituals & spa news — straight to your inbox.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you — we'll be in touch.");
            }}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              required
              type="email"
              placeholder="your@email.com"
              maxLength={255}
              className="flex-1 px-5 py-3.5 rounded-full bg-background border border-border focus:outline-none focus:border-accent transition-colors text-sm"
            />
            <button className="px-7 py-3.5 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-colors text-sm tracking-wide">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
