import {
  faTwitter,
  faInstagram,
  faFacebook,
  faPinterest,
  faGithub,
  faGoogle,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { LinkWrapped } from '../shared/components'

export default function Footer() {
  return (
    <div className="relative flex flex-col justify-between items-center text-black-primary font-sans bg-primary-1 border-1 border-line-dark min-h-[10vh]">
      <div className="absolute -top-14 p-0.5 bg-line-dark rounded-full border-8 border-primary-2">
        <div className="relative h-24 w-24">
          <Image
            className="rounded-full"
            src={'/images/second-profile.jpg'}
            alt={'profile-yulianti-simatupang'}
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <h2 className="text-base font-medium mt-20 mb-6">Yulianti Simatupang</h2>
      <div className="flex gap-3 mx-auto mb-6">
        <LinkWrapped
          className="bg-btn-primary rounded-md h-8 w-8 flex items-center justify-center cursor-pointer"
          href={'https://www.linkedin.com/in/yu lianti-masta-rotua- simatupang-04a1b917a/'}
          blank
        >
          <FontAwesomeIcon className="h-4 w-4" icon={faLinkedin} />
        </LinkWrapped>
        <LinkWrapped
          className="bg-btn-primary rounded-md h-8 w-8 flex items-center justify-center cursor-pointer"
          href={'https://github.com/yuliantisimatupang'}
          blank
        >
          <FontAwesomeIcon className="h-4 w-4" icon={faGithub} />
        </LinkWrapped>
        <LinkWrapped
          className="bg-btn-primary rounded-md h-8 w-8 flex items-center justify-center cursor-pointer"
          href={'mailto:yuliantisimatupang@gmail.com'}
          blank
        >
          <FontAwesomeIcon className="h-4 w-4" icon={faGoogle} />
        </LinkWrapped>
      </div>
      <p className="mb-14 text-xs font-light">© 2023 copyright all right reserved</p>
    </div>
  )
}
