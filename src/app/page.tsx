'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import SectionHome from './homepage/sectionHome'
import SectionAbout from './homepage/sectionAbout'
import SectionService from './homepage/sectionService'
import SectionContact from './homepage/sectionContact'
import Footer from './layout/footer'
import Header from './layout/header'
import { InView, InViewHookResponse, useInView } from 'react-intersection-observer'

export default function Home() {
  // const objectRef = {
  //   home: React.useRef(null),
  //   about: React.useRef(null),
  //   service: React.useRef(null),
  //   contact: React.useRef(null),
  // }

  const objRef = [
    useInView({ threshold: 0 }), // home
    useInView({ threshold: 0.2 }), // about
    useInView({ threshold: 0.5 }), // service
    useInView({ threshold: 0.5 }), // contact
  ]

  const defaultData = { top: 0, height: 0, inView: false }
  const boundingClientRect = objRef.map(x =>
    x.entry
      ? {
          top: (x.entry.target as HTMLInputElement).offsetTop,
          height: (x.entry.target as HTMLInputElement).offsetHeight,
          inView: x.inView,
        }
      : defaultData,
  )

  // const [isView, setIsView] = useState([false, false, false, false])

  // function onScrollRef(val: number, res: boolean) {
  //   console.log(val, res)
  //   setIsView(r => r.map((x, i) => i === val && res))
  // }
  // const { ref: homeRef, inView: viewHome, entry } = useInView({ threshold: 0 })
  // const { ref: aboutRef, inView: viewAbout } = useInView({ threshold: 0 })
  // const { ref: serviceRef, inView: viewService } = useInView({ threshold: 0 })
  // const { ref: contactRef, inView: viewContact } = useInView({ threshold: 0 })

  // useEffect(() => {
  //   console.log('T2', viewHome)
  // }, [viewHome])

  return (
    <>
      <Header objectRef={boundingClientRect} />
      <main className="">
        <div ref={objRef[0].ref}>
          <SectionHome />
        </div>

        <div ref={objRef[1].ref}>
          <SectionAbout />
        </div>

        <div ref={objRef[2].ref}>
          <SectionService />
        </div>

        <div ref={objRef[3].ref}>
          <SectionContact />
        </div>
      </main>
      <Footer />
    </>
  )
}
