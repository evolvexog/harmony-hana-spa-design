import { T as jsxRuntimeExports } from "./worker-entry-DGHl26GS.js";
import { c as createLucideIcon, L as Layout } from "./Layout-DVmohh3Y.js";
import { P as PageHero } from "./PageHero-BO4famf4.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-aQvnfRYs.js";
const __iconNode$1 = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
      key: "1oefj6"
    }
  ],
  ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }]
];
const FileText = createLucideIcon("file-text", __iconNode);
const lists = [{
  title: "Hair Removal Prices",
  desc: "Full waxing menu — eyebrows to full body, gentle and precise.",
  file: "#"
}, {
  title: "Full Service Prices",
  desc: "Everything we offer — nails, facials, massages, body treatments and more.",
  file: "#"
}];
const highlights = [["Express Manicure", "From R180"], ["Classic Pedicure", "From R280"], ["Gel Overlay", "From R320"], ["Eyebrow Shape & Tint", "From R150"], ["Express Facial", "From R380"], ["Full Body Massage (60 min)", "From R550"], ["Hot Stone Massage", "From R650"], ["Body Scrub", "From R450"]];
function PricingPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Layout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Investment in You", title: "Pricing & price lists", subtitle: "Honest, transparent pricing for every ritual. Download a full list or browse our most-loved treatments below." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 grid md:grid-cols-2 gap-6 max-w-4xl", children: lists.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border rounded-3xl p-10 hover:shadow-luxe transition-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-2xl bg-accent/15 text-accent flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { size: 22, strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-serif text-2xl mb-2", children: l.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed mb-6", children: l.desc }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: l.file, onClick: (e) => {
        if (l.file === "#") {
          e.preventDefault();
          alert("Price list will be available soon — please contact us for details.");
        }
      }, className: "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm hover:bg-accent transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
        " Download PDF"
      ] })
    ] }, l.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-24 bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-accent mb-4", children: "Most Loved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-serif text-4xl md:text-5xl", children: "A taste of our menu" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border bg-card rounded-3xl px-8 md:px-12 py-4 shadow-soft", children: highlights.map(([name, price]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex justify-between items-center py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-serif text-lg md:text-xl", children: name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent tracking-wide text-sm md:text-base", children: price })
      ] }, name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-muted-foreground text-xs mt-6", children: "Prices are guidelines and may vary by therapist and product. Final pricing confirmed at booking." })
    ] }) })
  ] });
}
export {
  PricingPage as component
};
