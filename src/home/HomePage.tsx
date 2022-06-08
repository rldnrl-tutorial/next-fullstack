import {
  Title,
  Container,
  VStack,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
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

  console.log(errors)

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
    <Container padding="10">
      <VStack spacing="5">
        <Title>Submit Your Feedback</Title>
        <Input {...register('name')} placeholder="Full name" />
        <FormControl>
          <Input
            type="email"
            placeholder="Email"
            {...register('email', {
              required: 'This is required',
              pattern:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            })}
          />
          {errors.email && (
            <FormErrorMessage>{errors.email.message}</FormErrorMessage>
          )}
        </FormControl>
        <select {...register('feedbackType', { required: 'This is required' })}>
          <option value="FEEDBACK">Feedback</option>
          <option value="ISSUE">Issue</option>
          <option value="IDEA">Idea</option>
        </select>
        <textarea
          {...register('message', { required: 'This is required' })}
          placeholder="Message"
        />
        <Button onClick={handleSubmit((data) => onSubmit(data))}>Submit</Button>
      </VStack>
    </Container>
  )
}
