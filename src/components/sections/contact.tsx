"use client";

import { useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    label: "EMAIL",
    value: "saranya.s.buddhav@gmail.com",
    href: "mailto:saranya.s.buddhav@gmail.com",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/saranyasrija",
    href: "https://www.linkedin.com/in/saranyasrija/",
    icon: <LinkedinIcon className="h-5 w-5" />,
  },
  {
    label: "GITHUB",
    value: "github.com/saranbud",
    href: "https://github.com/saranbud",
    icon: <GithubIcon className="h-5 w-5" />,
  },
  {
    label: "INSTAGRAM",
    value: "@saranyasreeja_music",
    href: "https://instagram.com/saranyasreeja_music",
    icon: <InstagramIcon className="h-5 w-5" />,
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <span className="mb-4 inline-block font-mono text-sm tracking-wider text-primary uppercase">
            // get in touch
          </span>
          <h2 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s start a{" "}
            <span className="italic text-primary">conversation.</span>
          </h2>
          <div className="mb-8 h-1 w-12 bg-primary" />
        </FadeIn>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Description + Contact Info */}
          <FadeIn direction="left">
            <div className="space-y-8">
              <p className="max-w-md text-muted-foreground leading-relaxed">
                Open to data analyst, analytics, and business intelligence roles.
                Whether it&apos;s a project, a role, or just a good conversation
                about data and insights — reach out.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label !== "EMAIL" ? "_blank" : undefined}
                    rel={item.label !== "EMAIL" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-card text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-wider text-primary uppercase">
                        {item.label}
                      </p>
                      <p className="text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Right: Contact Form */}
          <FadeIn direction="right" delay={0.2}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                {submitted ? (
                  <div className="flex h-full items-center justify-center py-12">
                    <p className="text-lg text-primary">Thanks! I&apos;ll get back to you soon.</p>
                  </div>
                ) : (
                  <form
                    action="https://formspree.io/f/YOUR_FORM_ID"
                    method="POST"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      fetch(form.action, {
                        method: "POST",
                        body: new FormData(form),
                        headers: { Accept: "application/json" },
                      }).then((res) => {
                        if (res.ok) setSubmitted(true);
                      });
                    }}
                    className="space-y-4"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      required
                      className="w-full resize-none rounded-lg border border-border/50 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                    <button
                      type="submit"
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      )}
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
