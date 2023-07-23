import React from "react";
import Link from "next/link";

const Header = () => {
   return (
      <header className="bg-slate-700 p-4 text-white">
         <nav className="flex justify-between items-center">
            <div className="flex items-center">
               <h1 className="text-xl font-bold">My Next.js App</h1>
            </div>
            <ul className="flex space-x-4">
               <li>
                  <Link href="/">Home</Link>
               </li>
               <li>
                  <Link href="/blog">Blog</Link>
               </li>
               <li>About</li>
               <li>Contact</li>
            </ul>
         </nav>
      </header>
   );
};

export default Header;
