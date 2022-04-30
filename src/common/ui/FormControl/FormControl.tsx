import {
  FormControl as ChakraFormControl,
  FormControlProps,
} from '@chakra-ui/react'

export default function FormControl(props: FormControlProps) {
  return <ChakraFormControl maxWidth="23.75rem" {...props} />
}
