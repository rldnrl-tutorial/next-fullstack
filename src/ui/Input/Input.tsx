import { Input as ChakraInput, InputProps } from '@chakra-ui/react'

export default function Input(props: InputProps) {
  return (
    <ChakraInput
      {...props}
      placeholder="Full name"
      padding="1.5rem 1rem"
      width="23.75rem"
    />
  )
}
