'use client';

import dynamic from 'next/dynamic';


const Plaza = dynamic(() => import('../../components/plaza'), {
  ssr: false
});


export default function Home() {
  return (
    <div className="bg-black h-full w-full">
      <Plaza />
    </div>
  );
}
