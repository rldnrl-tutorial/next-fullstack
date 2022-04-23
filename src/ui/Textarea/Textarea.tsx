import { Textarea as ChakraTextArea, TextareaProps } from '@chakra-ui/react'

export default function Textarea(props: TextareaProps) {
  return <ChakraTextArea {...props} width="23.75rem" height="15rem" />
}
