import clsx from 'clsx'
import { HTMLAttributes } from 'react'

type TagProps = HTMLAttributes<HTMLSpanElement>

export default function Tag(props: TagProps) {
  return (
    <span
      {...props}
      className={clsx(
        'inline-flex align-top items-center max-w-full font-medium text-sm min-h-[1.5rem] min-w-[1.5rem] px-2 text-white rounded',
        props.className
      )}
    />
  )
}
