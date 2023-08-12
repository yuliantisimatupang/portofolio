import { BriefcaseIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { Card, CardMedsos, ProgressLine } from '../shared/components'
import { Experience } from '../shared/entities/experience.entity'
import { Medsos } from '../shared/entities/medsos.entity'
import { domAnimation, LazyMotion, m, Variants } from 'framer-motion'

export default function SectionAbout() {
  const dataExperience: Experience[] = [
    {
      duration: '2023 - Present',
      position: 'Quality Engineer - PT ASLI RI',
      description: [
        { title: 'Identify and analyze the needs of the product being built' },
        { title: 'Create test cases to run in Google Sheets' },
        { title: 'Create task lists and slide test tasks with Clickup development tools' },
        { title: 'Conducting fire testing with the Postman tool' },
        { title: 'Create a Katalon Script for API testing' },
        { title: 'Performed API stress testing with Jmeter' },
        { title: 'Perform mobile manual testing with Android and iOS' },
        { title: 'Create scripts and run mobile automation scripts with Appium' },
        { title: 'Using CI script automation on gitea and github' },
      ],
    },
    {
      duration: '2021 - 2023',
      position: 'Quality Engineer - Anteraja',
      description: [
        {
          title:
            'Identify and analyze the requirements provided by the PM in the BRD documentation',
        },
        { title: 'Creating test scenarios and managing tasks in Azure DevOps' },
        { title: 'Creating web automation feature scripts that will be tested at Katalon Studio' },
        { title: 'Conducting Android and iOS mobile manual testing of courier applications' },
        { title: 'Doing API testing on postman' },
        {
          title:
            'Conduct testing of web and mobile applications and ensure they comply with the acceptance criteria',
        },
        { title: 'Conduct application performance tests using Jmeter tools' },
        { title: 'Make sure there are no bugs/issues in applications that have been built' },
        {
          title:
            'Collaborate with product, design and developer teams regarding applications that are being built',
        },
        {
          title:
            'Delivering reports and reviews of test results with the product team, design team and development team',
        },
      ],
    },
    {
      duration: '2019 - 2021',
      position: 'QA Engineer Internship - PT Javan Cipta Solusi',
      description: [
        { title: 'Understand the business process flow of the project that will be built' },
        { title: 'Create test cases for web applications to be tested in Google Sheets' },
        { title: 'Create and run automation scripts in Katalon Studio' },
        { title: 'Create and run automation scripts in playwright inspector' },
        { title: 'Report test results to the product team' },
        {
          title:
            'Create a list of tasks and shift tasks that have finished testing in the Taiga development tools',
        },
      ],
    },
    {
      duration: '2021 - 2021',
      position: 'QA Internship - CV. KomParTo',
      description: [
        { title: 'Understand the business process flow of the project that will be built' },
        { title: 'Create test cases for web applications to be tested in Google Sheets' },
        { title: 'Perform manual testing of web applications' },
        { title: 'Create and run web script automation at Katalon Studio' },
        { title: 'Report test results to the User' },
        { title: 'Collaborate with the team on test results' },
      ],
    },
  ]

  const dataMedsos: Medsos[] = [
    {
      name: 'LinkedIn',
      image: 'Quality Assurance - Freelance',
      href: 'https://www.linkedin.com/in/yulianti-masta-rotua-simatupang-04a1b917a/',
    },
    {
      name: 'Github',
      image: 'Quality Assurance - AnterAja',
      href: 'https://github.com/yuliantisimatupang',
    },
    {
      name: 'Email',
      image: 'QA Engineer - AsliRI',
      href: 'mailto:yuliantisimatupang@gmail.com',
    },
  ]

  const ss: Variants = {
    offscreen: {
      y: 200,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 1,
      },
    },
  }

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
          <h3 className="mb-3">MY NAME IS YULIANTI SIMATUPANG</h3>
          <h5 className="font-sans text-2xl font-semibold tracking-wide uppercase mb-4">
            I Am Available For QA Engineer Projects
          </h5>
          <p className="mb-10 max-w-md">
            Bachelor of Informatics Engineering graduate with experience in manual testing and
            automation testing, Handles website-based, API, and mobile apps project testing. Focus
            on developing and executing automation scripts with the Katalon Testing Framework dan
            Selenium creating a detailed and well-structured testing strategy.
            <br />
            <br />
            Perform testing of the performance testing of an application Dengan Jmeter. Understand
            product specifications built, identify issues in the product being tested, and provide
            problem-solving for the project. Make test plans and create test scenarios/test cases
            and provide feedback and improvement reports on test results. I like to learn new things
            and think creatively about how things can be done
          </p>
          <hr />
          <div className="flex gap-3 items-center w-fit mt-5 mb-8 uppercase">
            <div className="h-2 w-2 bg-btn-primary shadow-lg" />
            <h2>Experience</h2>
          </div>
          {/* <LazyMotion features={domAnimation}>
            <m.div variants={ss}> */}
          <div className="pb-10">
            {dataExperience.map(data => {
              return <Card key={data.duration} data={data} />
            })}
          </div>
          {/* </m.div>
          </LazyMotion> */}
        </div>
        <div className="lg:w-1/2">
          <div className="lg:sticky top-0 lg:h-fit lg:gap-5">
            <div className="md:flex gap-5">
              <div className="relative aspect-square lg:aspect-auto md:h-auto md:w-1/2 lg:h-72 lg:w-72 rounded-xl overflow-hidden mb-12 lg:mt-7">
                <Image
                  src={'/images/IMG_0382-copy.png'}
                  fill
                  alt={''}
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="lg:mt-7 md:w-3/5">
                {dataMedsos.map(data => {
                  return <CardMedsos key={data.name} data={data} />
                })}
              </div>
            </div>

            <div className="pb-10">
              <div className="flex gap-3 items-center w-fit mt-5 mb-8 uppercase">
                <div className="h-2 w-2 bg-btn-primary shadow-lg" />
                <h2>Skills</h2>
              </div>
              <div className="">
                <ProgressLine title={'Manual Testing'} progress={'93%'} width="w-[93%]" />
                <ProgressLine title={'Katalon'} progress={'90%'} width="w-[90%]" />
                <ProgressLine title={'MySQL'} progress={'55%'} width="w-[55%]" />
                <ProgressLine title={'Cypress'} progress={'40%'} width="w-[40%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
