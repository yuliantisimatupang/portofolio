'use client'
import Image from 'next/image'
import React from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import SectionHome from './homepage/sectionHome'
import SectionAbout from './homepage/sectionAbout'
import SectionService from './homepage/sectionService'
import SectionContact from './homepage/sectionContact'
import Footer from './layout/footer'
import Header from './layout/header'
import { useInView } from 'react-intersection-observer'

export default function Home() {
  const objectRef = {
    home: React.useRef(null),
    about: React.useRef(null),
    service: React.useRef(null),
    contact: React.useRef(null),
  }

  const objRef = [
    useInView({ threshold: 1 }), // home
    useInView({ threshold: 1 }), // about
    useInView({ threshold: 1 }), // service
    useInView({ threshold: 0.5 }), // contact
  ]

  // const defaultData = { top: 0, height: 0, inView: false }
  // const x = 
  // const boundingClientRect = objRef.map(x =>
  //   x.entry
  //     ? {
  //         top: (x.entry.target as HTMLInputElement | null).offsetTop,
  //         height: (x.entry.target as HTMLInputElement | null).offsetHeight,
  //         inView: x.inView,
  //       }
  //     : defaultData,
  // )

  return (
    <>
      <Header objectRef={objectRef} />
      {/* <main className="lg:ml-24"> */}
      <main className="">
        <div ref={objectRef.home}>
        {/* <div ref={objRef[0].ref}> */}
          <SectionHome />
        </div>

        <div ref={objectRef.about}>
        {/* <div ref={objRef[1].ref}> */}
          <SectionAbout />
        </div>

        <div ref={objectRef.service}>
        {/* <div ref={objRef[2].ref}> */}
          <SectionService />
        </div>

        <div ref={objectRef.contact}>
        {/* <div ref={objRef[3].ref}> */}
          <SectionContact />
        </div>
      </main>
      <Footer />
    </>
  )
}
