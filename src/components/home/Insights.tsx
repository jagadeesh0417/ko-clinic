"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { images } from "@/lib/images";

const posts = [
  {
    title: "The Future of Medical Travel: Why Destination-First Healthcare is Rising",
    excerpt: "An in-depth look at how discerning patients are choosing their treatment location before selecting a provider.",
    date: "March 15, 2026",
    image: images.insights[0].image,
    category: "Industry Insights",
  },
  {
    title: "A Guide to Concierge Medicine: What to Expect from White-Glove Healthcare",
    excerpt: "From personal care coordinators to luxury recovery suites — discover the standards of premium medical travel.",
    date: "February 28, 2026",
    image: images.insights[1].image,
    category: "Patient Guide",
  },
  {
    title: "Top 5 Destinations for Regenerative Medicine in 2026",
    excerpt: "We analyze the emerging hotspots for stem cell therapy, PRP, and advanced regenerative treatments.",
    date: "January 12, 2026",
    image: images.insights[2].image,
    category: "Destinations",
  },
];

export function Insights() {
  return (
    <section className="section-luxury bg-ivory">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne-dark mb-4 block">
              Insights
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-deep-black leading-[1.1] text-balance">
              Latest from
              <br />
              <span className="font-medium">KO CLINICS</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-xs font-button uppercase tracking-[0.2em] text-mid-gray hover:text-champagne-dark transition-colors shrink-0"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href="/blog" className="group block">
                <div className="relative h-[220px] overflow-hidden card-luxury luxury-border mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute top-3 left-3 bg-ivory/90 text-deep-black text-[9px] font-button uppercase tracking-[0.1em] px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-mid-gray text-xs mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-heading text-base sm:text-lg font-medium text-deep-black mb-1 group-hover:text-champagne-dark transition-colors">
                  {post.title}
                </h3>
                <p className="font-body text-sm text-mid-gray leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
