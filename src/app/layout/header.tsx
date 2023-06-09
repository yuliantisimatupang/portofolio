import { faTwitter, faInstagram, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HomeIcon, UserIcon, BriefcaseIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="fixed flex flex-col z-50 h-screen w-24 bg-primary-2 border-r-1 border-line-dark text-black-primary font-sans">
      <div className="border-b-1 border-line-dark text-center py-2 w-full mb-10">
        INI LOGO
      </div>
      <div className="flex flex-col gap-10 text-center font-medium text-sm">
        <div className="">
          <div className="bg-btn-primary mb-3 rounded-2xl px-4 py-1 mx-auto w-fit">
            <HomeIcon className="h-6 w-6" />
          </div>
          Home
        </div>
        <div className="">
          <div className="bg-btn-primary mb-3 rounded-2xl px-4 py-1 mx-auto w-fit">
            <UserIcon className="h-6 w-6" />
          </div>
          About
        </div>
        <div className="">
          <div className="bg-btn-primary mb-3 rounded-2xl px-4 py-1 mx-auto w-fit">
            <BriefcaseIcon className="h-6 w-6" />
          </div>
          Service
        </div>
        <div className="">
          <div className="bg-btn-primary mb-3 rounded-2xl px-4 py-1 mx-auto w-fit">
            <PhoneIcon className="h-6 w-6" />
          </div>
          Contact
        </div>
      </div>
    </div>
  )
}