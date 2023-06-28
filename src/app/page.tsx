"use client"
import Image from "next/image";
import React from "react";
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import SectionHome from "./homepage/sectionHome";
import SectionAbout from "./homepage/sectionAbout";
import SectionService from "./homepage/sectionService";
import SectionContact from "./homepage/sectionContact";
import Footer from "./layout/footer";
import Header from "./layout/header";

export default function Home() {
  const objectRef = {
    home: React.useRef(null),
    about: React.useRef(null),
    service: React.useRef(null),
    contact: React.useRef(null),
  }

  return (
    <>
      <Header objectRef={objectRef} />
      {/* <main className="lg:ml-24"> */}
      <main className="">
        <div ref={objectRef.home}>
          <SectionHome />
        </div>

        <div ref={objectRef.about}>
          <SectionAbout />
        </div>

        <div ref={objectRef.service}>
          <SectionService />
        </div>

        <div ref={objectRef.contact}>
          <SectionContact />
        </div>
      </main>
      <Footer />
    </>
  );
}
