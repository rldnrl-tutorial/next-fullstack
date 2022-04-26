import FeedbackPage from '@/feedback/FeedbackPage'
import { prisma } from '@/config/prisma'
import { GetStaticProps } from 'next'
import { Feedback as IFeedback } from '@/feedback/types/feedback'
import { FeedbackClient } from '@/feedback/apis/feedback.service'

export default function Feedback({
  feedbacks,
}: {
  readonly feedbacks: IFeedback[]
}) {
  return <FeedbackPage feedbacks={feedbacks} />
}

export const getStaticProps: GetStaticProps = async () => {
  const feedbacks = await FeedbackClient.fetchFeedbacks()
  return {
    props: {
      feedbacks,
    },
  }
}
