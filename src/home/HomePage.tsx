import {
  Title,
  Container,
  VStack,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Textarea,
  Flex,
} from '@/libs/ui'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { FeedbackClient } from './apis/feedback.client'
import useEffectOnce from './hooks/useEffectOnce'
import type { Feedback } from './types/feedback'

export default function HomePage() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Feedback>()

  const feedbackMutation = useMutation(
    (data: Feedback) => FeedbackClient.create(data),
    {
      onSuccess: () => {
        router.push('/feedbacks')
      },
    }
  )

  useEffectOnce(() => {
    reset()
  })

  const onSubmit = async (data: Feedback) => {
    await feedbackMutation.mutateAsync(data)
  }

  return (
    <Flex minHeight="inherit" alignItems="center">
      <Container padding="10">
        <VStack spacing="5">
          <Title>Submit Your Feedback</Title>
          <Input {...register('name')} placeholder="Full name" />
          <FormControl>
            <Input
              type="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern:
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              })}
            />
            {errors.email && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          <Select {...register('feedbackType')}>
            <option value="FEEDBACK">Feedback</option>
            <option value="ISSUE">Issue</option>
            <option value="IDEA">Idea</option>
          </Select>
          <Textarea
            {...register('message', { required: 'Message is required' })}
            placeholder="Message"
          />
          {errors.message && (
            <FormErrorMessage>{errors.message.message}</FormErrorMessage>
          )}
          <Button onClick={handleSubmit((data) => onSubmit(data))}>
            Submit
          </Button>
        </VStack>
      </Container>
    </Flex>
  )
}
