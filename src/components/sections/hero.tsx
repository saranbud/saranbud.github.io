"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const skills = [
  "SQL",
  "Tableau",
  "Power BI",
  "Python",
  "Databricks",
  "Excel",
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left: Text */}
        <div className="relative z-10">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
          >
            <span className="text-primary">&#10022;</span>
            OPEN TO DATA ANALYST ROLES
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-7xl"
          >
            Hi, I&apos;m
            <br />
            <span className="gradient-text">Saranya Srija</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 max-w-lg text-lg text-muted-foreground leading-relaxed"
          >
            MS Business Analytics @ ASU. I build dashboards, optimize SQL, and
            develop predictive models that drive business decisions.
          </motion.p>

          {/* Skill tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 flex flex-wrap gap-2"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: "lg" }),
                "bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Let&apos;s Connect
            </a>
          </motion.div>
        </div>

        {/* Right: Profile Picture */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative z-10 flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Decorative border */}
            <div className="absolute -inset-2 rounded-2xl border-2 border-primary/20" />
            <div className="relative h-80 w-64 overflow-hidden rounded-2xl border border-border/50 bg-card sm:h-96 sm:w-72">
              <Image
                src="/images/pfp.png"
                alt="Saranya Srija"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <span className="font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
