import { faTwitter, faInstagram, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className="relative flex flex-col justify-between items-center text-black-primary font-sans bg-primary-1 border-1 border-line-dark min-h-[10vh]">
      <div className="absolute -top-14 p-0.5 bg-line-dark rounded-full border-8 border-primary-2">
        <div className="relative h-24 w-24">
          <Image
            className="rounded-full"
            src={'/images/home-banner.jpg'}
            alt={'profile-yulianti-simatupang'}
            fill
          />
        </div>
      </div>
      <h2 className="text-base font-medium mt-20 mb-6">Yulianti Simatupang</h2>
      <div className="flex gap-3 mx-auto mb-6">
        <div className="bg-btn-primary rounded-md p-2">
          <FontAwesomeIcon className="h-4 w-4" icon={faTwitter} />
        </div>
        <div className="bg-btn-primary rounded-md p-2">
          <FontAwesomeIcon className="h-4 w-4" icon={faInstagram} />
        </div>
        <div className="bg-btn-primary rounded-md p-2">
          <FontAwesomeIcon className="h-4 w-4" icon={faFacebook} />
        </div>
        <div className="bg-btn-primary rounded-md p-2">
          <FontAwesomeIcon className="h-4 w-4" icon={faPinterest} />
        </div>
      </div>
      <p className="mb-14 text-xs font-light">© 2023 copyright all right reserved</p>
    </div>
  )
}