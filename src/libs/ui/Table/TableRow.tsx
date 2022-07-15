import React, { HTMLAttributes } from 'react'

type TableRowProps = HTMLAttributes<HTMLTableRowElement>

export default function TableRow(props: TableRowProps) {
  return <tr {...props}>{props.children}</tr>
}
