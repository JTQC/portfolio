import Image from "next/image";
import { getWork } from "@/sanity/queries/work-query"
import client from "@/sanity/lib/client.js"
import Link from 'next/link'
import IntroWrapper from '@/components/intro/intro-wrapper';
import WorkNav from "@/components/work/work-nav";
import { WorkType } from "@/types/work-type";
import { StateProvider } from "@/context/state-context";

export default async function Home() {

  const work = await client.fetch(getWork);
  
  return (  
    
    <StateProvider>
      <IntroWrapper />
      <WorkNav 
      work={work}
      />
    </StateProvider>
  );
}
