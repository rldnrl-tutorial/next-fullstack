import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '@/config/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, feedbackType, message } = req.body

  try {
    await prisma.feedback.create({
      data: {
        name,
        email,
        message,
        feedbackType,
      },
    })

    res.status(200).json({ message: 'submitted successfully' })
  } catch (error) {
    res.status(400).json({ error })
  }
}
