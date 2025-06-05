'use client';

import dynamic from 'next/dynamic';


const Skills = dynamic(() => import("../../components/skills"), {
  ssr: false
});


export default function SkillsPage() {
  return (
    <div className="bg-black h-full w-full">
      <Skills />
    </div>
  );
}
