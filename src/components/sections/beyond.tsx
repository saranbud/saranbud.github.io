"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";

const galleryImages = [
  { src: "/images/ui-trust.png", alt: "U&I Trust - Teaching" },
  { src: "/images/ui-trust-2.jpg", alt: "U&I Trust - Community" },
];

export function BeyondWork() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="beyond" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Beyond Work"
          title="Community, Creativity &"
          emphasis="Travel"
          description="What I do when I'm not analyzing data."
        />

        {/* U&I Trust Teaching Card */}
        <FadeIn>
          <Card className="mb-8 overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50">
                  <span className="text-lg">&#127891;</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Teacher</h3>
                  <p className="text-sm text-muted-foreground">U&I Trust &middot; Jun 2021 - Jul 2023</p>
                </div>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                Volunteered as a teacher at U&I Organization, working with underprivileged and children in need of care, focusing on developing their Cognitive Academic Language Proficiency (CALP).
              </p>

              {/* Photo Gallery */}
              <div className="flex gap-3">
                {galleryImages.map((img) => (
                  <motion.div
                    key={img.src}
                    className="relative h-24 w-24 cursor-pointer overflow-hidden rounded-lg border border-border/50 sm:h-32 sm:w-32"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(img.src)}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>

        {/* Other Beyond Work Items */}
        <div className="grid gap-6 md:grid-cols-2">
          <FadeIn>
            <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-lg">Community Building</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Built <strong className="text-foreground">800 followers</strong> on Instagram with <strong className="text-foreground">127K views</strong> on music and instruments content.
                </p>
                <motion.div
                  className="relative h-32 w-full cursor-pointer overflow-hidden rounded-lg border border-border/50"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedImage("/images/instagram.jpg")}
                >
                  <Image
                    src="/images/instagram.jpg"
                    alt="Instagram Music Content"
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </motion.div>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.1}>
            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-lg">Travel & Curiosity</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Exploring new places and staying curious about the world beyond the screen.
                </p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-h-[80vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black"
              >
                <X className="h-4 w-4" />
              </button>
              <Image
                src={selectedImage}
                alt="U&I Trust"
                width={800}
                height={600}
                className="rounded-lg object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
