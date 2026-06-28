"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { formatDate } from "@/lib/utils"

const blogPosts = [
  {
    id: 1,
    category: "Treatments",
    title: "The Art of Facial Rejuvenation: Modern Approaches to Timeless Beauty",
    excerpt:
      "Discover how advanced aesthetic techniques are redefining facial rejuvenation, combining artistry with cutting-edge science for naturally radiant results.",
    date: new Date("2026-05-15"),
    image: "/blog/facial-rejuvenation.jpg",
    slug: "/blog/facial-rejuvenation",
    featured: true,
  },
  {
    id: 2,
    category: "Skincare",
    title: "Building a Luxury Skincare Ritual That Transforms Your Complexion",
    excerpt:
      "Expert guidance on curating a personalized skincare regimen using medical-grade products for visible, lasting results.",
    date: new Date("2026-04-28"),
    image: "/blog/luxury-skincare.jpg",
    slug: "/blog/luxury-skincare-ritual",
  },
  {
    id: 3,
    category: "Wellness",
    title: "The Connection Between Inner Balance and Outer Radiance",
    excerpt:
      "Exploring how holistic wellness practices enhance aesthetic outcomes and promote enduring beauty from within.",
    date: new Date("2026-04-10"),
    image: "/blog/inner-outer-radiance.jpg",
    slug: "/blog/inner-outer-radiance",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function BlogSection() {
  const featured = blogPosts.find((p) => p.featured)
  const sidePosts = blogPosts.filter((p) => !p.featured)

  return (
    <section className="bg-[#241710] section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="From Our Journal"
          subtitle="Insights, stories, and expert perspectives on the art of aesthetic wellness."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
        >
          {featured && (
            <motion.div variants={itemVariants} className="lg:col-span-2 lg:row-span-1">
              <Link
                href={featured.slug}
                className="group block relative h-full min-h-[420px] lg:min-h-[520px] rounded-2xl overflow-hidden bg-[#3A281E] border border-[rgba(214,183,135,0.25)]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#241710] via-[#241710]/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-[#2B1C15]">
                  <div className="w-full h-full bg-gradient-to-br from-[#3A281E] to-[#2B1C15] opacity-60" />
                </div>
                <div className="relative z-20 flex flex-col justify-end h-full p-6 sm:p-8 lg:p-10">
                  <Badge className="self-start mb-4 bg-[#D6B787]/15 text-[#D6B787] border border-[#D6B787]/30 hover:bg-[#D6B787]/20">
                    {featured.category}
                  </Badge>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#F6F0EA] mb-3 group-hover:text-[#D6B787] transition-colors duration-300">
                    {featured.title}
                  </h3>
                  <p className="text-[#8E7C6E] text-base sm:text-lg line-clamp-2 mb-4 max-w-2xl">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-[#8E7C6E] text-sm">
                    <Calendar className="w-4 h-4 text-[#B78B5E]" />
                    <span>{formatDate(featured.date)}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          <div className="flex flex-col gap-6">
            {sidePosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants}>
                <Link
                  href={post.slug}
                  className="group block rounded-2xl overflow-hidden bg-[#3A281E] border border-[rgba(214,183,135,0.25)] h-full"
                >
                  <div className="h-44 sm:h-48 bg-[#2B1C15]">
                    <div className="w-full h-full bg-gradient-to-br from-[#3A281E] to-[#2B1C15] opacity-60" />
                  </div>
                  <div className="p-5 sm:p-6">
                    <Badge className="mb-3 bg-[#D6B787]/15 text-[#D6B787] border border-[#D6B787]/30 hover:bg-[#D6B787]/20">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg sm:text-xl font-serif text-[#F6F0EA] mb-2 group-hover:text-[#D6B787] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#8E7C6E] text-sm line-clamp-2 mb-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#8E7C6E] text-sm">
                      <Calendar className="w-3.5 h-3.5 text-[#B78B5E]" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Button
            asChild
            className="bg-[#D6B787] hover:bg-[#C5A067] text-[#241710] font-medium px-8 py-6 rounded-xl text-base group"
          >
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
