import Image from "next/image";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import SectionHome from "./homepage/sectionHome";
import SectionAbout from "./homepage/sectionAbout";
import SectionService from "./homepage/sectionService";
import SectionContact from "./homepage/sectionContact";
import Footer from "./layout/footer";

export default function Home() {
  return (
    <main>
      <SectionHome />

      <SectionAbout />

      <SectionService />

      <SectionContact />
    </main>
  );
}
