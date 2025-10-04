"use client";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export type CardProps = HTMLAttributes<HTMLDivElement> & {
  hover?: boolean;
};

export default function Card({ className, hover = true, ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        clsx(
          "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-glass",
          hover && "transition-transform hover:-translate-y-0.5 hover:shadow-lg",
          className
        )
      )}
      {...props}
    />
  );
}
