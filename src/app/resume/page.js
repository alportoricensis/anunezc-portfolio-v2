'use client';

import dynamic from 'next/dynamic';


const Terminal = dynamic(() => import("../../components/terminal"), {
  ssr: false
});


export default function Resume() {
  return (
    <div className="bg-black h-full w-full">
      <Terminal />
    </div>
  );
}
