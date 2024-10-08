import Image from "next/image";
import React, { useState } from 'react';
import { getWork } from "@/sanity/queries/work-query"
import client from "@/sanity/lib/client.js"
import Link from 'next/link'
import AboutWrapper from "@/components/about/about-wrapper";

export default async function About() {

  const work = await client.fetch(getWork);

  return (  
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 font-mono h-[100vh]">
    
    {/* Nav */}
    <nav className="content-center col-span-12 py-8 h-[10vh] lg:mx-0 mx-5">
      <ul className="grid grid-cols-12 gap-0 text-link">
        <li className="col-span-9">
          <Link href="/">
            James_Stahl
          </Link>
        </li>
        <li className="hidden lg:block col-start-10">
          <Link href="/work">
            Work
          </Link>
        </li> 
        <li className="hidden lg:block col-start-11">
          <Link href="/about">
            About
          </Link>          
        </li>  
        <li className="hidden lg:block col-start-12">
          <Link href="/contact">
            Contact
          </Link>          
        </li>         
      </ul>      
    </nav>
    

    {/* Body Container */}
    <div className="lg:mx-0 mx-5 lg:content-center col-span-12 mt-10 lg:mt-0 lg:col-span-9 lg:h-[80vh] ">
      <AboutWrapper />
    </div>

    {/* Project Nav */}
    <div className="lg:mx-0 mx-5 lg:py-10 lg:col-span-3 w-full lg:col-start-10 lg:h-[80vh] font-sans">
      <h2 className="text-link text-5xl mt-10 lg:mt-0 lg:text-3xl leading-[100px]">
        Projects
      </h2>
      <ul>
        {work.map((job: any ) =>{
          return(
            <li className="text-2xl my-5 pb-1 border-b border-link text-link">
              {job.headline}
            </li>
          )
        })}                
      </ul>
    </div>
    
    {/* Footer */}
    <footer className="col-span-12 h-[10vh] content-center border-t border-body">
      <nav>
        <ul className="lg:mx-0 mx-5 flex flex-col lg:grid lg:cols-12 gap-0 text-link">
          <li className="col-span-1 mt-5 lg:mt-0">
            <Link target="_blank" href="https://www.linkedin.com/in/james-stahl-ab911636/">
              LinkedIn
            </Link>
          </li>
          <li className="col-start-2 lg:mt-0 mt-2 col-span-1">
            <Link target="_blank" href="https://docs.google.com/document/d/11QqvF5uukFnvcJaQ9HfyB5CcmnkvYXCkbSRSdUuSYoY/edit?usp=sharing">
              Resume
            </Link>
          </li>
          <li className="col-start-3 col-span-1 lg:mt-0 mt-2">
            <Link target="_blank" href="mailto:jstahldev@gmail.com">
              jstahldev@gmail.com
            </Link>
          </li>
          <li className="col-start-4 col-span-1 lg:mt-0 mt-2 mb-5">
            <Link target="_blank" href="https://github.com/JTQC">
              Github
            </Link>
          </li>
          <li className="col-start-12"></li>
        </ul>
      </nav>    
    </footer>        
  </div>    
  );
}
