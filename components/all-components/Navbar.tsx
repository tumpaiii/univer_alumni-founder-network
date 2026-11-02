"use client";
import {cn} from "@/lib/utils";
// @ts-nocheck — JSX source preserved during framework migration.
import React,{useState} from 'react';import Link from 'next/link';
import {usePathname} from 'next/navigation';import {ArrowUpRight,Menu,X} from 'lucide-react';import Brand from './Brand';
const links=[['Home','/'],['About','/about'],['Founders','/founders'],['Community','/community'],['Events','/events'],['Resources','/resources'],['Contact','/contact']];
interface NavbarProps { className?: string; }
export default function Navbar({className}:NavbarProps){const [open,setOpen]=useState(false),pathname=usePathname();const home=pathname==='/';return <header className={'nav-wrap nav-fixed '+(home?'nav-on-home':'nav-on-inner')}><nav className="navbar" aria-label="Primary navigation"><Brand/><div className="nav-links">{links.map(([label,to])=><Link className={pathname===to?'active':''} key={to} href={to}>{label}</Link>)}</div><Link className="nav-join" href="/membership">Join Network <ArrowUpRight size={17}/></Link><button className="mobile-menu-button" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></nav>{open&&<div className="mobile-panel">{[...links,['Join Network','/membership']].map(([label,to])=><Link key={to} href={to} onClick={()=>setOpen(false)}>{label}<ArrowUpRight size={16}/></Link>)}</div>}</header>}
