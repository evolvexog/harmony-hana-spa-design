import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-DGHl26GS.js";
import { L as Link } from "./router-aQvnfRYs.js";
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$7 = [
  [
    "path",
    { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }
  ]
];
const Facebook = createLucideIcon("facebook", __iconNode$7);
const __iconNode$6 = [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]
];
const Instagram = createLucideIcon("instagram", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
      key: "1r0f0z"
    }
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]
];
const MapPin = createLucideIcon("map-pin", __iconNode$4);
const __iconNode$3 = [
  ["path", { d: "M4 5h16", key: "1tepv9" }],
  ["path", { d: "M4 12h16", key: "1lakjw" }],
  ["path", { d: "M4 19h16", key: "1djgab" }]
];
const Menu = createLucideIcon("menu", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
      key: "9njp5v"
    }
  ]
];
const Phone = createLucideIcon("phone", __iconNode$1);
const __iconNode = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
];
const X = createLucideIcon("x", __iconNode);
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" }
];
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-lg border-b border-border/60 py-3" : "bg-transparent py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex flex-col leading-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-serif text-2xl md:text-3xl tracking-wide text-foreground", children: [
              "Harmony ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent italic", children: "@" }),
              " Hana"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1", children: "Day Spa · Bloemfontein" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-10", children: [
            navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.to,
                className: "text-sm tracking-wide text-foreground/75 hover:text-accent transition-colors",
                activeProps: { className: "text-accent" },
                activeOptions: { exact: l.to === "/" },
                children: l.label
              },
              l.to
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://wa.me/27664783475?text=Hi%20Harmony%20%40%20Hana%2C%20I'd%20like%20to%20book%20an%20appointment.",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm tracking-wide hover:bg-accent transition-all shadow-soft",
                children: "Book Appointment"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "lg:hidden text-foreground p-2",
              onClick: () => setOpen(!open),
              "aria-label": "Toggle menu",
              children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 24 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { size: 24 })
            }
          )
        ] }),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden bg-background/98 backdrop-blur-lg border-t border-border/60 mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-6 flex flex-col gap-5", children: [
          navLinks.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              onClick: () => setOpen(false),
              className: "text-base text-foreground/80 hover:text-accent transition-colors",
              activeProps: { className: "text-accent" },
              activeOptions: { exact: l.to === "/" },
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://wa.me/27664783475",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm tracking-wide text-center",
              children: "Book Appointment"
            }
          )
        ] }) })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "bg-primary text-primary-foreground mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-16 grid md:grid-cols-4 gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-serif text-3xl mb-3", children: [
          "Harmony ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "italic text-accent-foreground/90", children: "@" }),
          " Hana"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm leading-relaxed max-w-sm", children: "A sanctuary of calm in the heart of Bloemfontein. Treatments crafted to restore balance to body and mind." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 mt-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/harmonyathana_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", "aria-label": "Instagram", className: "w-10 h-10 rounded-full border border-primary-foreground/25 flex items-center justify-center hover:bg-accent hover:border-accent transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Facebook", className: "w-10 h-10 rounded-full border border-primary-foreground/25 flex items-center justify-center hover:bg-accent hover:border-accent transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Facebook, { size: 16 }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-lg mb-4", children: "Explore" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm text-primary-foreground/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-accent-foreground transition-colors", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-accent-foreground transition-colors", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/pricing", className: "hover:text-accent-foreground transition-colors", children: "Pricing" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-accent-foreground transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-serif text-lg mb-4", children: "Visit" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-3 text-sm text-primary-foreground/70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16, className: "mt-0.5 flex-shrink-0" }),
            " Lemo Mall, Dr Belcher Street, Bloemfontein"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 16, className: "mt-0.5 flex-shrink-0" }),
            " 066 478 3475"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16, className: "mt-0.5 flex-shrink-0" }),
            " helolemo@harmonyhana.co.za"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Harmony @ Hana Day Spa · Bloemfontein, South Africa"
    ] })
  ] });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: "https://wa.me/27664783475?text=Hi%20Harmony%20%40%20Hana%2C%20I'd%20like%20to%20book%20an%20appointment.",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Book on WhatsApp",
      className: "fixed bottom-6 right-6 z-40 group flex items-center gap-2 bg-[#25D366] text-white pl-4 pr-5 py-3.5 rounded-full shadow-luxe hover:scale-105 transition-transform",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { size: 20, fill: "currentColor" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium hidden sm:inline", children: "Book Now" })
      ]
    }
  );
}
function Layout({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {})
  ] });
}
export {
  Layout as L,
  MapPin as M,
  Phone as P,
  Mail as a,
  createLucideIcon as c
};
