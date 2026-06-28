"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Mail } from "lucide-react";

const posts = [
  {
    title: "The Science Behind Micro Bio-FUE Hair Transplant",
    excerpt: "Explore the cutting-edge technique that combines microscopic extraction with bio-enhanced graft preservation for unparalleled hair restoration results.",
    category: "Hair Restoration",
    date: "May 22, 2026",
    readTime: "8 min read",
    slug: "science-behind-micro-bio-fue",
  },
  {
    title: "PRP vs GFC: Which Regenerative Therapy Is Right For You?",
    excerpt: "A detailed comparison of Platelet-Rich Plasma and Growth Factor Concentrate therapies to help you make an informed decision.",
    category: "Regenerative Medicine",
    date: "May 15, 2026",
    readTime: "6 min read",
    slug: "prp-vs-gfc-regenerative-therapy",
  },
  {
    title: "Botox & Beyond: The Evolution of Anti-Aging Treatments",
    excerpt: "From neurotoxins to exosomes — how anti-aging medicine has evolved beyond Botox to offer comprehensive rejuvenation.",
    category: "Anti-Aging",
    date: "May 8, 2026",
    readTime: "7 min read",
    slug: "botox-beyond-evolution-anti-aging",
  },
  {
    title: "Achieving Flawless Skin: A Complete Guide to Laser Rejuvenation",
    excerpt: "Everything you need to know about laser skin resurfacing, from fractional CO2 to picosecond technology.",
    category: "Skin",
    date: "Apr 28, 2026",
    readTime: "9 min read",
    slug: "flawless-skin-laser-rejuvenation",
  },
  {
    title: "The Role of Nutrition in Hair Health and Regrowth",
    excerpt: "Discover how specific nutrients, vitamins, and dietary patterns influence hair growth and prevent hair loss.",
    category: "Wellness",
    date: "Apr 18, 2026",
    readTime: "5 min read",
    slug: "nutrition-hair-health-regrowth",
  },
  {
    title: "Thread Lifts vs Surgical Facelifts: A Comprehensive Comparison",
    excerpt: "Weighing the pros and cons of minimally invasive thread lifts against traditional surgical facelifts.",
    category: "Beauty Science",
    date: "Apr 10, 2026",
    readTime: "7 min read",
    slug: "thread-lifts-vs-surgical-facelifts",
  },
];

const categories = ["All", "Hair Restoration", "Skin", "Regenerative Medicine", "Wellness", "Anti-Aging", "Beauty Science"];

const gradientPairs: Record<string, [string, string]> = {
  "Hair Restoration": ["#3A281E", "#D6B787"],
  "Regenerative Medicine": ["#2B1C15", "#C5A067"],
  "Anti-Aging": ["#241710", "#B78B5E"],
  Skin: ["#3A281E", "#C5A067"],
  Wellness: ["#2B1C15", "#D6B787"],
  "Beauty Science": ["#241710", "#B78B5E"],
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" ? posts : posts.filter((p) => p.category === activeCategory);
  const featured = filteredPosts[0];
  const gridPosts = filteredPosts.slice(1);

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden" style={{ background: "#241710" }}>
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(214,183,135,0.08) 0%, transparent 70%)" }} />
        <div className="container-custom px-6 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <Badge variant="gold" className="mb-6">Our Journal</Badge>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-[#F6F0EA] mb-4 tracking-tight">
              Our Blog
            </h1>
            <p className="text-lg md:text-xl text-[#E8DDD1] max-w-2xl mx-auto font-light">
              Insights from the world of aesthetic medicine
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16" style={{ background: "#2B1C15" }}>
        <div className="container-custom px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? "text-[#2B1C15] bg-[#D6B787]"
                    : "text-[#8E7C6E] border border-[rgba(214,183,135,0.2)] hover:text-[#F6F0EA] hover:border-[#D6B787]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ background: "#241710" }}>
        <div className="container-custom px-6">
          {filteredPosts.length === 0 && (
            <p className="text-center text-[#8E7C6E] py-20 font-body">No articles in this category yet.</p>
          )}

          {featured && (
            <motion.div
              key={featured.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12 md:mb-16"
            >
              <Link href={`/blog/${featured.slug}`} className="group block">
                <div className="grid md:grid-cols-2 gap-0 md:gap-0">
                  <div
                    className="aspect-[4/3] md:aspect-auto relative overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${gradientPairs[featured.category]?.[0] || "#3A281E"}, ${gradientPairs[featured.category]?.[1] || "#D6B787"})` }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[#F6F0EA] font-heading text-6xl md:text-8xl opacity-20 group-hover:opacity-30 transition-opacity duration-500">+</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center" style={{ background: "#3A281E" }}>
                    <Badge variant="gold" className="mb-4 w-fit">{featured.category}</Badge>
                    <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-[#F6F0EA] mb-4 group-hover:text-[#D6B787] transition-colors duration-300">
                      {featured.title}
                    </h2>
                    <p className="text-[#E8DDD1] text-base md:text-lg leading-relaxed mb-6 font-light">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-5 text-sm text-[#8E7C6E] font-body mb-6">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[#D6B787]" /> {featured.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#D6B787]" /> {featured.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#D6B787] font-heading text-sm tracking-widest uppercase group-hover:gap-4 transition-all duration-300">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {gridPosts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {gridPosts.map((post, i) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link href={`/blog/${post.slug}`} className="group block h-full">
                    <div
                      className="h-full flex flex-col"
                      style={{ background: "#2B1C15", border: "1px solid rgba(214,183,135,0.08)" }}
                    >
                      <div
                        className="aspect-video relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${gradientPairs[post.category]?.[0] || "#3A281E"}, ${gradientPairs[post.category]?.[1] || "#D6B787"})` }}
                      >
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[#F6F0EA] font-heading text-5xl opacity-20 group-hover:opacity-30 transition-opacity duration-500">+</span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <Badge variant="default" className="mb-3 w-fit">{post.category}</Badge>
                        <h3 className="font-heading text-lg md:text-xl text-[#F6F0EA] mb-3 group-hover:text-[#D6B787] transition-colors duration-300">
                          {post.title}
                        </h3>
                        <p className="text-[#8E7C6E] text-sm leading-relaxed mb-4 font-body flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-[#8E7C6E] font-body pt-4 border-t border-[rgba(214,183,135,0.08)]">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#C5A067]" /> {post.date}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#C5A067]" /> {post.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ background: "#3A281E" }}>
        <div className="container-custom px-6">
          <div className="max-w-2xl mx-auto text-center">
            <Mail className="w-10 h-10 text-[#D6B787] mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl text-[#F6F0EA] mb-4">
              Stay Informed
            </h2>
            <p className="text-[#E8DDD1] font-light mb-8 max-w-lg mx-auto">
              Subscribe to our newsletter for the latest insights in aesthetic medicine and exclusive clinic updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 text-sm text-[#F6F0EA] border focus:outline-none transition-colors"
                style={{ background: "#2B1C15", borderColor: "rgba(214,183,135,0.2)", caretColor: "#D6B787" }}
              />
              <Button variant="primary" size="default">
                Subscribe <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-[#8E7C6E] text-xs mt-4 font-body">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
