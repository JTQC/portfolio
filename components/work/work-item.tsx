import React from 'react';
import { PortableTextBlock } from "sanity";


interface WorkItemProps {
  headline: string;
  image: string;
  overlay: string;
  content: PortableTextBlock[];
  siteUrl: string;
  onClick: () => void;  // Add onClick prop to trigger state update
}

const WorkItem: React.FC<WorkItemProps> = ({ headline, image, overlay, content, siteUrl, onClick }) => {  
  return (  
    <>
    <li className="hover:text-yellow-500 duration-300 text-2xl my-5 pb-1 border-b border-link text-link cursor-pointer animate__animated animate__fadeInDown" onClick={onClick}>      
      {headline}      
    </li>
    </>    
  );
};

export default WorkItem;
