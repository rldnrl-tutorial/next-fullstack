import {
  Title,
  Container,
  VStack,
  Input,
  Select,
  Textarea,
  Button,
  FormControl,
} from '@/ui'

const Home = () => {
  return (
    <Container padding="10">
      <VStack spacing="5">
        <Title>Submit Your Feedback</Title>
        <Input placeholder="Full name" padding="1.5rem 1rem" width="23.75rem" />
        <Input
          type="email"
          placeholder="Email"
          padding="1.5rem 1rem"
          width="23.75rem"
        />
        <Select width="23.75rem">
          <option value="feedback">Feedback</option>
          <option value="issue">Issue</option>
          <option value="idea">Idea</option>
        </Select>
        <Textarea placeholder="Message" width="23.75rem" height="15rem" />
        <Button
          width="23.75rem"
          backgroundColor="facebook.500"
          color="white"
          padding="1.5rem 1rem"
        >
          Submit
        </Button>
      </VStack>
    </Container>
  )
}

export default Home
