import { Textarea as ChakraTextArea, TextareaProps } from '@chakra-ui/react'

export default function Textarea(props: TextareaProps) {
  return <ChakraTextArea maxWidth="23.75rem" height="15rem" {...props} />
}
