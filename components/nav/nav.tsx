import Link from 'next/link'

export default function Nav() {        
  return (        
    <nav className="content-center col-span-12 py-8 h-[10vh] lg:mx-0 mx-5">
      <ul className="grid grid-cols-12 gap-0 text-link">
        <li className="col-span-9">
          <Link href="/">
            James_Stahl
          </Link>
        </li>
        <li className="hidden lg:block col-start-10">
          <Link href="/work">
            Work
          </Link>
        </li> 
        <li className="hidden lg:block col-start-11">
            <Link target="_blank" href="https://docs.google.com/document/d/11QqvF5uukFnvcJaQ9HfyB5CcmnkvYXCkbSRSdUuSYoY/edit?usp=sharing">
              Resume
            </Link>         
        </li>  
        <li className="hidden lg:block col-start-12">
            <Link target="_blank" href="https://github.com/JTQC">
              Github
            </Link >         
        </li>         
      </ul>      
    </nav>
  );
}


