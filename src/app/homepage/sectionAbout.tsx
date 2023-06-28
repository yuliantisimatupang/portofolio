import { BriefcaseIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Card, CardMedsos, ProgressLine } from '../shared/components'
import { Experience } from '../shared/entities/experience.entity'
import { Medsos } from '../shared/entities/medsos.entity'

export default function SectionAbout() {
  const dataExperience: Experience[] = [
    {
      duration: "2023 - Present",
      position: "Quality Engineer - PT ASLI RI",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      duration: "2021 - 2023",
      position: "Quality Engineer - Anteraja",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      duration: "2019 - 2021",
      position: "QA Engineer Internship - PT Javan Cipta Solusi",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      duration: "2021 - 2021",
      position: "QA Internship - CV. KomParTo",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]

  const dataMedsos: Medsos[] = [
    {
      name: "Skype Me",
      image: "Quality Assurance - Freelance",
    },
    {
      name: "Whatsapp Me",
      image: "Quality Assurance - AnterAja",
    },
    {
      name: "Resume",
      image: "QA Engineer - AsliRI",
    },
    {
      name: "Resume",
      image: "QA Engineer - AsliRI",
    }
  ]

  return (
    // <section className="font-sans flex flex-col pt-14 lg:pt-20 text-black-primary bg-primary-2 h-fit">
    //   <div className="w-container">
    //     <div className="lg:flex">
    //       <div className="">
    //         <div className="w-container">
    //           <div className="flex gap-3 items-center w-fit mb-8 uppercase">
    //             <div className="h-2 w-2 bg-btn-primary shadow-lg" />
    //             <h2>About Me</h2>
    //           </div>
    //           <h3 className="mb-3">
    //             MY NAME IS YULIANTI SIMATUPANG
    //           </h3>
    //           <h5 className="font-sans text-2xl font-semibold tracking-wide uppercase mb-4">
    //             I Am Available For QA Engineer Projects
    //           </h5>
    //           <p className="mb-10 break-all">
    //             Born in 2000, AB type living in USA. We provide on-screen design for websites and apps, as well as front-end implementation. We will continue to pursue a wide range of expressions and better code by pursuing our “likes”.
    //           </p>
    //           <hr />
    //         </div>
    //         <div className="w-container">
    //           <div className="flex gap-3 items-center w-fit mt-5 mb-8 uppercase">
    //             <div className="h-2 w-2 bg-btn-primary shadow-lg" />
    //             <h2>Experience</h2>
    //           </div>
    //           <div className="pb-10">
    //             {
    //               dataExperience.map(data => {
    //                 return (
    //                   <Card key={data.duration} data={data} />
    //                 )
    //               })
    //             }
    //           </div>
    //         </div>
    //       </div>
    //       <div className="sticky top-0 lg:h-fit lg:flex lg:flex-wrap lg:gap-5">
    //         <div className="w-1/2">
    //           <div className="relative aspect-square rounded-xl overflow-hidden mb-12">
    //             <Image
    //               src={'/images/about-banner.jpg'}
    //               fill
    //               alt={""}
    //               style={{ objectFit: "cover" }}
    //             />
    //           </div>
    //         </div>
    //         <div className="">
    //           {
    //             dataMedsos.map(data => {
    //               return (
    //                 <CardMedsos key={data.name} data={data} />
    //               )
    //             })
    //           }
    //         </div>
    //         <div className="w-container pb-10">
    //           <div className="flex gap-3 items-center w-fit mt-5 mb-8 uppercase">
    //             <div className="h-2 w-2 bg-btn-primary shadow-lg" />
    //             <h2>Skills</h2>
    //           </div>
    //           <div className="">
    //             <ProgressLine title={'HTML 5'} progress={'60%'} width='w-[60%]' />
    //             <ProgressLine title={'HTML 5'} progress={'60%'} width='w-[60%]' />
    //             <ProgressLine title={'HTML 5'} progress={'60%'} width='w-[60%]' />
    //             <ProgressLine title={'HTML 5'} progress={'60%'} width='w-[60%]' />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="font-sans flex flex-col pt-14 lg:pt-20 text-black-primary bg-primary-2 h-fit">
      <div className="w-container lg:flex gap-5">
        <div className="lg:w-1/2">
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
          <p className="mb-10 max-w-md">
          Born in 1999, kuliah di Institut teknologi del dari tahun 2017 – 2021. Memiliki pengalaman sebagai QA mulai dari tahun 2020 hingga saat ini. Sangat tertarik  dan antusias dengan pengujian aplikasi berbasis automation dan sedang belajar untuk automation selenium dan Cypress. Memahami beberapa tools pengujian seperti Katalon, jmeter, playwright, postman testing API, cypress.
          </p>
          <hr />
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
        <div className="lg:w-1/2">
          <div className="lg:sticky top-0 lg:h-fit lg:gap-5">
            <div className="md:flex gap-5">
              <div className="relative aspect-square lg:aspect-auto md:h-auto md:w-1/2 lg:h-72 lg:w-72 rounded-xl overflow-hidden mb-12 lg:mt-7">
                <Image
                  src={'/images/IMG_0382-copy.png'}
                  fill
                  alt={""}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="lg:mt-7 md:w-3/5">
                {
                  dataMedsos.map(data => {
                    return (
                      <CardMedsos key={data.name} data={data} />
                    )
                  })
                }
              </div>
            </div>

            <div className="pb-10">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}