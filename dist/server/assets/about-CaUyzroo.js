import { T as jsxRuntimeExports } from "./worker-entry-DGHl26GS.js";
import { L as Layout } from "./Layout-DVmohh3Y.js";
import { P as PageHero } from "./PageHero-BO4famf4.js";
import { a as aboutImg } from "./router-aQvnfRYs.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const values = [{
  title: "Relaxation",
  text: "Every visit begins with stillness — soft music, warm light, and time that slows just for you."
}, {
  title: "Confidence",
  text: "Treatments tailored to make you feel beautifully yourself, never anyone else."
}, {
  title: "Self-Care",
  text: "Because looking after you is not a luxury — it is the gentle work of a good life."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Story", title: "A quiet sanctuary, lovingly grown", subtitle: "From two massage beds in 2018 to two cherished branches across Bloemfontein." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutImg, alt: "Harmony @ Hana spa interior", loading: "lazy", width: 1280, height: 1024, className: "rounded-3xl shadow-luxe w-full h-[520px] object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-accent mb-4", children: "2018 — Today" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl mb-6 leading-tight", children: "Built on gentle hands and good intent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Harmony @ Hana opened its doors in 2018 with two massage beds, a small jar of essential oils, and a promise — that every guest would leave feeling truly cared for." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Word travelled gently. Today we welcome guests across two branches in Bloemfontein, with a team of skilled therapists who share that same original promise." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "We don't rush. We don't oversell. We simply create space for you to come back to yourself." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-accent mb-4", children: "Our Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl text-balance", children: "Three quiet promises" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: values.map((v, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/60 rounded-3xl p-10 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-serif text-5xl text-accent/40 mb-4", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mb-3", children: v.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: v.text })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-serif italic text-3xl md:text-5xl leading-tight text-foreground text-balance", children: '"Who needs a superhero when you have an amazing massage therapist."' }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 w-12 h-px bg-accent mx-auto" })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
