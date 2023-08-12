import Link, { type LinkProps } from 'next/link'
import type { AnchorHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface LinkWrappedProps {
  children: ReactNode
  href: LinkProps['href']
  linkProps?: Omit<LinkProps, 'href'>
  className?: string
  // anchorProps?: Omit<
  //   DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>,
  //   'className'
  // >
  blank?: boolean
}

export default function LinkWrapped({
  children,
  href,
  linkProps,
  className,
  blank = false,
}: LinkWrappedProps) {
  return (
    <Link {...linkProps} className={className} target={blank ? '_blank' : ''} href={href}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {/* <a {...anchorProps} className={className}> */}
      {children}
      {/* </a> */}
    </Link>
  )
}
