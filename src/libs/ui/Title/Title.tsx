import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'

type TitleProps = HTMLAttributes<HTMLHeadingElement>

export default function Title(props: TitleProps) {
  return (
    <h2
      {...props}
      className={clsx('text-4xl leading-3 font-medium', props.className)}
    />
  )
}
