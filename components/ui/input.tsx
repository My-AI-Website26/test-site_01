import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-xl border border-ink/15 bg-cream-50 px-4 text-sm text-ink placeholder:text-ink/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:border-transparent",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
