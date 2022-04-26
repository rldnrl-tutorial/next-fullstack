import {
  Title,
  Container,
  VStack,
  Input,
  Select,
  Textarea,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@/ui'
import { FeedbackClient } from './apis/feedback.service'
import useInput from './hooks/useInput'
import useSelect from './hooks/useSelect'
import { Feedback } from './types/feedback'

export default function HomePage() {
  const {
    value: fullName,
    onChange: onFullNameChange,
    reset: resetFullName,
  } = useInput()
  const {
    value: email,
    onChange: onEmailChange,
    reset: resetEmail,
  } = useInput()
  const {
    value: message,
    onChange: onMessageChange,
    reset: resetMessage,
  } = useInput<HTMLTextAreaElement>()
  const [feedbackType, onFeedbackTypeChange] = useSelect('feedback')

  const isEmailError = email === ''

  const onSubmit = async (data: Feedback) => {
    await FeedbackClient.create(data)
    resetFullName()
    resetEmail()
    resetMessage()
  }

  return (
    <Container padding="10">
      <VStack spacing="5">
        <Title>Submit Your Feedback</Title>
        <Input
          placeholder="Full name"
          value={fullName}
          onChange={onFullNameChange}
        />
        <FormControl isInvalid={isEmailError}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChange}
          />
          {isEmailError ? (
            <FormErrorMessage>Email is required</FormErrorMessage>
          ) : (
            <FormHelperText color="green.500">Good</FormHelperText>
          )}
        </FormControl>
        <Select value={feedbackType} onChange={onFeedbackTypeChange}>
          <option value="feedback">Feedback</option>
          <option value="issue">Issue</option>
          <option value="idea">Idea</option>
        </Select>
        <Textarea
          placeholder="Message"
          value={message}
          onChange={onMessageChange}
        />
        <Button
          onClick={() =>
            onSubmit({
              name: fullName,
              email,
              message,
            })
          }
        >
          Submit
        </Button>
      </VStack>
    </Container>
  )
}
