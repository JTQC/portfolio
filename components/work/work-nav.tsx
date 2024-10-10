'use client'

import Link from 'next/link'
import { PortableTextBlock } from "sanity"
import React, { useState } from 'react';
import client from "@/sanity/lib/client.js"
import WorkItem from './work-item';
import { WorkType } from '@/types/work-type';
import { useStateContext } from '@/context/state-context';

export default function WorkNav({ work }: { work: WorkType[] })  {        

  const { setState } = useStateContext(); 
  
  const handleWorkItemClick = (job: WorkType) => {
    setState({
      headline: job.headline,
      image: job.image,
      overlay: job.overlay,
      content: job.content,
      siteUrl: job.siteUrl,
      isClicked: true,
    });
  };  


  return (        
    <div className="lg:mx-0 mx-5 lg:py-10 lg:col-span-3 w-full lg:col-start-10 lg:h-[80vh] font-sans">
      <h2 className="text-link text-5xl mt-10 lg:mt-0 lg:text-3xl lg:leading-[100px]">
        Projects
      </h2>
      <ul>
        {work.map((job: WorkType, index: number ) =>{
          return(            
            <WorkItem
            key={index}
            headline={job.headline}             
            image={job.image}
            overlay={job.overlay}            
            content={job.content}            
            siteUrl={job.siteUrl}
            onClick={() => handleWorkItemClick(job)}
            />            
          )
        })}                
      </ul>      
    </div>
  );
}


