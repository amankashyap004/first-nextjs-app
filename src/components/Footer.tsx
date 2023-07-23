import React from "react";

const Footer = () => {
   return (
      <footer className="bg-gray-700 p-4">
         <p>© {new Date().getFullYear()} My Next.js App</p>
      </footer>
   );
};

export default Footer;
