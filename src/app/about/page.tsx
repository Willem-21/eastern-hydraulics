"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Lightbulb,
  Shield,
  Star,
  Users,
  Award,
  Clock,
  Factory,
  MapPin,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const team = [
  { name: "Tappies Henning", role: "Managing Director" },
  { name: "Dorothy Sefanyetso", role: "Business Development" },
  { name: "Jaco Venter", role: "Workshop Manager" },
  { name: "Gerrie de Bruin", role: "Financial Manager" },
  { name: "Pieter Henning", role: "Quality Manager" },
];

const values = [
  {
    icon: Eye,
    title: "Visionary",
    description:
      "Progressive business operations that anticipate industry needs and drive innovation.",
  },
  {
    icon: Lightbulb,
    title: "Enablement",
    description:
      "Creating a challenging environment that empowers employees to grow and excel.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Honest and transparent conduct in all internal and external business dealings.",
  },
  {
    icon: Star,
    title: "Excellence",
    description:
      "Unwavering commitment to professionalism and continuous improvement in everything we do.",
  },
  {
    icon: Users,
    title: "Customer Orientated",
    description:
      "Maintaining the highest standards of service delivery to build lasting business relationships.",
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

const credentials = [
  {
    icon: Award,
    label: "ISO 9001 Accredited",
    detail: "Listed since 1990 (LS0577), audited twice yearly by SABS",
  },
  {
    icon: Shield,
    label: "B-BBEE Level 3",
    detail: "Broad-Based Black Economic Empowerment listed company",
  },
  {
    icon: Clock,
    label: "Established 1989",
    detail: "Over 35 years of industry experience and expertise",
  },
  {
    icon: Factory,
    label: "State-of-the-Art Facility",
    detail: "Filtered, pressurized workshop with computerized testing rigs",
  },
  {
    icon: MapPin,
    label: "Strategic Location",
    detail: "10 minutes from OR Tambo International Airport",
  },
];

export default function AboutPage() {
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
              About Us
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
              Over 35 Years of Hydraulic Excellence
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-white/70 text-lg max-w-2xl"
            >
              Since 1989, Eastern Hydraulics has been a trusted partner for South
              Africa&apos;s leading industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-light py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Eastern Hydraulics (Pty) Ltd is a Broad-Based Black Economic Empowerment
                  (B-BBEE) listed company (LS0577) with SABS ISO 9001 accreditation. The
                  company has been in operation since 1989 and specializes in the supply,
                  repair, manufacture and design of new generation high pressure, high power
                  hydraulic pumps and motors, hydraulic and pneumatic cylinders, hydraulic
                  power packs and water pumps.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  We operate out of custom designed premises, including a filtered and
                  pressurized workshop for assembly with fully computerized testing
                  facilities. We serve most of the major sectors of industry, including
                  mining (gold and coal), construction, industrial and public entities.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Situated only some 10 minutes&apos; drive from OR Tambo International
                  Airport, we are in the ideal position to serve our national and
                  international clients.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                >
                  Our objective is to service the needs of our clients with products and
                  services of the highest quality and in so doing build long term and
                  mutually beneficial business relationships.
                </motion.p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {credentials.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-neutral-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900">{item.label}</p>
                    <p className="text-sm text-neutral-600">{item.detail}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gray py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="The Principles That Guide Us"
            description="Our core values drive everything we do, ensuring we deliver the highest standards of quality and service."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="bg-white rounded-xl border border-neutral-100 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-light py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Team"
            title="Leadership"
            description="Our experienced management team brings decades of combined expertise to ensure exceptional service delivery."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={staggerItem}
                className="bg-white rounded-xl border border-neutral-100 p-4 sm:p-5 text-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <p className="font-semibold text-neutral-900 text-xs sm:text-sm">
                  {member.name}
                </p>
                <p className="text-xs text-neutral-600 mt-1">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Staff Training */}
      <section className="section-gray py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl border border-neutral-100 p-6 sm:p-8 md:p-12 shadow-sm max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
              className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6"
            >
              <Award className="w-7 h-7 text-primary" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-2xl font-bold text-neutral-900 mb-4"
            >
              Commitment to Training
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-neutral-600 leading-relaxed"
            >
              All workshop staff are fully trained and the company is continually involved
              in ongoing staff training both in-house and through the use of outside
              training facilities. This commitment to continuous professional development
              ensures our team stays at the forefront of hydraulic technology and
              best practices.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
