import Link from 'next/link'

export default function Footer() {        
  return (        
    <footer className="col-span-12 h-[10vh] content-center border-t border-body">
      <nav>
        <ul className="lg:mx-0 mx-5 flex flex-col lg:grid lg:cols-12 gap-0 text-link">
          <li className="col-span-1 mt-5 lg:mt-0">
            <Link target="_blank" href="https://www.linkedin.com/in/james-stahl-ab911636/">
              LinkedIn
            </Link>
          </li>
          <li className="col-start-2 lg:mt-0 mt-2 col-span-1">
            <Link target="_blank" href="https://docs.google.com/document/d/11QqvF5uukFnvcJaQ9HfyB5CcmnkvYXCkbSRSdUuSYoY/edit?usp=sharing">
              Resume
            </Link>
          </li>
          <li className="col-start-3 col-span-1 lg:mt-0 mt-2">
            <Link target="_blank" href="mailto:jstahldev@gmail.com">
              jstahldev@gmail.com
            </Link>
          </li>
          <li className="col-start-4 col-span-1 lg:mt-0 mt-2 mb-5">
            <Link target="_blank" href="https://github.com/JTQC">
              Github
            </Link >
          </li>
          <li className="col-start-12"></li>
        </ul>
      </nav>    
    </footer>
  );
}


