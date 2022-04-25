import { ChangeEvent, useState } from 'react'

export function useSelect(
  defaultValue?: string
): [string, (e: ChangeEvent<HTMLSelectElement>) => void]

export function useSelect(defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  return [value, onChange]
}
