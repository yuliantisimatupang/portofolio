import { ChatBubbleLeftEllipsisIcon, MapIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Card, CardMedsos, ProgressLine } from '../shared/components'
import { Experience } from '../shared/entities/experience.entity'
import { Medsos } from '../shared/entities/medsos.entity'

export default function SectionContact() {
  const dataExperience: Experience[] = [
    {
      duration: "2014 - 2017",
      position: "Quality Assurance - Freelance",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      duration: "2017 - 2019",
      position: "Quality Assurance - AnterAja",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      duration: "2019 - Present",
      position: "QA Engineer - AsliRI",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  return (
    <section className="font-sans flex flex-col pt-14 text-black-primary bg-primary-2 min-h-screen h-fit overflow-hidden">
      <div className="w-container">
        <h2 className="text-2xl mb-8">Let's Discuss Your Project</h2>
        <div className="flex items-center gap-5 mb-10">
          <div className="bg-black-primary h-14 w-14 flex items-center rounded-full p-3">
            <ChatBubbleLeftEllipsisIcon className='h-8 w-8 text-primary-2' />
          </div>
          <div className="">
            <h3 className="text-lg font-medium">Chat to us</h3>
            <p>Our friendly team is there to help.</p>
            <h5 className="font-medium">ehehe@doamin.com</h5>
          </div>
        </div>

        <div className="flex items-center gap-5 mb-10">
          <div className="bg-black-primary h-14 w-14 flex items-center rounded-full p-3">
            <MapIcon className='h-8 w-8 text-primary-2' />
          </div>
          <div className="">
            <h3 className="text-lg font-medium">Visit us</h3>
            <p>Come say hello at our office HQ.</p>
            <h5 className="font-medium">Jakarta, DKI Jakarta</h5>
          </div>
        </div>

        <div className="flex items-center gap-5 mb-10">
          <div className="bg-black-primary h-14 w-14 flex items-center rounded-full p-3">
            <DevicePhoneMobileIcon className='h-8 w-8 text-primary-2' />
          </div>
          <div className="">
            <h3 className="text-lg font-medium">Call us</h3>
            <p>Mon-Fri from 8am to 5pm.</p>
            <h5 className="font-medium">+62 81123321236</h5>
          </div>
        </div>

        <div className="p-4 mb-32 w-full lg:max-w-xs bg-primary-1 rounded-xl border-2 border-line-dark">
          <h2 className="mb-5">
            Got Ideas? We've got the skills. Let's team up.
          </h2>
          <h3 className="font-normal mb-10">Tell us more about yourself and what you're got in mind.</h3>
          <div className="flex flex-col mb-6">
            <label>First Name</label>
            <input type="text" placeholder="Name *" />
          </div>
          <div className="flex flex-col mb-6">
            <label>Your Email</label>
            <input type="text" placeholder="Email *" />
          </div>
          <div className="flex flex-col mb-6">
            <label>Subject</label>
            <input type="text" placeholder="Subject *" />
          </div>
          <div className="flex flex-col mb-6">
            <label>Your Message</label>
            <textarea rows={3} placeholder="Your Message *" />
          </div>
          <button type="button" className="w-full font-sans font-medium tracking-wide bg-btn-primary px-6 py-4 rounded-xl">
            Send Message
          </button>
        </div>
      </div>
    </section>
  )
}