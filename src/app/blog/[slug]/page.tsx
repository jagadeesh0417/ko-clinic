"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";

const posts: Record<string, { title: string; content: string; category: string; author: string; date: string }> = {
  "future-of-hair-restoration": {
    title: "The Future of Hair Restoration: Micro Bio-FUE Explained",
    content: "Micro Bio-FUE (Follicular Unit Extraction) represents the pinnacle of hair restoration technology. Unlike traditional FUE, Micro Bio-FUE uses micro-motorized extraction systems that are gentler on follicles, resulting in higher graft survival rates and faster healing times. The procedure involves extracting individual follicular units from the donor area and implanting them into thinning or balding areas with precision. What sets Micro Bio-FUE apart is the preservation of the follicle's biological integrity during extraction, leading to a graft survival rate exceeding 95%. Patients typically see initial growth at 3-4 months, with full results visible at 12-18 months. The technique is suitable for Norwood scale I-VII hair loss patterns and can be combined with PRP therapy for enhanced results.",
    category: "Hair Restoration",
    author: "Dr. Vikas Singh",
    date: "Mar 15, 2026",
  },
  "exosome-therapy-frontier": {
    title: "Exosome Therapy: The Next Frontier in Regenerative Medicine",
    content: "Exosome therapy represents a breakthrough in regenerative aesthetic medicine. Exosomes are nano-sized extracellular vesicles secreted by stem cells that act as messengers, carrying proteins, lipids, and genetic material to target cells. Unlike traditional stem cell therapy, exosomes offer a cell-free approach that eliminates concerns about cell viability, rejection, or tumorigenicity. In aesthetic medicine, exosomes stimulate fibroblast activity, boost collagen and elastin production, reduce inflammation, and promote cellular repair. Clinical applications include facial rejuvenation, scar reduction, pigmentation treatment, and hair restoration. The therapy is typically administered through microneedling or injection, with patients reporting visible improvements in skin texture, tone, and firmness within weeks.",
    category: "Regenerative Medicine",
    author: "Dr. Vikas Singh",
    date: "Feb 28, 2026",
  },
  "combination-techniques": {
    title: "Combination Techniques: Why One Treatment Isn't Enough",
    content: "In modern aesthetic medicine, the most transformative results come from combining complementary treatments. This approach, known as combination therapy, addresses multiple aspects of aging and aesthetic concerns simultaneously. For example, combining PRP therapy with microneedling enhances collagen production while delivering growth factors deep into the dermis. Similarly, pairing Botox with dermal fillers addresses both dynamic wrinkles and volume loss, creating a more comprehensive rejuvenation. Thread lifts combined with laser skin tightening provide both immediate lifting and long-term collagen stimulation. The synergy between treatments often produces results greater than the sum of their individual effects. At KO Clinic, we specialize in designing personalized combination treatment protocols that address each patient's unique anatomy and aesthetic goals.",
    category: "Aesthetic Science",
    author: "Dr. Vikas Singh",
    date: "Feb 10, 2026",
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts[slug];

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="font-heading text-4xl text-[#FAFAFA] mb-4">Article Not Found</h1>
        <Button variant="outline" asChild>
          <Link href="/blog">View All Articles</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <article className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.08),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#FAFAFA] text-sm font-body mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <Badge variant="default" className="mb-4">{post.category}</Badge>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-[#FAFAFA] mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-[#A1A1AA] font-body mb-8">
              <span className="flex items-center gap-2"><User className="w-4 h-4" /> {post.author}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
              <button className="flex items-center gap-2 hover:text-[#C9A86A] transition-colors">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </div>
          </motion.div>
        </div>
      </article>

      <section className="section-padding bg-[#101010] pt-0">
        <div className="container-custom px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="aspect-video bg-gradient-to-br from-[rgba(201,168,106,0.1)] to-[#080808] border border-[rgba(201,168,106,0.1)] mb-10 flex items-center justify-center">
              <span className="text-[#C9A86A] font-heading text-4xl">+</span>
            </div>
            <div className="prose prose-invert prose-gold max-w-none">
              <p className="text-[#A1A1AA] text-lg leading-relaxed font-body whitespace-pre-line">
                {post.content}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
