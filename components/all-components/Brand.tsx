"use client";
import {cn} from "@/lib/utils";
// @ts-nocheck — JSX source preserved during framework migration.
import React from 'react';import Link from 'next/link';
interface BrandProps { className?: string; footer?: boolean; }
export default function Brand({footer=false,className}:BrandProps){return <Link href="/" className={cn('site-brand',footer?'site-brand-footer':'',className)} aria-label="Alumni Founder Network home"><span className="brand-symbol" aria-hidden="true"><span/></span><span className="brand-title">Alumni Founder<br/>Network</span></Link>}
