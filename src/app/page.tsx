import Image from "next/image";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import SectionHome from "./homepage/sectionHome";
import SectionAbout from "./homepage/sectionAbout";
import SectionService from "./homepage/sectionService";
import SectionContact from "./homepage/sectionContact";
import Footer from "./layout/footer";
import Header from "./layout/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="lg:ml-24">
        <SectionHome />

        <SectionAbout />

        <SectionService />

        <SectionContact />
      </main>
      <Footer />
    </>
  );
}
