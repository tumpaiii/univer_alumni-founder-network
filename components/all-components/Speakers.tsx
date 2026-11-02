"use client";
import {cn} from "@/lib/utils";
// @ts-nocheck — JSX source preserved during framework migration.
import React from 'react';import Link from 'next/link';import {ArrowUpRight} from 'lucide-react';
const images=['29995646','30479371','31833805','4797690'];
interface SpeakersProps { className?: string; }
export default function Speakers({className}:SpeakersProps){return <section className={cn("speakers-section",className)}><div className="speakers-heading"><span>ALUMNI VOICES</span><h2>People worth connecting with.</h2><p>Explore the faces of an entrepreneurial community. Portraits are </p></div><div className="speakers-grid">{images.map((id,i)=><Link key={id} href="/founders" className="speaker-card"><div className="speaker-image"><img loading="lazy" src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800`} alt={`Founder portrait ${i+1}`}/></div><div className="speaker-caption"><span>FOUNDER PROFILE 0{i+1}</span><ArrowUpRight size={18}/></div></Link>)}</div></section>}
