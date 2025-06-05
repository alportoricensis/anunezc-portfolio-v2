'use client';

import dynamic from 'next/dynamic';


const Scene = dynamic(() => import('../components/scene'), {
  ssr: false
});


export default function Home() {
  return (
    <div className="bg-black h-full w-full">
      <Scene />
    </div>
  );
}
