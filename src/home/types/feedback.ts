import type { FeedbackType } from '@prisma/client'

export interface Feedback {
  email: string
  message: string
  feedbackType: FeedbackType
  name?: string
}

export type { FeedbackType }
