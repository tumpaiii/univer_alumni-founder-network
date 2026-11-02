"use client";
import {cn} from "@/lib/utils";
// @ts-nocheck — JSX source preserved during framework migration.
import React,{useLayoutEffect,useRef} from 'react';
import {ArrowUpRight} from 'lucide-react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
// Three distinct free Pexels photographs; remote image URLs are used because
// the image files could not be downloaded in this environment.
const alumniPhoto = 'https://images.pexels.com/photos/7972526/pexels-photo-7972526.jpeg?auto=compress&cs=tinysrgb&w=1400';
const collaborationPhoto = 'https://images.pexels.com/photos/7651717/pexels-photo-7651717.jpeg?auto=compress&cs=tinysrgb&w=1400';
const eventPhoto = 'https://images.pexels.com/photos/38111334/pexels-photo-38111334.jpeg?auto=compress&cs=tinysrgb&w=1400';
gsap.registerPlugin(ScrollTrigger);
const ventures=[
 {n:'01',label:'COMMUNITY & CONNECTION',title:'The people behind the possibilities.',desc:'Meet alumni who turn shared experience into meaningful new ventures.',image:alumniPhoto,category:'PEOPLE / PURPOSE'},
 {n:'02',label:'IDEAS & ENTERPRISE',title:'From first idea to forward momentum.',desc:'A space for founders to exchange perspectives and build what comes next.',image:collaborationPhoto,category:'IDEAS / ENTERPRISE'},
 {n:'03',label:'COLLABORATION & GROWTH',title:'Built together. Going further.',desc:'Discover the relationships, conversations and resources that help ideas grow.',image:eventPhoto,category:'GROWTH / COMMUNITY'}
];
interface FeaturedVenturesProps { className?: string; }
export default function FeaturedVentures({className}:FeaturedVenturesProps){const ref=useRef(null);useLayoutEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||window.innerWidth<768)return;const ctx=gsap.context(()=>{const panels=gsap.utils.toArray('.venture-panel');panels.forEach((panel,i)=>{gsap.set(panel,{zIndex:i+1});if(i===0)return;gsap.fromTo(panel,{yPercent:100},{yPercent:0,ease:'none',scrollTrigger:{trigger:ref.current,start:`top top-=${(i-1)*window.innerHeight}`,end:`top top-=${i*window.innerHeight}`,scrub:true,invalidateOnRefresh:true}});});ScrollTrigger.create({trigger:ref.current,start:'top top',end:()=>`+=${(panels.length-1)*window.innerHeight}`,pin:'.venture-stage',pinSpacing:true,invalidateOnRefresh:true});},ref);return()=>ctx.revert()},[]);return <section className={cn("venture-section",className)} ref={ref} id="featured-ventures"><div className="venture-stage">{ventures.map((v,i)=><article className={'venture-panel venture-panel-'+i} key={v.n}><div className="venture-head"><span>FEATURED ALUMNI / {v.n}</span><span>{v.category}</span></div><div className="venture-main"><div className="venture-copy"><span className="venture-kicker">{v.label}</span><h2>{v.title}</h2><p>{v.desc}</p><a href="/founders">EXPLORE THE NETWORK <ArrowUpRight size={16}/></a></div><div className="venture-visual"><img src={v.image} alt={i===0 ? "University alumni connecting on campus" : i===1 ? "Founders collaborating in a meeting" : "Audience at a professional networking event"}/><span>ALUMNI / {v.n}</span></div></div><div className="venture-bottom"><span>FOUNDERS BUILDING WHAT'S NEXT</span><span>{v.n} / 03</span></div></article>)}</div></section>}
