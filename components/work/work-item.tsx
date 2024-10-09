import React from 'react';
import { PortableTextBlock } from "sanity";
import { WorkType } from '@/types/work-type';
import Link from 'next/link'


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
    <li className="text-2xl my-5 pb-1 border-b border-link text-link" onClick={onClick}>      
      {headline}      
    </li>
    </>    
  );
};

export default WorkItem;
