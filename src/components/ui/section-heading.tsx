import { FadeIn } from "@/components/motion/fade-in";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  emphasis?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  emphasis,
}: SectionHeadingProps) {
  const titleParts = emphasis ? title.split(emphasis) : [title];

  return (
    <FadeIn className="mb-16">
      <span className="mb-4 inline-block font-mono text-xs font-semibold tracking-wider text-primary uppercase">
        {label}
      </span>
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {titleParts[0]}
        {emphasis && <em className="text-primary">{emphasis}</em>}
        {titleParts[1] || ""}
      </h2>
      <div className="mb-6 h-1 w-12 bg-primary" />
      {description && (
        <p className="max-w-2xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
