"use client";
import {cn} from "@/lib/utils";
// @ts-nocheck — JSX source preserved during framework migration.
import React,{useLayoutEffect,useRef} from 'react';
import {ArrowUpRight} from 'lucide-react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
const gathering='https://images.pexels.com/photos/8199162/pexels-photo-8199162.jpeg';
const campus='https://images.pexels.com/photos/8197556/pexels-photo-8197556.jpeg';
gsap.registerPlugin(ScrollTrigger);
const items=[
 {n:'01',title:'Founder Mentorship',description:'Learn from alumni who understand the challenges of building something new.',tags:['FOUNDER GUIDANCE','SHARED EXPERIENCE','PRACTICAL ADVICE'],image:gathering},
 {n:'02',title:'Capital & Connections',description:'Find meaningful introductions and explore pathways to support your next stage.',tags:['INVESTOR READINESS','ALUMNI NETWORK','OPPORTUNITIES'],image:campus},
 {n:'03',title:'Peer Collaboration',description:'Meet founders with complementary skills, fresh perspectives and shared ambition.',tags:['PEER EXCHANGE','PARTNERSHIPS','COMMUNITY'],image:gathering},
 {n:'04',title:'Founder Resources',description:'Access conversations, knowledge and events designed to help founders move forward.',tags:['LEARNING','EVENTS','TOOLS'],image:campus}
];
interface FounderSupportProps { className?: string; }
export default function FounderSupport({className}:FounderSupportProps){const ref=useRef(null);useLayoutEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const ctx=gsap.context(()=>{gsap.utils.toArray('.support-item').forEach((el,i)=>{gsap.fromTo(el,{x:i%2===0?100:-100,y:60,opacity:0},{x:0,y:0,opacity:1,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 95%',end:'top 53%',scrub:1}});gsap.fromTo(el.querySelector('img'),{scale:1.16},{scale:1,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:true}});});},ref);return()=>ctx.revert()},[]);return <section className={cn("support-section",className)} id="founder-support" ref={ref}><div className="support-heading"><div><span className="support-eyebrow">04 / FOUNDER SUPPORT</span><h2>Good connections make<br/>great things possible.</h2></div><a href="/resources">EXPLORE RESOURCES <ArrowUpRight size={16}/></a></div><div className="support-list">{items.map((it,i)=><article className={'support-item '+(i%2?'support-left':'support-right')} key={it.n}><div className="support-image"><img src={it.image} alt="University alumni community"/></div><div className="support-item-copy"><span className="support-number">{it.n} / SUPPORT</span><h3>{it.title}</h3><p>{it.description}</p><a href="/resources">DISCOVER MORE <ArrowUpRight size={14}/></a></div><ul>{it.tags.map(tag=><li key={tag}>+ {tag}</li>)}</ul></article>)}</div><div className="support-end"><span>CONNECTED BY OUR ROOTS</span><span>DRIVEN BY WHAT'S NEXT</span></div></section>}
