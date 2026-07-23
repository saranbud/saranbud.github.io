"use client";

import { useState } from "react";
import { Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
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
  {
    label: "LOCATION",
    value: "Tempe, AZ",
    href: undefined,
    icon: <MapPin className="h-5 w-5" />,
  },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="Get In Touch"
          title="Let's start a"
          emphasis="conversation."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Contact Info */}
          <FadeIn direction="left">
            <div className="space-y-6">
              <p className="max-w-md text-muted-foreground leading-relaxed">
                I&apos;m always open to new opportunities, collaborations, or a
                good conversation about data and analytics. Drop me a message!
              </p>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-card text-muted-foreground">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-primary uppercase">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.label !== "EMAIL" ? "_blank" : undefined}
                          rel={item.label !== "EMAIL" ? "noopener noreferrer" : undefined}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      )}
                    </div>
                  </div>
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
                    action="https://formspree.io/f/mwvgnrol"
                    method="POST"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      try {
                        const res = await fetch(form.action, {
                          method: "POST",
                          body: new FormData(form),
                          headers: { Accept: "application/json" },
                        });
                        if (res.ok) {
                          setSubmitted(true);
                        } else {
                          const data = await res.json();
                          alert(data?.error || "Something went wrong. Try again.");
                        }
                      } catch {
                        alert("Network error. Please try again.");
                      }
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
