import { BriefcaseIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Experience } from '../../entities/experience.entity'
import { Variant, motion } from 'framer-motion'
interface DetailProps {
  duration: string
  position: string
  description: string
}

interface Props {
  data: Experience
}

export default function Card({ data }: Props) {
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  }
  return (
    <motion.nav initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="flex gap-3 p-4 mb-5 w-full bg-primary-1 rounded-xl border-2 border-line-dark">
        <div className="rounded-full w-fit h-fit p-1.5 bg-black-primary mt-2">
          <BriefcaseIcon className="text-btn-primary h-7 w-7" />
        </div>
        <div className="py-0">
          <span className="text-xs mb-1">{data.duration}</span>
          <h5 className="mb-3 font-semibold text-lg">{data.position}</h5>
          <ul className="list-disc">
            {data?.description &&
              data?.description.map(res => {
                return <li key={res.title}>{res.title}</li>
              })}
          </ul>
        </div>
      </div>
    </motion.nav>
  )
}
