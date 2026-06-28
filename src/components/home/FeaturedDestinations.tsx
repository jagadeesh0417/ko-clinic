"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";

const destinations = [
  { name: "Dubai", slug: "dubai", tagline: "Where Innovation Meets Luxury Care", image: images.destinations.dubai },
  { name: "London", slug: "london", tagline: "Centuries of Medical Excellence", image: images.destinations.london },
  { name: "Singapore", slug: "singapore", tagline: "Asia's Healthcare Capital", image: images.destinations.singapore },
  { name: "Paris", slug: "paris", tagline: "The Art of Living Well", image: images.destinations.paris },
  { name: "New York", slug: "new-york", tagline: "Where the World Comes for Care", image: images.destinations.newyork },
  { name: "Hong Kong", slug: "hong-kong", tagline: "East Meets West in Medicine", image: images.destinations.hongkong },
  { name: "Sydney", slug: "sydney", tagline: "Wellness by Nature", image: images.destinations.sydney },
  { name: "Bahrain", slug: "bahrain", tagline: "Gulf Luxury, Global Standards", image: images.destinations.bahrain },
  { name: "Abu Dhabi", slug: "abu-dhabi", tagline: "The Capital of Care", image: images.destinations.abuDhabi },
];

export function FeaturedDestinations() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="destinations" className="section-luxury bg-warm-beige">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne-dark mb-4 block">
            Choose Your Destination
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-deep-black leading-[1.1] text-balance">
            Where Would You Like
            <br />
            <span className="font-medium italic">to Be Treated?</span>
          </h2>
          <p className="font-body text-mid-gray text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Select a city to discover our curated network of elite clinics, each vetted for excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <Link
                href={`/destinations/${dest.slug}`}
                className="group block relative h-[340px] sm:h-[400px] overflow-hidden card-luxury luxury-border"
              >
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  style={{ backgroundImage: `url(${dest.image})` }}
                />
                <div className="absolute inset-0 overlay-luxury" />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 via-deep-black/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="font-heading text-2xl sm:text-3xl font-medium text-ivory mb-1">
                    {dest.name}
                  </h3>
                  <p className="font-body text-sm text-platinum mb-4">
                    {dest.tagline}
                  </p>
                  <div className="flex items-center gap-2 text-champagne text-xs font-button uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span>Explore Clinics</span>
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Hover accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-champagne scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] origin-left" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 text-xs font-button uppercase tracking-[0.2em] text-deep-black hover:text-champagne-dark transition-colors"
          >
            <span>View All Destinations</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
