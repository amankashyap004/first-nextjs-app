import Image from "next/image";

import Header from "@/components/Header";
import Content from "@/components/Content";
import Footer from "@/components/Footer";

export default function Home() {
   return (
      <main>
         <Header />
         <Content />
         <Footer />
      </main>
   );
}
