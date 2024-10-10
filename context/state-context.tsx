"use client";

import React, { createContext, useContext, useState } from 'react';
import { PortableTextBlock } from "sanity";
import { ImageType } from '@/types/image-type';

// Define the shape of your context state
interface State {
  headline: string;
  image: ImageType;
  overlay: ImageType;
  content: PortableTextBlock[];
  siteUrl: string;
  isClicked: boolean;
}

// Create a context with a default value
const StateContext = createContext<{
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
} | undefined>(undefined);

// Create a provider component
export const StateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const defaultContent: PortableTextBlock[] = [
    {
      _key: 'unique-key-1',
      _type: 'block',
      children: [
        {
          _key: 'span-1',
          _type: 'span',
          text: "I’m a Full Stack Developer based in Dallas, TX. With a strong background in web development and a keen focus on enhancing user experience and SEO performance, I’ve conducted audits on multiple brand sites, implementing strategic fixes that have led to impressive traffic increases of up to 170%. I'm proficient in both traditional WordPress development and modern frameworks like React and Next.js, I excel in migrating sites to headless CMS solutions. I'm passionate about creating efficient and user-friendly web applications."
        }
      ],
      markDefs: [],
      style: 'normal', // You can specify the style of the block here
    }
  ];

  const [state, setState] = useState<State>({
    headline: `I'm James Stahl`,
    image: { src: '', alt: '' },  // Default value as an empty ImageType object
    overlay: { src: '', alt: '' },  // Default value as an empty ImageType object
    content: defaultContent, 
    siteUrl: 'Empty',
    isClicked: false,
  });

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the context
export const useStateContext = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateContext must be used within a StateProvider");
  }
  return context;
};