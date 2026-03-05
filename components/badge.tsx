import Image from "next/image";
import { cn } from "@/lib/utils";

export function SkillBadge({
  name,
  icon,
  className,
}: {
  name: string;
  icon: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group inline-flex items-center gap-2 rounded-full border px-3 py-2 shadow-brutal",
        "bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/7 transition",
        className
      )}
    >
      <span className="relative h-6 w-6 overflow-hidden rounded-full border border-white/10 bg-black">
        <Image src={icon} alt={name} width={24} height={24} />
      </span>
      <span className="font-mono text-xs md:text-sm">{name}</span>
    </div>
  );
}
