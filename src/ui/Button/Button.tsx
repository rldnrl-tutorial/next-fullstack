import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

export default function Button(props: ButtonProps) {
  return (
    <ChakraButton
      maxWidth="23.75rem"
      width="100%"
      backgroundColor="facebook.500"
      color="white"
      padding="1.5rem 1rem"
      {...props}
    />
  )
}
