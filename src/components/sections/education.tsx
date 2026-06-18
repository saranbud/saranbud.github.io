"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/data/education";

export function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          label="// education"
          title="Academic Background"
          description="Formal training in business analytics and data-driven decision making."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-purple-500/50 to-transparent" />

          <div className="space-y-12">
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="relative flex flex-col gap-4 pl-12"
              >
                {/* Dot */}
                <div className="absolute left-[13px] top-6 z-10 flex h-3 w-3 items-center justify-center rounded-full border-2 border-primary bg-background">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>

                {/* Card */}
                <div>
                  <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="mb-2 flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                        <span className="font-mono text-xs text-primary">
                          {edu.period}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold">{edu.school}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">
                        {edu.degree}
                      </p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {edu.details}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}