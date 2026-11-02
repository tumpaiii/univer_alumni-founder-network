"use client";
import {cn} from "@/lib/utils";
// @ts-nocheck — JSX source preserved during framework migration.
import React from 'react';
import {ArrowUpRight} from 'lucide-react';
const founders=[
 {id:'29995646',name:'Alex Morgan',venture:'Northstar Labs',role:'Co-founder & CEO',sector:'Technology',story:'Building practical digital tools that help small teams turn complex workflows into simpler everyday experiences.'},
 {id:'30479371',name:'Jordan Lee',venture:'Open Field Studio',role:'Founder',sector:'Creative Business',story:'Combining design, strategy and entrepreneurship to help emerging brands find their voice and grow sustainably.'},
 {id:'31833805',name:'Samira Rahman',venture:'BridgeWorks',role:'Co-founder',sector:'Community & Innovation',story:'Creating opportunities for founders to connect with collaborators, learn from peers and develop new ideas.'},
 {id:'4797690',name:'Daniel Brooks',venture:'Elevate Partners',role:'Founder & Managing Director',sector:'Business Services',story:'Supporting growing ventures through clear strategy, partnerships and practical operational guidance.'},
 {id:'31880922',name:'Taylor Chen',venture:'Future Path',role:'Founder',sector:'Education',story:'Exploring new ways to make professional learning and mentorship more accessible to ambitious entrepreneurs.'}
];
interface FounderProfilesProps { className?: string; }
export default function FounderProfiles({className}:FounderProfilesProps){return <section className={cn("profiles-section",className)} id="profiles"><div className="profiles-intro"><span>MEET THE FOUNDERS</span><h1>Meet the people building what’s next.</h1><p>Explore founder journeys, ventures and areas of expertise.</p><small>Demonstration profiles and names; replace with confirmed alumni information before publishing.</small></div><div className="profiles-grid">{founders.map((f,i)=><article className="profile-card" key={f.id} id={'profile-'+(i+1)}><div className="profile-photo"><img src={'https://images.pexels.com/photos/'+f.id+'/pexels-photo-'+f.id+'.jpeg?auto=compress&cs=tinysrgb&w=900'} alt={'Portrait for '+f.name} loading="lazy"/></div><div className="profile-meta"><span>{f.sector}</span><span>0{i+1} / 05</span></div><h3>{f.name}</h3><p className="profile-role">{f.role} · {f.venture}</p><p>{f.story}</p><a href="/membership">CONNECT THROUGH THE NETWORK <ArrowUpRight size={17}/></a></article>)}</div></section>}
