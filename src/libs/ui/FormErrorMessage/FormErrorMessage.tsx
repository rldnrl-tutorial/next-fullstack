import React, { HTMLAttributes } from 'react'

type FormErrorMessageProps = HTMLAttributes<HTMLDivElement>

export default function FormErrorMessage(props: FormErrorMessageProps) {
  return (
    <div {...props} className="flex items-center text-red-400 mt-2 text-sm" />
  )
}
