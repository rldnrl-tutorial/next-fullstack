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
import { useMutation } from 'react-query'
import { FeedbackClient } from './apis/feedback.client'
import useEffectOnce from './hooks/useEffectOnce'
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

  const feedbackMutation = useMutation(
    (data: Feedback) => FeedbackClient.create(data),
    {
      onSuccess: () => {
        router.push('/feedbacks')
      },
    }
  )

  useEffectOnce(() => {
    resetFullName()
    resetEmail()
    resetMessage()
  })

  const isEmailError = email === ''

  const onSubmit = async () => {
    await feedbackMutation.mutateAsync({
      name: fullName,
      email,
      message,
      feedbackType,
    })
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
        <Button onClick={onSubmit}>Submit</Button>
      </VStack>
    </Container>
  )
}
