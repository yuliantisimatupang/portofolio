import { faTwitter, faInstagram, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  PhoneIcon,
  Bars3Icon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import React, { useEffect } from 'react'
import useIsVisible from '../shared/hooks/useIsVisible'
import { useInView } from 'react-intersection-observer'

const masterList = ['Banner', 'Form Jual / Beli', 'Aman Dan Bebas Khawatir', 'Promo Menarik']

export default function Header({ objectRef }: any) {
  const [openMenu, setOpenMenu] = React.useState(true)
  const inViewContent = objectRef.map((e: any) => e.inView).lastIndexOf(true)
  const toSection = (section: number) => {
    let top = 0
    for (let i = 0; i < section; i++) {
      top += section !== 0 ? objectRef[i].height : 0
      console.log(top)
    }
    window.scrollTo({
      top: top,
      behavior: 'smooth',
    })
  }

  return (
    <div className="fixed z-20">
      <div className="lg:hidden relative z-50 h-14 w-screen bg-primary-2 text-black-primary font-sans border-b-1 border-line-dark">
        <div className="w-container h-full flex items-center justify-between">
          <span>INI LOGO</span>
          <div onClick={() => setOpenMenu(prev => !prev)} className="bg-btn-primary rounded-lg p-1">
            <Bars3Icon className="h-6 w-6" />
          </div>
        </div>
      </div>
      <div
        className={`${
          openMenu && '-translate-x-24'
        } absolute top-0 lg:translate-x-0 transition-all duration-300 ease-in-out transform-gpu lg:transform-cpu flex flex-col z-50 h-screen w-24 bg-primary-2 border-r-1 border-line-dark text-black-primary font-sans`}
      >
        <div className="border-b-1 border-line-dark text-center py-2 w-full mb-10">INI LOGO</div>
        <div className="flex flex-col gap-10 text-center font-medium text-sm">
          <div onClick={() => toSection(0)} className="cursor-pointer">
            <div
              className={`${
                inViewContent === 0 && 'bg-btn-primary'
              } mb-3 rounded-2xl px-4 py-1 mx-auto w-fit`}
            >
              <HomeIcon className="h-6 w-6" />
            </div>
            Home
          </div>
          <div onClick={() => toSection(1)} className="cursor-pointer">
            <div
              className={`${
                inViewContent === 1 && 'bg-btn-primary'
              } mb-3 rounded-2xl px-4 py-1 mx-auto w-fit`}
            >
              <UserIcon className="h-6 w-6" />
            </div>
            About
          </div>
          <div onClick={() => toSection(2)} className="cursor-pointer">
            <div
              className={`${
                inViewContent === 2 && 'bg-btn-primary'
              } mb-3 rounded-2xl px-4 py-1 mx-auto w-fit`}
            >
              <BriefcaseIcon className="h-6 w-6" />
            </div>
            Service
          </div>
          <div onClick={() => toSection(3)} className="cursor-pointer">
            <div
              className={`${
                inViewContent === 3 && 'bg-btn-primary'
              } mb-3 rounded-2xl px-4 py-1 mx-auto w-fit`}
            >
              <PhoneIcon className="h-6 w-6" />
            </div>
            Contact
          </div>
        </div>
      </div>
    </div>
  )
}
