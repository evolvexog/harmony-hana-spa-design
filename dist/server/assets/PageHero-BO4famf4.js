import { T as jsxRuntimeExports } from "./worker-entry-DGHl26GS.js";
function PageHero({ eyebrow, title, subtitle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "pt-40 pb-16 md:pt-48 md:pb-24 bg-gradient-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 text-center max-w-3xl animate-fade-up", children: [
    eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.4em] text-accent mb-5", children: eyebrow }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-serif text-5xl md:text-7xl text-foreground text-balance leading-[1.05]", children: title }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed text-balance", children: subtitle })
  ] }) });
}
export {
  PageHero as P
};
