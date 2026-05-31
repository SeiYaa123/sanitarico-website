import { cn } from "@/lib/utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "slate" | "red";
  className?: string;
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  gold: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  slate: "bg-slate-800 text-slate-300 border border-slate-700",
  red: "bg-red-600/10 text-red-400 border border-red-600/20",
};

export function Badge({ children, variant = "slate", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
