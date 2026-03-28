import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="mb-8 inline-block">
          <Image
            src="/logo-eh.jpeg"
            alt="Eastern Hydraulics Logo"
            width={200}
            height={53}
            className="h-12 w-auto mx-auto"
            style={{ clipPath: "inset(0 3% 0 0)" }}
          />
        </div>
        <h1 className="font-display text-7xl md:text-9xl font-extrabold text-gradient mb-4">
          404
        </h1>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-neutral-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary-light btn-glow transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
