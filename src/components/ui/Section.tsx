"use client";
import { HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type SectionProps = HTMLAttributes<HTMLDivElement> & {
  width?: "sm" | "md" | "lg" | "xl" | "2xl";
};

const Section = forwardRef<HTMLDivElement, SectionProps>(
  ({ className, width = "xl", ...props }, ref) => {
    const maxWidth = {
      sm: "max-w-2xl",
      md: "max-w-3xl",
      lg: "max-w-5xl",
      xl: "max-w-7xl",
      "2xl": "max-w-[88rem]",
    }[width];

    return (
      <section ref={ref} className={twMerge("container", maxWidth, className)} {...props} />
    );
  }
);
Section.displayName = "Section";

export default Section;
