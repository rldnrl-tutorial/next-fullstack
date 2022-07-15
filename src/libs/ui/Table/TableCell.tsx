import React, { TdHTMLAttributes } from 'react'

type TableCellProps = TdHTMLAttributes<HTMLTableCellElement>

export default function TableCell(props: TableCellProps) {
  return <td {...props}>{props.children}</td>
}
