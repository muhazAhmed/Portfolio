"use client";
import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:opacity-60 disabled:cursor-not-allowed";

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const variants = {
  primary:
    "bg-primary text-white hover:bg-secondary shadow-sm",
  outline:
    "border border-primary/50 text-primary hover:bg-primary/10",
  ghost:
    "bg-transparent hover:bg-foreground/5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(clsx(base, sizes[size], variants[variant], className))}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export default Button;
