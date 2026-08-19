import { useEffect, useState } from "react";
import { Command } from "cmdk";
const items=[
 {label:"About",action:()=>document.querySelector("#about")?.scrollIntoView({behavior:"smooth"})},
 {label:"Skills",action:()=>document.querySelector("#skills")?.scrollIntoView({behavior:"smooth"})},
 {label:"Projects",action:()=>document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"})},
 {label:"Contact",action:()=>document.querySelector("#contact")?.scrollIntoView({behavior:"smooth"})},
 {label:"GitHub",action:()=>window.open("https://github.com/harshitabisht05","_blank")},
 {label:"LinkedIn",action:()=>window.open("https://www.linkedin.com/in/harshitabisht0511","_blank")},
];
export default function CommandMenu(){const [open,setOpen]=useState(false);useEffect(()=>{const down=e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();setOpen(v=>!v)}if(e.key==="Escape")setOpen(false)};document.addEventListener("keydown",down);return()=>document.removeEventListener("keydown",down)},[]);return <><button onClick={()=>setOpen(true)} className="fixed bottom-6 right-6 z-[9999] hidden items-center gap-2 rounded-2xl border border-white/10 bg-black/50 px-5 py-3 text-sm text-gray-400 backdrop-blur-xl transition-all duration-300 hover:border-blue-400 hover:text-blue-400 md:flex">⌘K</button>{open&&<div onClick={()=>setOpen(false)} className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"/>}<Command.Dialog open={open} onOpenChange={setOpen} label="Command Menu" className="fixed left-1/2 top-1/2 z-[9999] w-[90%] max-w-xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[32px] border border-white/10 bg-[#0a0a0a] shadow-2xl"><Command.Input placeholder="Search sections, projects, or links..." className="w-full border-b border-white/10 bg-transparent px-6 py-5 text-white outline-none placeholder:text-gray-500"/><Command.List className="max-h-[400px] overflow-y-auto p-3">{items.map(item=><Command.Item key={item.label} onSelect={()=>{item.action();setOpen(false)}} className="cursor-pointer rounded-2xl px-5 py-4 text-gray-300 hover:bg-white/5 hover:text-white">{item.label}</Command.Item>)}</Command.List></Command.Dialog></>;}
