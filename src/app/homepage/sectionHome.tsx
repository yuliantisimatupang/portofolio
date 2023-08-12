import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import Typed from 'typed.js'
import React from 'react'

export default function SectionHome() {
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['QA Engineer'],
      typeSpeed: 80,
      backSpeed: 60,
      startDelay: 700,
      loop: true,
    })
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className="font-sans text-center py-20 text-black-primary bg-primary-1 min-h-screen overflow-hidden lg:flex">
      <div className="w-container lg:flex lg:flex-row-reverse lg:items-center lg:gap-10 2xl:gap-20">
        <div className="lg:text-left">
          <div className="text-lg mb-2">👋 Hi, I’ m</div>
          <h1 className="my-3">Yulianti Simatupang</h1>
          {/* <h2>I'm QA Engineer</h2> */}
          <h2>
            I'm <span ref={el}></span>
          </h2>
          <p className="py-5">
            I am a QA Engineer with experience in Manual and automation testing with great attention
            to detail and ready to learn new things to upgrade knowledge and always open for great
            opportunities in the future
          </p>
          {/* <a
            href="/cv-Yulianti-Simatupang.pdf"
            download="cv-Yulianti-Simatupang"
            target="_blank"
            rel="noreferrer"
          >
            <button
              type="button"
              className="flex justify-between mx-auto lg:mx-0 items-center gap-3 font-sans font-medium tracking-wide bg-btn-primary px-6 py-4 rounded-xl"
            >
              Download cv
              <ArrowDownTrayIcon className="h-5 w-5" />
            </button>
          </a> */}
          <button
            type="button"
            className="flex justify-between mx-auto lg:mx-0 items-center gap-3 font-sans font-medium tracking-wide bg-btn-primary px-6 py-4 rounded-xl"
          >
            Download cv
            <ArrowDownTrayIcon className="h-5 w-5" />
          </button>
        </div>
        <div className="relative my-10 max-w-md mx-auto lg:w-3/4">
          <div className="absolute -top-7 -right-10 z-10 h-20 w-20 inline-block">
            <Image src={'/images/flower.svg'} fill alt={''} style={{ objectFit: 'cover' }} />
          </div>
          <div className="absolute -bottom-7 -left-10 z-10 h-20 w-20 inline-block">
            <Image src={'/images/flower.svg'} fill alt={''} style={{ objectFit: 'cover' }} />
          </div>
          {/* <div className="relative h-96 w-full rounded-[3rem] overflow-hidden lg:h-[30rem] 3xl:h-[40rem]"> */}
          {/* <div className="relative w-full img-main-profile overflow-hidden rounded-[3rem]"> */}
          <div className="bg-[#a1a1da] flex items-center justify-center h-full w-full rounded-3xl overflow-hidden">
            <Image
              src={'/images/main-profile.jpg'}
              alt={''}
              style={{ objectFit: 'contain' }}
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
