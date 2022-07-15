import { ComponentPropsWithoutRef, forwardRef } from 'react'

const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<'input'>>(
  (props, ref) => {
    return (
      <input
        {...props}
        className="px-6 py-4 max-w-sm w-full border rounded"
        ref={ref}
      />
    )
  }
)

export default Input
