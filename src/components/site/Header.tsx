import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="group flex flex-col leading-none">
          <span className="font-serif text-2xl md:text-3xl tracking-wide text-foreground">
            Harmony <span className="text-accent italic">@</span> Hana
          </span>
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
            Day Spa · Bloemfontein
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-foreground/75 hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/27664783475?text=Hi%20Harmony%20%40%20Hana%2C%20I'd%20like%20to%20book%20an%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm tracking-wide hover:bg-accent transition-all shadow-soft"
          >
            Book Appointment
          </a>
        </nav>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border/60 mt-3">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/80 hover:text-accent transition-colors"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="https://wa.me/27664783475"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm tracking-wide text-center"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
