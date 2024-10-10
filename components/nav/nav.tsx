import Link from 'next/link'

export default function Nav() {        
  return (        
    <nav className="content-center col-span-12 py-8 h-[10vh] lg:mx-0 mx-5">
      <ul className="grid grid-cols-12 gap-0 text-link">
        <li className="col-span-9">
          <Link className="hover:text-yellow-500 hover:scale-[1.1] duration-300" href="/">
            James_Stahl
          </Link>
        </li>   
        <li className="hidden lg:block hover:scale-[1.1] col-start-10 hover:text-yellow-500 duration-300">
            <Link target="_blank" href="https://docs.google.com/document/d/11QqvF5uukFnvcJaQ9HfyB5CcmnkvYXCkbSRSdUuSYoY/edit?usp=sharing">
              Resume
            </Link>         
        </li>  
        <li className="hidden hover:scale-[1.1] lg:block col-start-11 hover:text-yellow-500 duration-300">
            <Link target="_blank" href="https://github.com/JTQC">
              Github
            </Link >         
        </li>         
      </ul>      
    </nav>
  );
}


