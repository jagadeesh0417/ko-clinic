"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96B] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#C8A96B] to-[#B8905A] text-[#22160F] hover:opacity-90 hover:translate-y-[-2px] shadow-lg hover:shadow-[0_20px_40px_rgba(200,169,107,0.15)] uppercase tracking-widest rounded-full",
        outline:
          "border border-[rgba(213,185,138,0.4)] text-[#F5F0EA] hover:bg-[rgba(213,185,138,0.08)] hover:border-[#D5B98A] hover:translate-y-[-2px] uppercase tracking-widest rounded-full",
        ghost:
          "text-[#7D6B5A] hover:text-[#F5F0EA] hover:bg-[rgba(245,240,234,0.04)]",
        dark: "bg-[#22160F] text-[#F5F0EA] border border-[rgba(213,185,138,0.15)] hover:bg-[#2A1A12] hover:border-[rgba(213,185,138,0.3)] rounded-full",
        gold: "bg-[#C8A96B] text-[#22160F] hover:bg-[#D5B98A] uppercase tracking-widest rounded-full",
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
