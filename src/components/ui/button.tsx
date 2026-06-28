"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A86A] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-[#C9A86A] to-[#D4AF37] text-[#080808] hover:opacity-90 hover:translate-y-[-2px] shadow-lg hover:shadow-[0_20px_40px_rgba(201,168,106,0.2)] uppercase tracking-widest",
        outline:
          "border border-[rgba(201,168,106,0.5)] text-[#FAFAFA] hover:bg-[rgba(201,168,106,0.1)] hover:border-[#C9A86A] hover:translate-y-[-2px] uppercase tracking-widest",
        ghost:
          "text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[rgba(255,255,255,0.05)]",
        dark: "bg-[#080808] text-[#FAFAFA] border border-[rgba(255,255,255,0.1)] hover:bg-[#101010] hover:border-[rgba(201,168,106,0.3)]",
        gold: "bg-[#C9A86A] text-[#080808] hover:bg-[#D4AF37] uppercase tracking-widest",
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
