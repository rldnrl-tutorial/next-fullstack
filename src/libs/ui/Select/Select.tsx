import { Select as ChakraSelect, SelectProps } from '@chakra-ui/react'

export default function Select(props: SelectProps) {
  return <ChakraSelect maxWidth="23.75rem" {...props} />
}
