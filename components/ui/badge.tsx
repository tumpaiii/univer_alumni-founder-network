import * as React from "react";
import { cn } from "@/lib/utils";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> { className?: string }
export default function Badge({ className, ...props }: BadgeProps) {
  return <span className={cn("inline-flex items-center rounded-full border border-[#A4B5A2] px-3 py-1 text-xs font-medium text-[#142B36]", className)} {...props} />;
}
