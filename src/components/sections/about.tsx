"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/motion/fade-in";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Projects Shipped", value: "8+" },
  { label: "Years Experience", value: "2yr+" },
  { label: "Tools Mastered", value: "10+" },
  { label: "Certifications", value: "3" },
];

export function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// who am i"
          title="Data & Business Analyst"
          description="SAP SAC & SAP BDC Certified. Building data pipelines, financial planning models, and analytics solutions that drive enterprise decisions."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Terminal */}
          <FadeIn direction="left">
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
          </FadeIn>

          {/* Bio + Stats */}
          <FadeIn direction="right" delay={0.2}>
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I&apos;m Saranya Srija, a Data & Business Analyst based in Tempe, AZ, with 2+ years of experience in financial planning, corporate forecasting, and enterprise data architecture. I specialize in leveraging SAP S/4HANA and SAP Analytics Cloud (SAC) alongside modern cloud platforms like Databricks and AWS to build financial planning engines and automated data pipelines.
                </p>
                <p>
                  My core strength is in financial planning and analysis (FP&amp;A) and data engineering. At Ramadevi & Co., I designed PySpark pipelines moving 100K+ SAP ledger records into AWS S3 and Databricks, building a 13-week cash-flow forecast that reduced variance by 18%. At KATBOTZ LLC, I built automated Databricks pipelines processing 10K+ records and developed a GenAI finance agent with 90% accuracy. At Datagaps, I designed data models and workforce dashboards for 120+ users. At Yonder Talent, I built predictive models achieving 90% peak-period staffing coverage and reduced customer wait times by 15%.
                </p>
                <p>
                  My toolkit spans SAP Analytics Cloud, SAP S/4HANA, SQL, Python, PySpark, Databricks, and AWS. I hold an MS in Business Analytics from ASU (Big Data &amp; Supply Chain concentration) and bring a Lean Six Sigma mindset to every problem.
                </p>
              </div>

              {/* Where I've Worked */}
              <div>
                <p className="mb-3 text-xs font-mono tracking-wider text-muted-foreground uppercase">
                  Where I&apos;ve Worked
                </p>
                <motion.div className="flex items-center gap-6">
                  {[
                    { src: "/images/katbotz.jpg", alt: "KATBOTZ LLC" },
                    { src: "/images/datagaps.jpg", alt: "Datagaps" },
                    { src: "/images/ramadevi.svg", alt: "Ramadevi & Co." },
                    { src: "/images/asu.png", alt: "ASU" },
                  ].map((logo, i) => (
                    <motion.div
                      key={logo.alt}
                      className="flex items-center gap-2"
                      whileHover={{ scale: 1.15 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="relative h-12 w-16 overflow-hidden rounded-lg border border-border/50 bg-card">
                        <Image src={logo.src} alt={logo.alt} fill className="object-contain p-1.5" />
                      </div>
                      <span className="text-xs text-muted-foreground">{logo.alt}</span>
                    </motion.div>
                  ))}
                </motion.div>
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