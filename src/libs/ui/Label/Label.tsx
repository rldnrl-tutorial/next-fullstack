import React, { LabelHTMLAttributes } from 'react'
import clsx from 'clsx'

type LabelProps = {
  isRequired?: boolean
} & LabelHTMLAttributes<HTMLLabelElement>

export default function Label({ isRequired, ...props }: LabelProps) {
  return (
    <label
      {...props}
      className={clsx(
        'text-sm font-medium text-gray-900 dark:text-gray-300',
        props.className
      )}
    >
      {props.children}
      {isRequired && <span className="first:ml-1 text-red-600">*</span>}
    </label>
  )
}
