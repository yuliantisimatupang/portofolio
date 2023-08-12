import { BriefcaseIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Medsos } from '../../entities/medsos.entity'

interface Props {
  title: string
  progress: string
  width: string
}

export default function ProgressLine({ title, progress, width }: Props) {
  function test() {
    return 'w-[' + progress + ']'
  }

  return (
    <div className="my-7">
      <h6>{title}</h6>
      <div className="h-1.5 mt-2 w-full bg-btn-primary">
        <div className={`relative ${width} h-full bg-black-primary`}>
          <span className="skill-val">{progress}</span>
        </div>
      </div>
    </div>
  )
}
