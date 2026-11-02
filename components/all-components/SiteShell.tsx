"use client";
import React from "react";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface SiteShellProps { className?: string; children:React.ReactNode; }
export default function SiteShell({children,className}:SiteShellProps){const pathname=usePathname();React.useEffect(()=>{window.scrollTo(0,0)},[pathname]);return <div className={cn("site-shell",className)}><Navbar/>{children}<Footer/></div>;}
