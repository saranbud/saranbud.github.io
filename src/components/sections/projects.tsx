"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  Plane,
  Workflow,
  TrendingUp,
  Globe,
  DollarSign,
  Code,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { StaggerChildren, staggerItem } from "@/components/motion/stagger-children";
import { projects } from "@/data/projects";

const iconMap: Record<string, React.ElementType> = {
  Home,
  Plane,
  Workflow,
  TrendingUp,
  Globe,
  DollarSign,
};

const categoryLabels: Record<string, string> = {
  all: "All",
  finance: "Finance",
  technology: "Technology/SaaS",
  healthcare: "Healthcare",
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="// projects"
          title="What I've Built"
          description="Dashboards and data visualizations built with Tableau, Databricks Lakeview, and other BI tools."
        />

        {/* Filter tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {Object.entries(categoryLabels).map(([key, label]) => {
            const count = key === "all" ? projects.length : projects.filter((p) => p.category === key).length;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`rounded-full px-4 py-2 text-sm font-mono transition-all ${
                  activeCategory === key
                    ? "bg-primary text-primary-foreground"
                    : "border border-border/50 bg-secondary/50 text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
                <span className="ml-1.5 text-xs opacity-70">({count})</span>
              </button>
            );
          })}
        </div>

        <StaggerChildren key={activeCategory} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => {
            const Icon = iconMap[project.icon] ?? Code;
            return (
              <motion.div key={project.title} variants={staggerItem}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="group relative h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:neon-glow">
                    {/* Gradient accent */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <CardContent className="relative p-6">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-background/50">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                      </div>

                      <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
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

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-mono text-sm text-muted-foreground">
              No projects in this category yet. Coming soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}