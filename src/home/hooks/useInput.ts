import { ChangeEvent, useState } from 'react'

type UseInput = [string, (e: ChangeEvent<HTMLInputElement>) => void]

export default function useInput(): UseInput {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return [value, onChange]
}
