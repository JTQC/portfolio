import Image from "next/image";
import React, { useState } from 'react';
import { getWork } from "@/sanity/queries/work-query"
import client from "@/sanity/lib/client.js"
import Link from 'next/link'
import WorkWrapper from '@/components/work/work-wrapper'

export default async function Work() {

  // const [state, setState] = useState({
  //   name: 'Empty',
  //   image: 'Empty',
  //   title: 'Empty',
  //   id: 'Empty',
  //   content: 'Empty',
  //   isClicked: false,
  //   index: 0,
  // });

  // const changeState = (newValue: any) => {
  //   setState({
  //     name: newValue.name,
  //     image: newValue.image,
  //     title: newValue.title,
  //     id: newValue.id,
  //     content: newValue.content,
  //     isClicked: newValue.isClicked,
  //     index: newValue.index,
  //   });
  // };

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
