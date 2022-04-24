import { ChangeEvent, useState } from 'react'

export function useInput<T extends HTMLInputElement | HTMLTextAreaElement>(): {
  value: string
  onChange: (e: ChangeEvent<T>) => void
  reset: () => void
}

export function useInput<T extends HTMLInputElement | HTMLTextAreaElement>() {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<T>) => {
    setValue(e.target.value)
  }

  const reset = () => {
    setValue('')
  }

  return {
    value,
    onChange,
    reset,
  }
}
