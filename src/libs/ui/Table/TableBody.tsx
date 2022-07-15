import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>

export default function TableBody(props: TableBodyProps) {
  return (
    <tbody {...props} className={clsx('divide-y', props.className)}>
      {props.children}
    </tbody>
  )
}
