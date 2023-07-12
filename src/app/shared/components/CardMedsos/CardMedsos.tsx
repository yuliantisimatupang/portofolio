import { BriefcaseIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Medsos } from '../../entities/medsos.entity'
import Link from 'next/link'

interface Props {
  data: Medsos
}

export default function CardMedsos({ data }: Props) {
  return (
    <Link href={data.href}>
      <div className="flex items-center gap-3 px-4 py-3 mb-4 w-full bg-primary-1 rounded-xl border-2 border-line-dark">
        <div className="rounded-full w-fit h-fit p-1.5 bg-black-primary">
          <BriefcaseIcon className="text-btn-primary h-7 w-7" />
        </div>
        {data.name}
      </div>
    </Link>
  )
}
