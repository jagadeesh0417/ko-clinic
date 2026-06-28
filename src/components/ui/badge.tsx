import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A86A] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border border-[rgba(201,168,106,0.3)] bg-[rgba(201,168,106,0.1)] text-[#C9A86A]",
        gold: "bg-gradient-to-r from-[#C9A86A] to-[#D4AF37] text-[#080808]",
        outline: "border border-[rgba(201,168,106,0.3)] text-[#A1A1AA]",
        secondary:
          "bg-[rgba(255,255,255,0.05)] text-[#A1A1AA] border border-[rgba(255,255,255,0.1)]",
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
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
