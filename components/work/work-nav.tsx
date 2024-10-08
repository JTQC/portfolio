import Link from 'next/link'

export default function WorkNav(work: any) {        
  return (        
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
  );
}


