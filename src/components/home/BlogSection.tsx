"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight, Calendar, User } from "lucide-react";

const posts = [
  {
    title: "The Future of Hair Restoration: Micro Bio-FUE Explained",
    excerpt: "Discover how Micro Bio-FUE is revolutionizing hair transplantation with higher density and faster recovery.",
    category: "Hair Restoration", author: "Dr. Vikas Singh", date: "Mar 15, 2026", slug: "future-of-hair-restoration",
  },
  {
    title: "Exosome Therapy: The Next Frontier in Regenerative Medicine",
    excerpt: "How stem cell derived exosomes are transforming aesthetic medicine and cellular repair.",
    category: "Regenerative Medicine", author: "Dr. Vikas Singh", date: "Feb 28, 2026", slug: "exosome-therapy-frontier",
  },
  {
    title: "Combination Techniques: Why One Treatment Isn't Enough",
    excerpt: "Learn why combining treatments delivers superior results in modern aesthetic medicine.",
    category: "Aesthetic Science", author: "Dr. Vikas Singh", date: "Feb 10, 2026", slug: "combination-techniques",
  },
];

export function BlogSection() {
  return (
    <section className="section-padding bg-[#3C281D]">
      <div className="container-custom">
        <SectionHeading title="Latest Insights" subtitle="Blog" description="Expert perspectives on aesthetic medicine and wellness" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {posts.map((post, i) => (
            <GlassCard key={post.slug} delay={i * 0.1}>
              <span className="text-xs font-button uppercase tracking-wider text-[#D5B98A]">{post.category}</span>
              <h3 className="font-heading text-xl text-[#F5F0EA] mt-2 mb-3 hover:text-[#D5B98A] transition-all">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p className="text-[#7D6B5A] text-sm leading-relaxed mb-4 font-body">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-[#7D6B5A] font-body">
                <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
              </div>
            </GlassCard>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <Button variant="outline" asChild><Link href="/blog">View All Articles <ArrowRight className="w-4 h-4" /></Link></Button>
        </motion.div>
      </div>
    </section>
  );
}
