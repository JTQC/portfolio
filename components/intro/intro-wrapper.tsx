'use client'


import React, { useState } from 'react';
import { useStateContext } from '@/context/state-context';
import { PortableText } from '@portabletext/react';
import 'animate.css';


export default function IntroWrapper() {        

  const { state } = useStateContext();  
  
  console.log('This is image data', state.image);

  return (        
    <>
      {!state.isClicked && (
        <div className="lg:mx-0 mx-5 lg:content-center col-span-12 mt-10 lg:mt-0 lg:col-span-9 lg:h-[80vh">
          <h1 className="lg:content-center text-5xl lg:text-7xl lg:leading-[100px]  lg:w-[50%] text-body font-sans">{state.headline}</h1>          
          <div>
            <div className={`lg:w-[70%] w-full leading-7 mt-5 text-xl text-body font-sans`}>
              <PortableText 
              value={state.content}
              />      
            </div>
          </div>      
        </div>
      )}

      {state.isClicked && (
        <>
          <div className="lg:mx-0 mx-5 lg:content-center col-span-12 mt-10 lg:mt-0 lg:col-span-9 lg:h-[80vh">
            <div className="lg:w-[75%] lg:h-[75%] relative grid grid-cols-4 gap-2">
                <div className="lg:col-span-2 col-span-4">
                  <a href={state.siteUrl}>
                    <img
                      className="hover:scale-[1.1] duration-700 object-cover lg:w-[500px] lg:h-[500px]"
                      src={state.image.src}            
                    />              
                  </a>                  
                </div>
                <div className="lg:col-span-2 col-span-4 content-center lg:pl-10">
                  <h1 className="hover:scale-[1.1] duration-300 text-3xl lg:text-5xl text-body font-sans text-link">
                    <a href={state.siteUrl}>
                      {state.headline}
                    </a>
                  </h1>          
                  <div className={`w-full leading-7 mt-5 text-xl text-body font-sans list-disc`}>
                    <PortableText 
                    value={state.content}
                    />      
                  </div>
                </div>                
            </div>          
          </div>          
        </>
      )}      

    </>
  );
}


