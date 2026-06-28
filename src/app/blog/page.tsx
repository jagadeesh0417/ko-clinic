"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Search } from "lucide-react";

const posts = [
  {
    title: "The Future of Hair Restoration: Micro Bio-FUE Explained",
    excerpt: "Discover how Micro Bio-FUE is revolutionizing hair transplantation with higher density and faster recovery times.",
    category: "Hair Restoration",
    author: "Dr. Vikas Singh",
    date: "Mar 15, 2026",
    slug: "future-of-hair-restoration",
    image: "hair-restoration",
  },
  {
    title: "Exosome Therapy: The Next Frontier in Regenerative Medicine",
    excerpt: "How stem cell derived exosomes are transforming aesthetic medicine and cellular repair.",
    category: "Regenerative Medicine",
    author: "Dr. Vikas Singh",
    date: "Feb 28, 2026",
    slug: "exosome-therapy-frontier",
    image: "exosome",
  },
  {
    title: "Combination Techniques: Why One Treatment Isn't Enough",
    excerpt: "Learn why combining treatments delivers superior results in modern aesthetic medicine.",
    category: "Aesthetic Science",
    author: "Dr. Vikas Singh",
    date: "Feb 10, 2026",
    slug: "combination-techniques",
    image: "combination",
  },
  {
    title: "The Art of Thread Lifts: Non-Surgical Facial Rejuvenation",
    excerpt: "PDO thread lifts offer instant lifting and collagen stimulation without surgery.",
    category: "Skin Rejuvenation",
    author: "Dr. Vikas Singh",
    date: "Jan 25, 2026",
    slug: "art-of-thread-lifts",
    image: "threads",
  },
  {
    title: "PRP Therapy: Harnessing Your Body's Healing Power",
    excerpt: "Platelet-Rich Plasma therapy stimulates natural healing for hair and skin.",
    category: "Hair Restoration",
    author: "Dr. Vikas Singh",
    date: "Jan 12, 2026",
    slug: "prp-therapy-healing",
    image: "prp",
  },
  {
    title: "Anti-Aging Science: What Actually Works in 2026",
    excerpt: "Evidence-based approaches to aging gracefully with modern aesthetic medicine.",
    category: "Anti Aging",
    author: "Dr. Vikas Singh",
    date: "Dec 28, 2025",
    slug: "anti-aging-science-2026",
    image: "anti-aging",
  },
];

const categories = ["All", "Hair Restoration", "Skin Rejuvenation", "Anti Aging", "Wellness", "Regenerative Medicine", "Aesthetic Science"];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.08),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <SectionHeading
            title="Blog & Insights"
            subtitle="Articles"
            description="Expert perspectives on aesthetic medicine and wellness"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-md mx-auto mt-8 relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A1A1AA]" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-[#101010] border border-[rgba(201,168,106,0.2)] pl-12 pr-4 py-3 text-[#FAFAFA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors"
            />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#101010] pt-0">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <GlassCard key={post.slug} delay={i * 0.05}>
                <div className="aspect-video bg-gradient-to-br from-[rgba(201,168,106,0.1)] to-[#080808] border border-[rgba(201,168,106,0.1)] mb-4 flex items-center justify-center">
                  <span className="text-[#C9A86A] font-heading text-2xl">+</span>
                </div>
                <Badge variant="default" className="mb-3">{post.category}</Badge>
                <h3 className="font-heading text-xl text-[#FAFAFA] mb-2 hover:text-gradient-gold transition-all">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4 font-body">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-[#A1A1AA] font-body">
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
