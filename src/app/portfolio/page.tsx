"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, Eye } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  "All",
  "Hydraulic Pumps",
  "Hydraulic Cylinders",
  "Power Packs",
  "Water Pumps",
  "Custom Builds",
];

const projects = [
  {
    title: "Mining Hydraulic Pump Overhaul",
    category: "Hydraulic Pumps",
    description:
      "Complete strip-down, reconditioning, and performance testing of high-pressure hydraulic pumps for a major gold mining operation. Delivered within 72-hour turnaround.",
    industry: "Mining",
    image: "/pic1.png",
  },
  {
    title: "Custom Power Pack for Construction Fleet",
    category: "Power Packs",
    description:
      "Designed and manufactured 12 bespoke hydraulic power packs for a construction company's earthmoving fleet. Each unit custom-built to exact operational specifications.",
    industry: "Construction",
    image: "/pic1.png",
  },
  {
    title: "Cylinder Reconditioning — Coal Mine",
    category: "Hydraulic Cylinders",
    description:
      "Reconditioned 24 hydraulic cylinders including chrome re-plating, honing, and seal replacement. All units pressure tested and certified before delivery.",
    industry: "Mining",
    image: "/pic1.png",
  },
  {
    title: "Water Pump Testing & Certification",
    category: "Water Pumps",
    description:
      "Automated computerized testing of industrial water pumps with dual pipeline configuration. Computer-generated performance graphs compared against OEM specifications.",
    industry: "Industrial",
    image: "/pic1.png",
  },
  {
    title: "Custom Hydraulic Cylinder Manufacture",
    category: "Custom Builds",
    description:
      "Reverse-engineered and manufactured obsolete hydraulic cylinders for a public sector client. Designed in AutoCAD, manufactured and tested in our pressurized workshop.",
    industry: "Public Sector",
    image: "/pic1.png",
  },
  {
    title: "Emergency Pump Repair — 48hr Turnaround",
    category: "Hydraulic Pumps",
    description:
      "Emergency diagnostics and repair of a critical hydraulic pump failure at a coal mine. Full reconditioning completed and certified within 48 hours to minimize downtime.",
    industry: "Mining",
    image: "/pic1.png",
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
              Our Work
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
              Project Portfolio
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-white/70 text-lg max-w-2xl"
            >
              A showcase of our work across mining, construction, industrial, and
              public sector projects — delivering precision-engineered hydraulic
              solutions since 1989.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-gray py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="card-neu overflow-hidden group"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        {project.category}
                      </span>
                      <span className="bg-white/90 text-neutral-800 text-xs font-medium px-2.5 py-1 rounded-full">
                        {project.industry}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Eye className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-neutral-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-500 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-light py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Track Record"
            title="Proven Results"
            description="Decades of delivering quality hydraulic solutions to South Africa's most demanding industries."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "35+", label: "Years of Experience" },
              { value: "1000s", label: "Projects Completed" },
              { value: "4", label: "Major Industries Served" },
              { value: "6 Mo", label: "Warranty on All Work" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                className="card-neu p-6 text-center"
              >
                <p className="text-2xl md:text-3xl font-extrabold font-display text-gradient">
                  {stat.value}
                </p>
                <p className="text-sm text-neutral-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
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
              Have a Project in Mind?
            </h2>
            <p className="text-white/80 text-base sm:text-lg mb-8">
              Whether it&apos;s a repair, custom build, or full system design — get in
              touch and let us show you what we can do.
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
