"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Workflow,
  TrendingUp,
  Globe,
  BookOpen,
  Code,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { StaggerChildren, staggerItem } from "@/components/motion/stagger-children";
import { writeups } from "@/data/writeups";

const iconMap: Record<string, React.ElementType> = {
  Workflow,
  TrendingUp,
  Globe,
  BookOpen,
};

export function Writeups() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="writeups" className="px-6 pt-16 pb-8">
      <div className="mx-auto max-w-6xl">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 text-left w-full"
        >
          <SectionHeading
            label="// write-ups"
            title="Case Studies & Analysis"
            description="Deep-dive analytical case studies and data-driven research."
          />
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="shrink-0"
          >
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pb-32 pt-16">
              <StaggerChildren className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {writeups.map((item) => {
                  const Icon = iconMap[item.icon] ?? Code;
                  return (
                    <motion.div key={item.title} variants={staggerItem}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:neon-glow">
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                          />
                          <CardContent className="relative p-6">
                            <div className="mb-4 flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50">
                                <Icon className="h-5 w-5 text-primary" />
                              </div>
                              <h3 className="font-semibold text-lg">{item.title}</h3>
                            </div>
                            <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                              {item.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {item.tech.map((t) => (
                                <TechBadge key={t}>{t}</TechBadge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    </motion.div>
                  );
                })}
              </StaggerChildren>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
