import { BriefcaseIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Card, CardMedsos, ProgressLine } from '../shared/components'
import { Experience } from '../shared/entities/experience.entity'
import { Medsos } from '../shared/entities/medsos.entity'

export default function Test2() {
  const dataExperience: Experience[] = [
    {
      duration: "2014 - 2017",
      position: "Quality Assurance - Freelance",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      duration: "2017 - 2019",
      position: "Quality Assurance - AnterAja",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      duration: "2019 - Present",
      position: "QA Engineer - AsliRI",
      shortdescription: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  const dataMedsos: Medsos[] = [
    {
      name: "Skype Me",
      image: "Quality Assurance - Freelance",
      href: ''
    },
    {
      name: "Whatsapp Me",
      image: "Quality Assurance - AnterAja",
      href: ''
    },
    {
      name: "Resume",
      image: "QA Engineer - AsliRI",
      href: ''
    }
  ]

  return (
    <section className="font-sans flex flex-col lg:flex-row pt-14 text-black-primary bg-primary-2 min-h-screen h-fit">
      <div className="">
        <div className="w-container">
          <div className="flex gap-3 items-center w-fit mb-8 uppercase">
            <div className="h-2 w-2 bg-btn-primary shadow-lg" />
            <h2>About Me</h2>
          </div>
          <h3 className="mb-3">
            MY NAME IS YULIANTI SIMATUPANG
          </h3>
          <h5 className="font-sans text-2xl font-semibold tracking-wide uppercase mb-4">
            I Am Available For QA Engineer Projects
          </h5>
          <p className="mb-10">
            Born in 2000, AB type living in USA. We provide on-screen design for websites and apps, as well as front-end implementation. We will continue to pursue a wide range of expressions and better code by pursuing our “likes”.
          </p>
          <hr />
        </div>
        <div className="w-container">
          <div className="flex gap-3 items-center w-fit mt-5 mb-8 uppercase">
            <div className="h-2 w-2 bg-btn-primary shadow-lg" />
            <h2>Experience</h2>
          </div>
          <div className="pb-10">
            {
              dataExperience.map(data => {
                return (
                  <Card key={data.duration} data={data} />
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="w-container bg-[#444] sticky top-0 h-fit">
        <div className="relative aspect-square rounded-xl overflow-hidden mb-12">
          <Image
            src={'/images/about-banner.jpg'}
            fill
            alt={""}
            style={{ objectFit: "cover" }}
          />
        </div>
        {
          dataMedsos.map(data => {
            return (
              <CardMedsos key={data.name} data={data} />
            )
          })
        }
      </div>
      {/* <div className="w-container pb-10">
        <div className="flex gap-3 items-center w-fit mt-5 mb-8 uppercase">
          <div className="h-2 w-2 bg-btn-primary shadow-lg" />
          <h2>Skills</h2>
        </div>
        <div className="">
          <ProgressLine title={'HTML 5'} progress={'60%'} width='w-[60%]' />
          <ProgressLine title={'HTML 5'} progress={'60%'} width='w-[60%]' />
          <ProgressLine title={'HTML 5'} progress={'60%'} width='w-[60%]' />
          <ProgressLine title={'HTML 5'} progress={'60%'} width='w-[60%]' />
        </div>
      </div> */}
    </section>
  )
}