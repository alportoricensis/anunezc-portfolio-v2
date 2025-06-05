'use client';

import dynamic from 'next/dynamic';


const About = dynamic(() => import('../../components/about'), {
  ssr: false
});


export default function Home() {
  return (
    <div className="bg-black h-full w-full">
      <About />
    </div>
  );
}
