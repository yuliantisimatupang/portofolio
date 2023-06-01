import { BriefcaseIcon } from "@heroicons/react/24/solid"
import React from "react"

interface DetailProps {
  duration: string
  position: string
  description: string
}

interface Props {
  data: DetailProps
}

export default function Card({ data }: Props) {
  return (
    <div className="flex gap-3 p-4 mb-5 w-full lg:max-w-xs bg-primary-1 rounded-xl border-2 border-line-dark">
      <div className="rounded-full w-fit h-fit p-1.5 bg-black-primary mt-2">
        <BriefcaseIcon className='text-btn-primary h-7 w-7' />
      </div>
      <div className="py-0">
        <span className="text-xs mb-1">{data.duration}</span>
        <h5 className="mb-3 font-semibold text-lg">{data.position}</h5>
        <p className="text-base">
          {data.description}
        </p>
      </div>
    </div>
  )
}