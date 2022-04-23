import { ChangeEvent, useState } from 'react'

export default function useInput<
  T extends HTMLInputElement | HTMLTextAreaElement
>(): [string, (e: ChangeEvent<T>) => void] {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<T>) => {
    setValue(e.target.value)
  }

  return [value, onChange]
}
