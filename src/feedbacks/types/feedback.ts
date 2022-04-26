import { FeedbackType } from '@prisma/client'

export interface Feedback {
  id: string
  email: string
  message: string
  feedbackType: FeedbackType
  name?: string
}

export type { FeedbackType }
