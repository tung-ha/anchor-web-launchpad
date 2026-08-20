import { Anchor } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Placeholder logo. To use a real logo image later, replace the contents of
 * this component with an <img src={logo} alt="Anchor Web" /> — nothing else
 * in the site needs to change.
 */
export function Wordmark({
  className,
  onNavy = false,
}: {
  className?: string;
  onNavy?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-xl",
          onNavy ? "bg-brand text-brand-foreground" : "bg-primary text-primary-foreground",
        )}
      >
        <Anchor className="size-5" strokeWidth={2.2} />
      </span>
      <span
        className={cn(
          "font-display text-lg font-extrabold tracking-tight",
          onNavy ? "text-primary-foreground" : "text-primary",
        )}
      >
        Anchor Web
      </span>
    </span>
  );
}
