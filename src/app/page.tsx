"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Wrench,
  Cog,
  Droplets,
  Wind,
  Factory,
  Shield,
  Award,
  Clock,
  ArrowRight,
  Phone,
  ChevronRight,
  HardHat,
  Building2,
  Landmark,
  ClipboardList,
  SearchCheck,
  Settings,
  Truck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const services = [
  {
    icon: Cog,
    title: "Hydraulic Pumps & Motors",
    description:
      "Supply, repair, manufacture and design of new generation high pressure, high power hydraulic pumps and motors.",
  },
  {
    icon: Wrench,
    title: "Hydraulic Cylinders",
    description:
      "Complete hydraulic cylinder services including repair, reconditioning, and custom manufacturing to specification.",
  },
  {
    icon: Wind,
    title: "Pneumatic Cylinders",
    description:
      "Full range of pneumatic cylinder services for industrial applications, from repair to bespoke design.",
  },
  {
    icon: Factory,
    title: "Hydraulic Power Packs",
    description:
      "Custom designed and manufactured hydraulic power packs for all industrial requirements.",
  },
  {
    icon: Droplets,
    title: "Water Pumps",
    description:
      "Supply and repair of water pumps with fully automated computerized testing facilities.",
  },
  {
    icon: HardHat,
    title: "Design & Manufacturing",
    description:
      "Custom design and manufacturing using AutoCAD with fully computerized testing and quality assurance.",
  },
];

const industries = [
  { icon: HardHat, label: "Mining", sub: "Gold & Coal" },
  { icon: Building2, label: "Construction", sub: "Heavy Equipment" },
  { icon: Factory, label: "Industrial", sub: "Manufacturing" },
  { icon: Landmark, label: "Public Sector", sub: "Government Entities" },
];

const stats = [
  { value: "35+", label: "Years in Operation" },
  { value: "ISO 9001", label: "Accredited" },
  { value: "B-BBEE", label: "Level 3 Listed" },
  { value: "6", label: "Month Warranty", suffix: " Month" },
];

const process = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Consultation",
    description:
      "Contact us with your requirements. Our team assesses your needs and provides a detailed quote.",
  },
  {
    step: "02",
    icon: SearchCheck,
    title: "Inspection & Diagnosis",
    description:
      "We conduct thorough diagnostics using computerized testing to identify the exact issue.",
  },
  {
    step: "03",
    icon: Settings,
    title: "Repair or Manufacture",
    description:
      "Expert technicians carry out the work in our pressurized, filtered workshop facility.",
  },
  {
    step: "04",
    icon: Truck,
    title: "Testing & Delivery",
    description:
      "Every unit is tested on our automated rigs with a certificate issued, then delivered to you.",
  },
];

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative bg-primary-dark overflow-hidden divider-wave"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary to-primary-light opacity-90" />
        <div className="absolute inset-0 pattern-diagonal" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-44"
        >
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-white/10"
              >
                <Shield className="w-4 h-4" />
                ISO 9001 Accredited &bull; B-BBEE Level 3
              </motion.span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                South Africa&apos;s Trusted{" "}
                <span className="text-accent">Hydraulic</span>{" "}
                <span className="text-accent">Specialists</span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl"
              >
                Since 1989, Eastern Hydraulics has been the leading supplier,
                repairer, manufacturer and designer of high pressure hydraulic
                equipment — serving mining, construction and industrial sectors
                nationwide.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/contact"
                  className="btn-glow inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold text-base hover:bg-neutral-100 transition-all duration-200"
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-base hover:bg-white/10 hover:border-white/50 transition-all duration-200"
                >
                  Our Services
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-neutral-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="text-center"
              >
                <AnimatedCounter
                  value={stat.value}
                  className="text-3xl md:text-4xl font-extrabold font-display text-gradient"
                />
                <p className="mt-2 text-sm font-medium text-neutral-600">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-gray pattern-dots py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What We Do"
            title="Comprehensive Hydraulic Solutions"
            description="From supply and repair to custom design and manufacturing, we deliver end-to-end hydraulic services backed by over three decades of expertise."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                className="card-premium p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-light btn-glow transition-all duration-200"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How We Work - Process Timeline */}
      <section className="section-light py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="How We Work"
            title="Our Process"
            description="A streamlined approach that gets you back up and running fast — with quality and precision at every step."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative hover:-translate-y-1 transition-transform duration-300"
              >
                {/* Connector line (desktop only) */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] right-[-calc(50%-32px)] w-[calc(100%-24px)] h-[2px] bg-gradient-to-r from-primary/30 to-primary/10" />
                )}
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                      <step.icon className="w-7 h-7 text-primary" />
                    </div>
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.15 + 0.3,
                        type: "spring",
                        stiffness: 400,
                      }}
                      className="absolute -top-2 -right-2 w-7 h-7 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center shadow-md"
                    >
                      {step.step}
                    </motion.span>
                  </div>
                  <h3 className="text-base font-bold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section className="section-gray pattern-dots py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                Why Choose Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 mb-6 tracking-tight">
                Trusted by Industry Leaders for Over 35 Years
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Eastern Hydraulics operates from custom designed premises
                featuring a filtered and pressurized workshop for assembly with
                fully computerized testing facilities. Our commitment to quality
                is backed by ISO 9001 accreditation, maintained through biannual
                audits.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    icon: Award,
                    text: "ISO 9001 accredited since 1990 — audited twice yearly",
                  },
                  {
                    icon: Shield,
                    text: "B-BBEE Level 3 listed company (LS0577)",
                  },
                  {
                    icon: Clock,
                    text: "Fast turnaround to minimize your downtime",
                  },
                  {
                    icon: Factory,
                    text: "State-of-the-art computerized testing facilities",
                  },
                ].map((item, idx) => (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.12 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-neutral-800 text-sm">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-8"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-light btn-glow transition-all duration-200"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-neutral-100 shadow-lg"
            >
              <h3 className="font-display text-xl font-bold text-neutral-900 mb-6 tracking-tight">
                Industries We Serve
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                {industries.map((ind) => (
                  <motion.div
                    key={ind.label}
                    variants={staggerItem}
                    className="bg-neutral-50 rounded-xl p-5 border border-neutral-100 text-center cursor-default hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <ind.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-semibold text-neutral-900 text-sm">
                      {ind.label}
                    </p>
                    <p className="text-xs text-neutral-600 mt-0.5">{ind.sub}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 pattern-diagonal" />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Need Hydraulic Equipment Repaired or Designed?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
              Contact us for a quote without delay. Our team is ready to
              minimize your downtime with fast, quality service.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-neutral-100 transition-all duration-200 shadow-lg"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+27118280360"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Call 011 828 0360
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
