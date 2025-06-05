'use client';

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';


const Contacts = dynamic(() => import("../../components/contact"), {
  ssr: false
});


export default function Contact() {
    return (
        <div className="bg-black h-full w-full">
            <Contacts/>
        </div>
    );
}