"use client";

import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  Compass,
  Code,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerChildren, staggerItem } from "@/components/motion/stagger-children";
import { beyondItems } from "@/data/beyond";

const iconMap: Record<string, React.ElementType> = {
  Users,
  HeartHandshake,
  Compass,
};

export function BeyondWork() {
  return (
    <section id="beyond" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// beyond work"
          title="Community, Creativity & Travel"
          description="What I do when I'm not analyzing data."
        />

        <StaggerChildren className="grid gap-6 md:grid-cols-2">
          {beyondItems.map((item) => {
            const Icon = iconMap[item.icon] ?? Code;
            return (
              <motion.div key={item.title} variants={staggerItem}>
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
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
