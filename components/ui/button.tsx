import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B96F52] disabled:pointer-events-none disabled:opacity-50", {
  variants: {
    variant: { default: "bg-[#142B36] text-white hover:bg-[#254652]", outline: "border border-[#142B36] bg-transparent text-[#142B36] hover:bg-[#142B36]/10", ghost: "text-[#142B36] hover:bg-[#142B36]/10" },
    size: { default: "h-10 px-4 py-2", sm: "h-9 px-3", lg: "h-11 px-8", icon: "h-10 w-10" }
  }, defaultVariants: { variant: "default", size: "default" }
});
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { className?: string; asChild?: boolean }
export default function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
