import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline" | "gold";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-md";

    const variants = {
      primary:
        "bg-ocean text-white hover:bg-[#0c3339] shadow-sm",
      secondary:
        "bg-transparent border border-ocean/30 text-ocean hover:bg-ocean/5",
      ghost: "bg-transparent text-charcoal hover:bg-sand/40",
      outline:
        "border border-sand bg-white text-charcoal hover:bg-ivory",
      gold:
        "bg-gold text-charcoal hover:bg-[#b89555] shadow-sm",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-6 text-sm",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        className={cn(base, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
