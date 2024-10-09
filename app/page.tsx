import Image from "next/image";
import { getWork } from "@/sanity/queries/work-query"
import client from "@/sanity/lib/client.js"
import Link from 'next/link'
import IntroWrapper from '@/components/intro/intro-wrapper';
import WorkWrapper from "@/components/work/work-wrapper";

export default async function Home() {

  const work = await client.fetch(getWork);

  return (  

    <>
      <IntroWrapper />
    </>
  );
}
