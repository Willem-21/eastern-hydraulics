"use client";

import Link from "next/link";
import { useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Cog,
  Wrench,
  Wind,
  Factory,
  Droplets,
  CircleDot,
  Gauge,
  PenTool,
  ArrowRight,
  Phone,
  CheckCircle2,
  Shield,
  CircleDashed,
  Waves,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    id: "hydraulic-pumps",
    icon: Cog,
    title: "Hydraulic Pumps",
    description:
      "Supply, repair, manufacture and design of new generation high pressure, high power hydraulic pumps. Our computerized testing facilities ensure every unit meets exacting performance standards before delivery.",
    details: [
      "New generation high pressure pump supply",
      "Full reconditioning and repair services",
      "Custom manufacture to specification",
      "Computerized performance testing",
      "Hydraulic Pump Test Certificate issued",
    ],
  },
  {
    id: "hydraulic-motors",
    icon: CircleDot,
    title: "Hydraulic Motors",
    description:
      "Complete hydraulic motor services from diagnostics and repair to full reconditioning. Every motor is tested on our special purpose designed test rigs that simulate real workplace conditions.",
    details: [
      "Full diagnostic and fault-finding services",
      "Reconditioning and repair of all motor types",
      "Special purpose designed test rigs",
      "Simulated workplace condition testing",
      "Hydraulic Motor Test Certificate issued",
    ],
  },
  {
    id: "wheel-motors",
    icon: CircleDashed,
    title: "Wheel Motors",
    description:
      "Specialist wheel motor services for mining, construction, and heavy equipment applications. We handle supply, repair, and full reconditioning of wheel motors across all major brands and specifications.",
    details: [
      "Mining and construction wheel motor specialists",
      "Supply of new and reconditioned units",
      "Full strip-down, inspection, and rebuild",
      "Performance testing under load conditions",
      "Fast turnaround to minimize downtime",
    ],
  },
  {
    id: "hydraulic-cylinders",
    icon: Wrench,
    title: "Hydraulic Cylinders",
    description:
      "Comprehensive hydraulic cylinder repair, reconditioning, and custom manufacturing. Each cylinder undergoes rigorous testing and is issued a Hydraulic Cylinder Test Certificate.",
    details: [
      "Repair and reconditioning of all cylinder types",
      "Custom cylinder manufacturing to specification",
      "Chrome re-plating and honing services",
      "Seal replacement and rod repair",
      "Hydraulic Cylinder Test Certificate issued",
    ],
  },
  {
    id: "pneumatic-cylinders",
    icon: Wind,
    title: "Pneumatic & Air Cylinders",
    description:
      "Full range of pneumatic and air cylinder services for industrial applications. We handle cylinders of all sizes, from standard repairs to bespoke manufacturing to your exact requirements.",
    details: [
      "Pneumatic cylinder repair and reconditioning",
      "Air cylinder servicing and seal replacement",
      "Custom manufacturing to specification",
      "All sizes from miniature to heavy-duty industrial",
      "Fast turnaround on standard repairs",
    ],
  },
  {
    id: "water-cylinders",
    icon: Waves,
    title: "Water Cylinders",
    description:
      "Specialised water cylinder services including repair, reconditioning, and custom manufacturing. Our facilities handle water cylinders for mining dewatering, industrial processes, and municipal applications.",
    details: [
      "Repair and reconditioning services",
      "Custom manufacture for specific applications",
      "Mining dewatering cylinder specialists",
      "Industrial and municipal water systems",
      "Full pressure testing and certification",
    ],
  },
  {
    id: "hydraulic-power-packs",
    icon: Factory,
    title: "Hydraulic Power Packs",
    description:
      "Custom designed and manufactured hydraulic power packs tailored to your specific operational requirements. Each unit is fully assembled in our filtered, pressurized workshop and computerized tested.",
    details: [
      "Custom design to your specifications",
      "Manufactured in filtered, pressurized workshop",
      "Full computerized testing before delivery",
      "Suitable for all industrial applications",
      "Complete hydraulic system integration",
    ],
  },
  {
    id: "water-pumps",
    icon: Droplets,
    title: "Water Pumps",
    description:
      "Supply and repair of water pumps with our advanced automated testing facility. Tests include dual pipeline configurations, rotary flow meters, and computer-generated performance graphs compared against manufacturer specs.",
    details: [
      "Supply of new and reconditioned water pumps",
      "Full repair and overhaul services",
      "Automated computerized testing",
      "Computer-generated performance graphs",
      "Results compared against manufacturer data",
      "Water Pump Test Certificate issued",
    ],
  },
  {
    id: "testing-diagnostics",
    icon: Gauge,
    title: "Testing & Diagnostics",
    description:
      "State-of-the-art special purpose designed test rigs that simulate workplace conditions. Our automated testing systems produce consistent, tamper-proof results that cannot be modified.",
    details: [
      "Special purpose designed test rigs",
      "Simulated workplace condition testing",
      "Automated tamper-proof results",
      "Computer-generated performance reports",
      "Comparison against OEM specifications",
    ],
  },
  {
    id: "design-engineering",
    icon: PenTool,
    title: "Design & Engineering",
    description:
      "Custom design and engineering services using AutoCAD for all technical drawings, paired with Forward ERP for complete project management. From concept to manufacture, we deliver precision-engineered solutions.",
    details: [
      "AutoCAD for all technical drawings",
      "Forward ERP project management",
      "Concept-to-manufacture capability",
      "Reverse engineering of obsolete parts",
      "Technical consultation and specification",
    ],
  },
];

const testingFeatures = [
  "Dual pipeline configurations (4\" and 6\" options)",
  "Butterfly control valves for flow simulation",
  "Rotary flow meters with precise measurement",
  "Pressure gauges (0-200m and 0-300m Head ranges)",
  "Voltage selectors supporting 380/500/1000V at 300 Amps",
  "Computer-generated performance graphs",
  "Automated results that cannot be modified",
  "Comparison against manufacturer specifications",
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesPage() {
  const scrollToHash = useCallback(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // Remove from any previous highlight first
          el.classList.remove("card-neu-highlight");
          void el.offsetWidth; // force reflow to restart animation
          el.classList.add("card-neu-highlight");
          setTimeout(() => {
            el.classList.remove("card-neu-highlight");
          }, 8500);
        }
      }, 300);
    }
  }, []);

  useEffect(() => {
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [scrollToHash]);

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary-dark py-16 md:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-accent font-semibold text-sm uppercase tracking-wider"
            >
              Our Services
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
              Complete Hydraulic Solutions
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-white/70 text-lg max-w-2xl"
            >
              We supply, repair, manufacture and design hydraulic equipment across all
              major industrial sectors with a 6-month warranty on all products.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-gray py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                id={service.id}
                variants={staggerItem}
                className="card-neu p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 icon-bounce">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-neutral-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5">
                      {service.details.map((detail, j) => (
                        <motion.li
                          key={detail}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: j * 0.05 }}
                          className="flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-success mt-0.5 shrink-0" />
                          <span className="text-xs text-neutral-600">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testing Capabilities */}
      <section className="section-light py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <SectionHeading
                label="Testing Facilities"
                title="Advanced Computerized Testing"
                description="Our automated testing systems produce consistent, tamper-proof results compared against original manufacturer specifications."
                centered={false}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {testingFeatures.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                    <span className="text-sm text-neutral-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-primary/5 rounded-2xl p-6 sm:p-8 border border-primary/10"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
              >
                <Shield className="w-10 h-10 text-primary mb-4" />
              </motion.div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                6-Month Warranty
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                All products carry a six-month warranty covering defects in material and
                workmanship from date of delivery. Our rigorous testing process ensures
                reliability you can count on.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="card-neu p-4"
              >
                <p className="text-sm text-neutral-600">
                  <span className="font-semibold text-neutral-900">
                    Quality Assurance:
                  </span>{" "}
                  We use Forward ERP for accounting and project management, and AutoCAD for
                  all technical drawings, ensuring precision at every stage.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8">
              Contact us today for a quote on any hydraulic equipment service.
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-primary px-7 py-3.5 rounded-lg font-semibold hover:bg-neutral-100 transition-colors"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:+27118280360"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-7 py-3.5 rounded-lg font-semibold hover:bg-white/10 transition-colors"
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
