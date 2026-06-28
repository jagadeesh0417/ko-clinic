import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#C8A96B] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border border-[rgba(213,185,138,0.25)] bg-[rgba(213,185,138,0.08)] text-[#D5B98A]",
        gold: "bg-gradient-to-r from-[#C8A96B] to-[#B8905A] text-[#22160F]",
        outline: "border border-[rgba(213,185,138,0.25)] text-[#7D6B5A]",
        secondary: "bg-[rgba(245,240,234,0.04)] text-[#7D6B5A] border border-[rgba(213,185,138,0.1)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
