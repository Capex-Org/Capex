import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type HeroFeatureCardProps = {
  title: string;
  image: string; // url or imported asset
  className?: string;
};

export function HeroFeatureCard({
  title,
  image,
  className,
}: HeroFeatureCardProps) {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-2xl border-white/10 bg-white/[0.04] p-0 ring-1 ring-white/10 shadow-sm",
        className
      )}
    >
      <div className="relative w-full aspect-[16/10]">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full select-none object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
        />
        {/* keep text readable like your mock */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/5" />
      </div>

      {/* chip + circle arrow */}
      <div className="absolute left-3 right-3 bottom-3 z-10 flex items-center justify-between">
        <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium tracking-wide">
          {title}
        </span>
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Card>
  );
}
