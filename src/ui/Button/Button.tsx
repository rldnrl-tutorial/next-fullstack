import { Button as ChakraButton, ButtonProps } from '@chakra-ui/react'

export default function Button(props: ButtonProps) {
  return (
    <ChakraButton
      width="23.75rem"
      backgroundColor="facebook.500"
      color="white"
      padding="1.5rem 1rem"
      {...props}
    />
  )
}
