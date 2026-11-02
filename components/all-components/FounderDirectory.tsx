"use client";
import React, {useState} from 'react';
import Link from 'next/link';
import {ArrowLeft,ArrowRight} from 'lucide-react';
import {cn} from '@/lib/utils';
const portraits = [
  {id:'29995646', label:'Founder 01'},
  {id:'30479371', label:'Founder 02'},
  {id:'31833805', label:'Founder 03'},
  {id:'4797690', label:'Founder 04'},
  {id:'31880922', label:'Founder 05'},
];
interface Props {className?:string}
export default function FounderDirectory({className}:Props){
 const [active,setActive]=useState(2);
 const move=(direction:number)=>setActive((v)=>(v+direction+portraits.length)%portraits.length);
 return <section className={cn('founder-showcase',className)} id="founder-directory" aria-label="Alumni founder portrait gallery">
  <div className="founder-showcase-head"><span>OUR COMMUNITY / FOUNDERS</span><h2>Meet the minds behind the ventures.</h2><p>Discover the people and perspectives shaping our founder network.</p></div>
  <div className="founder-showcase-track">{portraits.map((f,i)=>{
   const offset=(i-active+portraits.length)%portraits.length;
   const dist=offset>2?offset-5:offset;
   return <button key={f.id} type="button" onClick={()=>setActive(i)} className={'founder-slide '+(dist===0?'is-active':'')} style={{order:(i-active+portraits.length)%portraits.length}} aria-label={'View portrait '+(i+1)} aria-pressed={dist===0}>
    <div className="founder-slide-image"><img src={'https://images.pexels.com/photos/'+f.id+'/pexels-photo-'+f.id+'.jpeg?auto=compress&cs=tinysrgb&w=700'} alt={'Founder portrait '+(i+1)} loading="lazy"/></div>
    <span className="founder-slide-label">{f.label}</span>
   </button>})}</div>
  <div className="founder-showcase-footer"><span className="founder-showcase-progress"><span style={{width:((active+1)/portraits.length*100)+'%'}}/></span><div className="founder-showcase-controls"><button type="button" onClick={()=>move(-1)} aria-label="Previous founder"><ArrowLeft size={18}/></button><button type="button" onClick={()=>move(1)} aria-label="Next founder"><ArrowRight size={18}/></button></div></div>
  <Link className="founder-showcase-link" href="/founders">EXPLORE OUR FOUNDERS <ArrowRight size={17}/></Link>
 </section>
}
