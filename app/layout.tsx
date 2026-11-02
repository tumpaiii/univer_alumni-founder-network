import type {Metadata} from "next";
import "./globals.css";
import SiteShell from "@/components/all-components/SiteShell";
export const metadata:Metadata={title:"Alumni Founder Network",description:"University alumni entrepreneurs, events, mentorship and community"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><SiteShell>{children}</SiteShell></body></html>;}
