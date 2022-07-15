import React, { TableHTMLAttributes } from 'react'
import clsx from 'clsx'

import TableBody from './TableBody'
import TableHeadCell from './TableHeadCell'
import TableHead from './TableHead'
import TableRow from './TableRow'
import TableCell from './TableCell'

type TableProps = TableHTMLAttributes<HTMLTableElement>

export default function Table(props: TableProps) {
  return (
    <table
      {...props}
      className={clsx(
        'text-left text-md text-gray-500 dark:text-gray-400',
        props.className
      )}
    >
      {props.children}
    </table>
  )
}

Table.Head = TableHead
Table.HeaderCell = TableHeadCell
Table.Body = TableBody
Table.Row = TableRow
Table.Cell = TableCell
