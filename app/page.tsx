import { getWork } from "@/sanity/queries/work-query"
import client from "@/sanity/lib/client.js"
import IntroWrapper from '@/components/intro/intro-wrapper';
import WorkNav from "@/components/work/work-nav";
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
