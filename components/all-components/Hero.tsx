"use client";
import {cn} from "@/lib/utils";
// @ts-nocheck — JSX source preserved during framework migration.
import React,{useLayoutEffect,useRef} from 'react';
import Link from 'next/link';
import {ArrowUpRight,ArrowDown} from 'lucide-react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import heroPhoto from '@/src/assets/images/campus-hero.jpg';
gsap.registerPlugin(ScrollTrigger);
interface HeroProps { className?: string; }
export default function Hero({className}:HeroProps){const root=useRef(null);useLayoutEffect(()=>{const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduced)return;const ctx=gsap.context(()=>{const tl=gsap.timeline({defaults:{ease:'power3.out'}});tl.fromTo('.hero-image',{scale:1.13,filter:'brightness(.55)'},{scale:1,filter:'brightness(.82)',duration:1.9,ease:'power2.out'},0).fromTo('.navbar > *',{y:-28,opacity:0},{y:0,opacity:1,stagger:.11,duration:.8},.15).fromTo('.hero-title-line span',{yPercent:115,opacity:0},{yPercent:0,opacity:1,stagger:.17,duration:1.15},.38).fromTo('.hero-description,.hero-cta,.hero-scroll',{y:25,opacity:0},{y:0,opacity:1,stagger:.13,duration:.8},1.03).fromTo('.hero-giant span',{yPercent:120,opacity:0},{yPercent:0,opacity:1,duration:1.15},1.04);gsap.to('.hero-image',{yPercent:17,ease:'none',scrollTrigger:{trigger:root.current,start:'top top',end:'bottom top',scrub:true}});},root);return()=>ctx.revert()},[]);return <section className={cn("hero",className)} ref={root} aria-label="Alumni Founder Network introduction"><div className="hero-image" style={{backgroundImage:`url(${heroPhoto.src})`}}/><div className="hero-shade"/><div className="hero-inner"><h1 className="hero-title"><span className="hero-title-line"><span>CONNECTING</span></span><span className="hero-title-line"><span>ALUMNI FOUNDERS</span></span></h1><div className="hero-bottom"><div className="hero-bottom-left"><p className="hero-description">A community of university alumni building businesses, sharing ideas, and creating what comes next.</p><Link href="/membership" className="hero-cta">JOIN THE NETWORK <ArrowUpRight size={17}/></Link><span className="hero-scroll">SCROLL TO EXPLORE <ArrowDown size={13}/></span></div><div className="hero-giant"><span>FOUNDERS</span></div></div></div></section>}
