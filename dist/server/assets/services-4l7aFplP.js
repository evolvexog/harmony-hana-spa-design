import { T as jsxRuntimeExports } from "./worker-entry-DGHl26GS.js";
import { b as bodyImg, L as Link } from "./router-aQvnfRYs.js";
import { L as Layout } from "./Layout-DVmohh3Y.js";
import { P as PageHero } from "./PageHero-BO4famf4.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const nailsImg = "/assets/service-nails-CcVyuwgU.jpg";
const beautyImg = "/assets/service-beauty-BZJq568i.jpg";
const categories = [{
  id: "nails",
  title: "Nails",
  image: nailsImg,
  blurb: "Beautifully finished hands and feet — from quick polish to lasting gel.",
  items: [{
    name: "Gel / Acrylic Nails",
    desc: "Long-wear shine in classic neutrals or your colour of choice."
  }, {
    name: "Manicure",
    desc: "Soak, shape, soften and polish — a small, perfect ritual."
  }, {
    name: "Pedicure",
    desc: "Restoring foot soak, exfoliation and finishing polish."
  }]
}, {
  id: "beauty",
  title: "Beauty",
  image: beautyImg,
  blurb: "Polish your everyday with treatments that frame your features.",
  items: [{
    name: "Eyebrow Shape & Tint",
    desc: "Defined, natural-looking brows tailored to your face."
  }, {
    name: "Waxing",
    desc: "Gentle, professional hair removal for face and body."
  }, {
    name: "Facials",
    desc: "Cleansing, hydrating and brightening rituals for every skin."
  }]
}, {
  id: "body",
  title: "Body",
  image: bodyImg,
  blurb: "Treatments designed to release tension and reset the body.",
  items: [{
    name: "Massages",
    desc: "Swedish, deep tissue, hot stone and aromatherapy."
  }, {
    name: "Slimming Treatments",
    desc: "Targeted contouring sessions to support your goals."
  }, {
    name: "Body Scrubs",
    desc: "Exfoliating rituals that leave skin glowing and soft."
  }]
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "The Menu", title: "Treatments crafted with care", subtitle: "A curated menu of nail, beauty and body rituals — each performed by skilled hands in a calm, unhurried space." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 space-y-24", children: categories.map((cat, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid md:grid-cols-2 gap-10 lg:gap-16 items-center ${idx % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: cat.image, alt: `${cat.title} treatments at Harmony @ Hana`, loading: "lazy", width: 1024, height: 1024, className: "rounded-3xl w-full h-[480px] object-cover shadow-luxe" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-6 left-6 bg-background/95 backdrop-blur px-5 py-2 rounded-full text-xs uppercase tracking-[0.3em]", children: cat.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs uppercase tracking-[0.4em] text-accent mb-4", children: [
          "Category 0",
          idx + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mb-4 leading-tight", children: cat.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed mb-8", children: cat.blurb }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border", children: cat.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-baseline gap-4 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-xl", children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "text-xs uppercase tracking-widest text-accent hover:underline whitespace-nowrap", children: "View Price" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.desc })
        ] }, item.name)) })
      ] })
    ] }) }, cat.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mb-5 text-balance", children: "Ready for your treatment?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Reach out and we'll find a time that suits you best." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/27664783475?text=Hi%20Harmony%20%40%20Hana%2C%20I'd%20like%20to%20book%20an%20appointment.", target: "_blank", rel: "noopener noreferrer", className: "inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground hover:bg-accent transition-all shadow-soft", children: "Book on WhatsApp" })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
