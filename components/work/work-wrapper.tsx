
'use client'


import React, { useState } from 'react';
import { useStateContext } from '@/context/state-context';

export default function WorkWrapper() {      
  
  const { state } = useStateContext(); 
  
  return (        
    <div className="lg:mx-0 mx-5 lg:content-center col-span-12 mt-10 lg:mt-0 lg:col-span-9 lg:h-[80vh] ">
      <h1 className="lg:content-center text-5xl lg:text-7xl lg:leading-[100px]  lg:w-[50%] text-body font-sans">{state.headline}</h1>      
    </div>
  );
}


