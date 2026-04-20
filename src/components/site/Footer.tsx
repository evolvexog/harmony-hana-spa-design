import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-serif text-3xl mb-3">
            Harmony <span className="italic text-accent-foreground/90">@</span> Hana
          </h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
            A sanctuary of calm in the heart of Bloemfontein. Treatments crafted
            to restore balance to body and mind.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-primary-foreground/25 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-primary-foreground/25 flex items-center justify-center hover:bg-accent hover:border-accent transition-all">
              <Facebook size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/70">
            <li><Link to="/about" className="hover:text-accent-foreground transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-accent-foreground transition-colors">Services</Link></li>
            <li><Link to="/pricing" className="hover:text-accent-foreground transition-colors">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-accent-foreground transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Visit</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-2"><MapPin size={16} className="mt-0.5 flex-shrink-0" /> Lemo Mall, Dr Belcher Street, Bloemfontein</li>
            <li className="flex gap-2"><Phone size={16} className="mt-0.5 flex-shrink-0" /> 066 478 3475</li>
            <li className="flex gap-2"><Mail size={16} className="mt-0.5 flex-shrink-0" /> helolemo@harmonyhana.co.za</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Harmony @ Hana Day Spa · Bloemfontein, South Africa
      </div>
    </footer>
  );
}
