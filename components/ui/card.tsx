import * as React from "react";
import { cn } from "@/lib/utils";
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> { className?: string }
export default function Card({ className, ...props }: CardProps) {
  return <div className={cn("rounded-xl border border-[#142B36]/15 bg-white p-6 text-[#142B36]", className)} {...props} />;
}
