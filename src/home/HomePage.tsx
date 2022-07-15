import {
  Title,
  Input,
  FormErrorMessage,
  Button,
  Textarea,
  Select,
} from '@/libs/ui'
import Label from '@/libs/ui/Label'
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
    <div className="flex min-h-screen items-center justify-center">
      <div className="p-10">
        <Title className="my-8">Submit Your Feedback</Title>
        <div className="my-5">
          <Label
            htmlFor="name"
            isRequired
            className="text-lg inline-block mb-2"
          >
            Full Name
          </Label>
          <Input
            {...register('name', { required: true })}
            id="name"
            placeholder="Full Name"
          />
          {errors.name?.type === 'required' && (
            <FormErrorMessage>Name is required</FormErrorMessage>
          )}
        </div>
        <div className="my-5">
          <Label
            htmlFor="email"
            isRequired
            className="text-lg inline-block mb-2"
          >
            Email
          </Label>
          <Input
            {...register('email', {
              required: true,
              pattern:
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            })}
            type="email"
            id="email"
            placeholder="Email"
          />
          {errors.email?.type === 'required' && (
            <FormErrorMessage>Email is required</FormErrorMessage>
          )}
          {errors.email?.type === 'pattern' && (
            <FormErrorMessage>This is not Email Format</FormErrorMessage>
          )}
        </div>
        <div className="my-5">
          <Label
            htmlFor="type"
            isRequired
            className="text-lg inline-block mb-2"
          >
            Type
          </Label>
          <Select {...register('feedbackType', { required: true })} id="type">
            <option value="FEEDBACK">Feedback</option>
            <option value="ISSUE">Issue</option>
            <option value="IDEA">Idea</option>
          </Select>
        </div>
        <div className="my-5">
          <Label
            htmlFor="message"
            isRequired
            className="text-lg inline-block mb-2"
          >
            Message
          </Label>
          <Textarea {...register('message', { required: true })} id="message" />
          {errors.message?.type === 'required' && (
            <FormErrorMessage>Email is required</FormErrorMessage>
          )}
        </div>
        <Button onClick={handleSubmit(onSubmit)} className="my-5">
          Submit
        </Button>
      </div>
    </div>
  )
}
