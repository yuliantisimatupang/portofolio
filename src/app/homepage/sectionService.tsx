import { BriefcaseIcon, DeviceTabletIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Card, CardMedsos, ProgressLine } from '../shared/components'
import { Experience } from '../shared/entities/experience.entity'
import { Medsos } from '../shared/entities/medsos.entity'

export default function SectionService() {
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
    <section className="font-sans flex flex-col pt-14 pb-10 text-black-primary bg-primary-1 h-fit overflow-hidden">
      <div className="w-container">
        <div className="w-fit mb-8 uppercase">
          <h2 className="text-2xl font-semibold">My Service</h2>
          <div className="h-1 mt-2 w-1/2 bg-btn-primary"></div>
        </div>
        {/* <div className="lg:flex lg:flex-wrap lg:gap-5"> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {
            dataExperience.map(data => {
              return (
                <div key={data.position} className="p-6 mb-5 w-full bg-primary-2 rounded-xl border-2 border-line-dark">
                  <div className="relative w-fit h-fit p-3 py-4 mt-2">
                    <div className="absolute rounded-lg top-0 left-0 origin-bottom-right rotate-12 h-full w-full bg-[#e9e7d3]"></div>
                    <div className="absolute rounded-lg top-0 left-0 h-full w-full bg-btn-primary"></div>
                    <DeviceTabletIcon className='relative text-black-primary h-12 w-12 z-10' />
                  </div>
                  <div className="mt-8">
                    <h5 className="mb-2 font-semibold text-lg">{data.position}</h5>
                    <p className="text-sm">
                      {data.description}
                    </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}