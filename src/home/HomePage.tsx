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
import { useRouter } from 'next/router'
import { FeedbackClient } from './apis/feedback.service'
import useInput from './hooks/useInput'
import useSelect from './hooks/useSelect'
import type { Feedback, FeedbackType } from './types/feedback'

export default function HomePage() {
  const router = useRouter()

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
  const [feedbackType, onFeedbackTypeChange] =
    useSelect<FeedbackType>('FEEDBACK')

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
          <option value="FEEDBACK">Feedback</option>
          <option value="ISSUE">Issue</option>
          <option value="IDEA">Idea</option>
        </Select>
        <Textarea
          placeholder="Message"
          value={message}
          onChange={onMessageChange}
        />
        <Button
          onClick={() => {
            onSubmit({
              name: fullName,
              email,
              message,
              feedbackType,
            })
            router.push('/feedback')
          }}
        >
          Submit
        </Button>
      </VStack>
    </Container>
  )
}
