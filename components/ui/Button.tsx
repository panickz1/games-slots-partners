import type { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "gold" | "ghost" | "text";
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-7 text-base",
};

const variants = {
  gold: "bg-gold-gradient text-black hover:bg-right",
  ghost: "border border-line text-white hover:border-muted",
  text: "text-muted hover:text-white",
};

export function Button({ variant = "gold", size = "md", className = "", ...rest }: Props) {
  return (
    <a
      className={`group inline-flex items-center justify-center gap-2 rounded-lg font-bold whitespace-nowrap transition-all duration-300 active:scale-[0.98] ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    />
  );
}
