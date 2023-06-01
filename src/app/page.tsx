import Image from "next/image";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import SectionHome from "./homepage/sectionHome";
import SectionAbout from "./homepage/sectionAbout";

export default function Home() {
  return (
    <main>
      <SectionHome />

      <SectionAbout />
    </main>
  );
}
