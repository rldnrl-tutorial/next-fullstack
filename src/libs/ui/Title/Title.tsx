import { Heading, HeadingProps } from '@chakra-ui/react'

interface TitleProps extends HeadingProps {}

export default function Title(props: TitleProps) {
  return <Heading {...props} />
}
