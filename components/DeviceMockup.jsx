"use client";

import Image from "next/image";
import { Circle } from "lucide-react";

export default function DeviceMockup({
  image,
  title,
}) {
  return (
    <div className="relative rounded-[32px] border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden">

      {/* Browser Bar */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-white/[0.03]">

        <Circle
          size={10}
          className="fill-red-400 text-red-400"
        />

        <Circle
          size={10}
          className="fill-yellow-400 text-yellow-400"
        />

        <Circle
          size={10}
          className="fill-green-400 text-green-400"
        />

        <div className="ml-4 text-xs text-gray-500 truncate">
          {title}
        </div>
      </div>

      {/* Screenshot */}
      <div className="relative overflow-hidden">

        <Image
          src={image}
          alt={title}
          width={1400}
          height={900}
          className="w-full object-cover transition duration-700 hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}