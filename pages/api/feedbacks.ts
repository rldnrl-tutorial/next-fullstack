import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/config/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const feedbacks = await prisma.feedback.findMany({
    select: {
      email: true,
      message: true,
      name: true,
      feedbackType: true,
    },
  })
  return res.json(feedbacks)
}