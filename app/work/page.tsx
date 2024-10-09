import Image from "next/image";
import React, { useState } from 'react';
import { getWork } from "@/sanity/queries/work-query"
import client from "@/sanity/lib/client.js"
import Link from 'next/link'
import WorkWrapper from '@/components/work/work-wrapper'

export default async function Work() {


  const work = await client.fetch(getWork);

  return (  
  <>
    {/* Body Container */}
    <div className="lg:mx-0 mx-5 lg:content-center col-span-12 mt-10 lg:mt-0 lg:col-span-9 lg:h-[80vh] ">
      <WorkWrapper />
    </div>

</>    
  );
}
