"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ArrowRight, ExternalLink, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const GOOGLE_MAPS_QUERY = "2+Rover+Road,+Rustivia+Ext+3,+Elandsfontein,+1601,+South+Africa";
const GOOGLE_MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${GOOGLE_MAPS_QUERY}`;
const GOOGLE_MAPS_EMBED = `https://www.google.com/maps?q=${GOOGLE_MAPS_QUERY}&output=embed`;

const contactDetails = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["(+27) 11 828 0360/1/2/3/4/5", "(+27) 11 828 0495"],
    href: "tel:+27118280360",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["sales@easterns.co.za"],
    href: "mailto:sales@easterns.co.za",
  },
  {
    icon: MapPin,
    title: "Address",
    lines: ["2 Rover Road, Rustivia Ext 3", "Elandsfontein, 1601"],
    href: GOOGLE_MAPS_LINK,
    external: true,
  },
  {
    icon: Clock,
    title: "Location",
    lines: ["10 minutes from OR Tambo", "International Airport"],
    href: null,
    external: false,
  },
];

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const newErrors: FormErrors = {};

    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!message) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  };

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
              Contact Us
            </motion.span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
              Get in Touch
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 text-white/70 text-lg max-w-2xl"
            >
              Urgently in need of hydraulic equipment repaired, serviced or designed?
              Contact us for a quote without delay.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="section-gray py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-4"
            >
              {contactDetails.map((detail) => (
                <motion.div
                  key={detail.title}
                  variants={staggerItem}
                >
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.external ? "_blank" : undefined}
                      rel={detail.external ? "noopener noreferrer" : undefined}
                      className="flex items-start gap-4 card-neu p-5"
                    >
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <detail.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-semibold text-neutral-900 text-sm flex items-center gap-1.5">
                          {detail.title}
                          {detail.external && (
                            <ExternalLink className="w-3 h-3 text-neutral-400" />
                          )}
                        </p>
                        {detail.lines.map((line) => (
                          <p key={line} className="text-sm text-neutral-600 break-words">
                            {line}
                          </p>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4 card-neu p-5">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <detail.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-neutral-900 text-sm">
                          {detail.title}
                        </p>
                        {detail.lines.map((line) => (
                          <p key={line} className="text-sm text-neutral-600">
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="card-neu p-5 sm:p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-12"
                    >
                      <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-success" />
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-neutral-600 mb-6">
                        Thank you for contacting Eastern Hydraulics. Our team will
                        get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-light btn-glow transition-all duration-200"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <h2 className="text-xl font-bold text-neutral-900 mb-6">
                        Request a Quote
                      </h2>
                      <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-neutral-800 mb-1.5"
                            >
                              Full Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                                errors.name ? "border-danger" : "border-neutral-200"
                              }`}
                              placeholder="Your name"
                              onChange={() => errors.name && setErrors((e) => ({ ...e, name: undefined }))}
                            />
                            {errors.name && (
                              <p className="text-xs text-danger mt-1">{errors.name}</p>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="company"
                              className="block text-sm font-medium text-neutral-800 mb-1.5"
                            >
                              Company
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                              placeholder="Company name"
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-neutral-800 mb-1.5"
                            >
                              Email <span className="text-danger">*</span>
                            </label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors ${
                                errors.email ? "border-danger" : "border-neutral-200"
                              }`}
                              placeholder="your@email.com"
                              onChange={() => errors.email && setErrors((e) => ({ ...e, email: undefined }))}
                            />
                            {errors.email && (
                              <p className="text-xs text-danger mt-1">{errors.email}</p>
                            )}
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-neutral-800 mb-1.5"
                            >
                              Phone
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                              placeholder="Your phone number"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="service"
                            className="block text-sm font-medium text-neutral-800 mb-1.5"
                          >
                            Service Required
                          </label>
                          <select
                            id="service"
                            name="service"
                            className="w-full px-4 py-2.5 border border-neutral-200 rounded-lg text-sm text-neutral-600 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          >
                            <option value="">Select a service</option>
                            <option value="hydraulic-pumps">Hydraulic Pumps</option>
                            <option value="hydraulic-motors">Hydraulic Motors</option>
                            <option value="wheel-motors">Wheel Motors</option>
                            <option value="hydraulic-cylinders">Hydraulic Cylinders</option>
                            <option value="pneumatic-cylinders">Pneumatic & Air Cylinders</option>
                            <option value="water-cylinders">Water Cylinders</option>
                            <option value="power-packs">Hydraulic Power Packs</option>
                            <option value="water-pumps">Water Pumps</option>
                            <option value="design">Custom Design & Engineering</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-neutral-800 mb-1.5"
                          >
                            Message <span className="text-danger">*</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none ${
                              errors.message ? "border-danger" : "border-neutral-200"
                            }`}
                            placeholder="Describe your requirements..."
                            onChange={() => errors.message && setErrors((e) => ({ ...e, message: undefined }))}
                          />
                          {errors.message && (
                            <p className="text-xs text-danger mt-1">{errors.message}</p>
                          )}
                        </div>
                        <div>
                          <button
                            type="submit"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-white px-7 py-3 rounded-lg font-semibold text-sm hover:bg-primary-light btn-glow transition-all duration-200"
                          >
                            Send Message
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-light py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Find Us"
            title="Our Location"
            description="Conveniently located just 10 minutes from OR Tambo International Airport."
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-xl overflow-hidden border border-neutral-200 shadow-sm"
          >
            <iframe
              src={GOOGLE_MAPS_EMBED}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eastern Hydraulics Location - 2 Rover Road, Elandsfontein"
              className="w-full h-[300px] sm:h-[400px] md:h-[450px]"
            />
            <a
              href={GOOGLE_MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 bg-white text-primary px-4 py-2.5 rounded-lg text-sm font-semibold shadow-lg hover:bg-neutral-50 hover:scale-105 active:scale-95 transition-all duration-150 border border-neutral-200"
            >
              <ExternalLink className="w-4 h-4" />
              Open in Google Maps
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
