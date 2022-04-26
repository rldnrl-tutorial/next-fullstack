import FeedbackPage from '@/feedbacks/FeedbackPage'
import { prisma } from '@/config/prisma'
import { GetStaticProps } from 'next'
import { Feedback as IFeedback } from '@/feedbacks/types/feedback'
import { FeedbackClient } from '@/feedbacks/apis/feedback.service'

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
