import { ChangeEvent, useState } from 'react'

export function useInput<T extends HTMLInputElement | HTMLTextAreaElement>(): [
  string,
  (e: ChangeEvent<T>) => void
]

export function useInput<T extends HTMLInputElement | HTMLTextAreaElement>() {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<T>) => {
    setValue(e.target.value)
  }

  return [value, onChange]
}
