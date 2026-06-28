"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C5A067] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#C5A067] to-[#B78B5E] text-[#2B1C15] hover:opacity-90 hover:translate-y-[-2px] shadow-lg hover:shadow-[0_20px_40px_rgba(197,160,103,0.15)] uppercase tracking-[0.15em] rounded-full",
        outline:
          "border border-[rgba(214,183,135,0.4)] text-[#F6F0EA] hover:bg-[rgba(214,183,135,0.08)] hover:border-[#D6B787] hover:translate-y-[-2px] uppercase tracking-[0.15em] rounded-full",
        ghost:
          "text-[#8E7C6E] hover:text-[#F6F0EA] hover:bg-[rgba(246,240,234,0.04)]",
        dark: "bg-[#2B1C15] text-[#F6F0EA] border border-[rgba(214,183,135,0.15)] hover:bg-[#241710] hover:border-[rgba(214,183,135,0.3)] rounded-full",
        gold: "bg-[#C5A067] text-[#2B1C15] hover:bg-[#D6B787] uppercase tracking-[0.15em] rounded-full",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-10 px-6 py-2 text-xs",
        lg: "h-14 px-10 py-4 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
