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
    <FadeIn className="mb-12">
      <p className="mb-3 text-xs font-semibold tracking-widest text-primary uppercase">
        {label}
      </p>
      <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {titleParts[0]}
        {emphasis && <em className="text-primary">{emphasis}</em>}
        {titleParts[1] || ""}
      </h2>
      <div className="mb-8 h-0.5 w-16 bg-primary" />
      {description && (
        <p className="max-w-2xl text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </FadeIn>
  );
}
