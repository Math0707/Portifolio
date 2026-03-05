import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto max-w-6xl px-4 py-14 md:py-20", className)}>
      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-4">
          {eyebrow ? (
            <p className="font-mono text-xs tracking-widest text-white/55 mb-3 uppercase">{eyebrow}</p>
          ) : null}
          <h2 className="text-2xl md:text-4xl font-semibold leading-tight">{title}</h2>
          {subtitle ? <p className="mt-4 text-white/70 leading-relaxed">{subtitle}</p> : null}
        </div>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
