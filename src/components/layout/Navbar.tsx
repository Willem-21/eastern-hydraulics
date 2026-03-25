"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/certifications", label: "Certifications" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (pathname === href) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [pathname]
  );

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "border-neutral-200 shadow-md"
          : "border-transparent shadow-none"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent origin-left z-50"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "/")}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-150">
              <span className="text-white font-extrabold text-lg">EH</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-neutral-900 font-bold text-lg leading-tight">
                Eastern Hydraulics
              </p>
              <p
                className={`text-neutral-600 text-xs tracking-wide transition-all duration-300 overflow-hidden ${
                  scrolled ? "max-h-0 opacity-0" : "max-h-5 opacity-100"
                }`}
              >
                Hydraulic Specialists Since 1989
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-neutral-800 hover:text-primary"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 bg-primary/5 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+27118280360"
              className="flex items-center gap-2 text-sm text-neutral-600 hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              011 828 0360
            </a>
            <Link
              href="/contact"
              onClick={(e) => handleNavClick(e, "/contact")}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-light btn-glow transition-all duration-200 hover:scale-[1.03] active:scale-[0.97]"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-primary active:scale-90 transition-transform"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-neutral-200 bg-white overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href);
                      setMobileOpen(false);
                    }}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                      pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-neutral-800 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="pt-4 border-t border-neutral-200"
              >
                <a
                  href="tel:+27118280360"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-neutral-600"
                >
                  <Phone className="w-4 h-4" />
                  011 828 0360
                </a>
                <Link
                  href="/contact"
                  onClick={(e) => {
                    handleNavClick(e, "/contact");
                    setMobileOpen(false);
                  }}
                  className="block mx-4 mt-2 text-center bg-primary text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-primary-light transition-colors"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
