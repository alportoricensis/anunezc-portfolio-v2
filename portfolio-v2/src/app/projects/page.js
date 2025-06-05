'use client';

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';


const Billboards = dynamic(() => import("../../components/billboards"), {
  ssr: false
});

export default function Projects() {
    const cameraRef = useRef();

    return (
        <div className="bg-black h-full w-full">
            <Billboards camRef={cameraRef}/>
        </div>
    );
}