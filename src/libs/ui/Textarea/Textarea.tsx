import {
  forwardRef,
  Textarea as ChakraTextArea,
  TextareaProps,
} from '@chakra-ui/react'

const Textarea = forwardRef<TextareaProps, 'textarea'>((props, ref) => {
  return (
    <ChakraTextArea maxWidth="23.75rem" height="15rem" {...props} ref={ref} />
  )
})

export default Textarea
