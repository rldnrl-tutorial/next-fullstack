import React, { HTMLAttributes } from 'react'
import clsx from 'clsx'

type TableHeadProps = HTMLAttributes<HTMLTableSectionElement>

export default function TableHead(props: TableHeadProps) {
  return (
    <thead
      {...props}
      className={clsx(
        'bg-gray-50 text-md uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400',
        props.className
      )}
    >
      {props.children}
    </thead>
  )
}
