"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Projects Delivered", value: "8+" },
  { label: "Years Experience", value: "2+" },
  { label: "Tools Mastered", value: "10+" },
  { label: "Certifications", value: "3" },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// about"
          title="Data Analyst That Ships"
          description="Turning data into decisions — with dashboards, models, and insights."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image placeholder + Terminal */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-2xl border border-border/50 neon-glow">
                <Image
                  src="/images/pfp.png"
                  alt="Saranya Srija"
                  width={600}
                  height={600}
                  className="w-full aspect-square object-cover"
                  priority
                />
              </div>

              {/* Terminal block */}
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <div className="h-3 w-3 rounded-full bg-green-500/70" />
                    <span className="ml-2 font-mono text-xs text-muted-foreground">
                      terminal
                    </span>
                  </div>
                  <pre className="font-mono text-xs leading-relaxed text-muted-foreground">
                    <code>
{`$ whoami
> saranya_srija

$ cat skills.txt
> sql, tableau, python,
> power bi, excel, hubspot

$ echo $STATUS
> turning data into decisions`}
                    </code>
                  </pre>
                </CardContent>
              </Card>
            </div>
          </FadeIn>

          {/* Bio + Stats */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m Saranya Srija, a data analyst based in Tempe, AZ. I
                  specialize in turning raw data into actionable insights —
                  building dashboards, writing efficient SQL, and developing
                  predictive models that drive business decisions.
                </p>
                <p>
                  My experience spans financial data analysis, CRM analytics,
                  customer segmentation, and process optimization using Lean Six
                  Sigma. I&apos;m passionate about uncovering patterns in data and
                  translating them into meaningful business impact.
                </p>
                <p>
                  When I&apos;m not querying databases or building dashboards,
                  you&apos;ll find me exploring new analytics tools and working on
                  data-driven side projects.
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-4 text-center">
                        <p className="text-2xl font-bold gradient-text">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs font-mono text-muted-foreground">
                          {stat.label}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}