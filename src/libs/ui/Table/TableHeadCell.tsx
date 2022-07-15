import React, { ThHTMLAttributes } from 'react'
import clsx from 'clsx'

type TableHeadCellProps = ThHTMLAttributes<HTMLTableHeaderCellElement>

export default function TableHeadCell(props: TableHeadCellProps) {
  return (
    <th {...props} className={clsx('px-6 py-3', props.className)}>
      {props.children}
    </th>
  )
}
