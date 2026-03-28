import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const footerServices = [
  { label: "Hydraulic Pumps", id: "hydraulic-pumps" },
  { label: "Hydraulic Motors", id: "hydraulic-motors" },
  { label: "Hydraulic Cylinders", id: "hydraulic-cylinders" },
  { label: "Pneumatic Cylinders", id: "pneumatic-cylinders" },
  { label: "Hydraulic Power Packs", id: "hydraulic-power-packs" },
  { label: "Water Pumps", id: "water-pumps" },
  { label: "Design & Engineering", id: "design-engineering" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="mb-4 bg-white rounded-lg inline-block px-3 py-2">
              <Image
                src="/logo-eh.jpeg"
                alt="Eastern Hydraulics Logo"
                width={200}
                height={53}
                className="h-8 w-auto"
                style={{ clipPath: "inset(0 3% 0 0)" }}
              />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              B-BBEE listed (LS0577) with SABS ISO 9001 accreditation. Specializing in
              the supply, repair, manufacture and design of hydraulic equipment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/certifications", label: "Certifications" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Clickable */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2.5">
              {footerServices.map((service) => (
                <li key={service.id}>
                  <a
                    href={`/services#${service.id}`}
                    className="text-white/70 text-sm hover:text-white transition-colors duration-200"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+27118280360"
                  className="flex items-start gap-3 text-white/70 text-sm hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>(+27) 11 828 0360/1/2/3/4/5</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:sales@easterns.co.za"
                  className="flex items-start gap-3 text-white/70 text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  sales@easterns.co.za
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=2+Rover+Road,+Rustivia+Ext+3,+Elandsfontein,+1601,+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 text-sm hover:text-white transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    2 Rover Road, Rustivia Ext 3
                    <br />
                    Elandsfontein, 1601
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} Eastern Hydraulics (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/40 text-xs">
              ISO 9001 Accredited &bull; B-BBEE Level 3
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
