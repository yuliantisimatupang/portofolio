import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/24/solid'

export default function SectionHome() {
  return (
    <section className="font-sans text-center py-20 text-black-primary bg-primary-1 min-h-screen overflow-hidden lg:flex">
      <div className="w-container lg:flex lg:flex-row-reverse lg:items-center lg:gap-10">
        <div className="lg:text-left">
          <div className="text-lg mb-2">👋 Hi, I’ m</div>
          <h1 className="my-3">Yulianti Simatupang</h1>
          <h2>I'm QA Engineer</h2>
          <p className="py-5">
            I am a QA Engineer with experience in Manual and automation testing with great attention
            to detail and ready to learn new things to upgrade knowledge and always open for great
            opportunities in the future
          </p>
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
          <div className="relative h-96 w-full rounded-[3rem] overflow-hidden lg:h-[30rem] 3xl:h-[40rem]">
            <Image src={'/images/main-profile.jpg'} fill alt={''} style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
