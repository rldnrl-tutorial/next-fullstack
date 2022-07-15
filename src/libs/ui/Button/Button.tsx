import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export default function Button(props: ButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        'w-full py-3 text-white bg-emerald-600 border border-transparent hover:bg-emerald-800 focus:ring-4 focus:ring-blue-300 disabled:hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 dark:disabled:hover:bg-blue-600 group flex h-min items-center justify-center p-0.5 text-center font-medium focus:z-10 rounded-lg text-base',
        props.className
      )}
    />
  )
}
