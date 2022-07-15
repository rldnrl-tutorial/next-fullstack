import {
  forwardRef,
  Select as ChakraSelect,
  SelectProps,
} from '@chakra-ui/react'

const Select = forwardRef<SelectProps, 'select'>((props, ref) => {
  return <ChakraSelect maxWidth="23.75rem" {...props} ref={ref} />
})

export default Select
