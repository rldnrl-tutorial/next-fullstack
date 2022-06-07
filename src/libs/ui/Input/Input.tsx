import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input(props: InputProps) {
  return (
    <input {...props} className="px-6 py-4 max-w-sm w-full border rounded" />
  )
}
