"use client";

import { motion } from "framer-motion";
import {
  Award,
  Shield,
  FileCheck,
  BadgeCheck,
  CheckCircle2,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const certifications = [
  {
    icon: Award,
    title: "ISO 9001:2015",
    subtitle: "Quality Management System",
    description:
      "Initially audited November 30, 1989 by the South African Bureau of Standards (SABS). Listed January 23, 1990 (No. LS0577). Audited twice a year to maintain compliance.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "B-BBEE Level 3",
    subtitle: "Enterprise Development",
    description:
      "Broad-Based Black Economic Empowerment listed company, classified at Level 3 for enterprise development. Committed to transformation and economic inclusion.",
    highlight: true,
  },
  {
    icon: FileCheck,
    title: "Hydraulic Cylinder Test Certificate",
    subtitle: "Product Testing",
    description:
      "Certified testing for all hydraulic cylinders, ensuring each unit meets rigorous performance and safety standards before delivery.",
    highlight: false,
  },
  {
    icon: FileCheck,
    title: "Hydraulic Pump Test Certificate",
    subtitle: "Product Testing",
    description:
      "Comprehensive pump testing certification verifying pressure, flow rate, and performance against manufacturer specifications.",
    highlight: false,
  },
  {
    icon: FileCheck,
    title: "Hydraulic Motor Test Certificate",
    subtitle: "Product Testing",
    description:
      "Motor testing certification covering torque, speed, and efficiency parameters under simulated workplace conditions.",
    highlight: false,
  },
  {
    icon: FileCheck,
    title: "Water Pump Test Certificate",
    subtitle: "Product Testing",
    description:
      "Automated water pump testing with computer-generated performance graphs compared against original manufacturer data.",
    highlight: false,
  },
  {
    icon: BadgeCheck,
    title: "Letter of Good Standing",
    subtitle: "Compensation for Occupational Injuries and Diseases Act 130 of 1993",
    description:
      "Certification of compliance with workplace safety regulations and proper insurance coverage for occupational injuries and diseases.",
    highlight: false,
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function CertificationsPage() {
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
              Certifications
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
              Quality & Compliance
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-white/70 text-lg max-w-2xl"
            >
              Our certifications and accreditations demonstrate our unwavering commitment
              to quality, safety, and industry best practices.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Quality Policy */}
      <section className="section-light py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-neu p-6 sm:p-8 md:p-12 max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
            >
              <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-neutral-900 mb-4"
            >
              Our Quality Policy
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-neutral-600 leading-relaxed"
            >
              Eastern Hydraulics adheres to ISO 9001 standards implemented throughout all
              operations, focusing on meeting and exceeding customer expectations while
              ensuring reliable product quality and customer satisfaction. Our quality
              management system is the foundation of everything we do.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-gray py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Accreditations"
            title="Our Certifications"
            description="Every certification represents our dedication to delivering the highest standards of quality and compliance."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                variants={staggerItem}
                className={`card-neu p-6 ${
                  cert.highlight
                    ? "ring-2 ring-primary/20"
                    : ""
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center shrink-0 ${
                      cert.highlight ? "bg-primary/10" : "bg-neutral-100"
                    }`}
                  >
                    <cert.icon
                      className={`w-6 h-6 ${
                        cert.highlight ? "text-primary" : "text-neutral-600"
                      }`}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-neutral-900">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-accent font-medium mb-2">
                      {cert.subtitle}
                    </p>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section-light py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              label="Why It Matters"
              title="Our Commitment to Quality"
            />
            <div className="space-y-4">
              {[
                "ISO 9001 accredited since 1990 — one of the longest-standing certifications in the industry",
                "Biannual audits by SABS ensure continuous compliance and improvement",
                "Every product is tested and certified before leaving our facility",
                "Automated testing produces tamper-proof, computer-generated results",
                "6-month warranty on all products covering material and workmanship defects",
                "Full compliance with occupational health and safety regulations",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-success mt-0.5 shrink-0" />
                  <span className="text-neutral-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
