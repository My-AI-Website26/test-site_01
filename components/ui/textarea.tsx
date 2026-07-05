import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "flex min-h-[140px] w-full rounded-xl border border-ink/15 bg-cream-50 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta-500 focus-visible:border-transparent",
      className
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
