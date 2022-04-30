import { GetStaticProps } from 'next'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import { Feedback } from '@/feedbacks/types/feedback'
import FeedbackPage from '@/feedbacks/FeedbackPage'
import { FeedbackClient } from '@/feedbacks/apis/feedback.service'

export default function Feedbacks() {
  const { data, isLoading } = useQuery('posts', FeedbackClient.fetchFeedbacks)

  if (isLoading) return <p>Loading...</p>

  return <FeedbackPage feedbacks={data as Feedback[]} />
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('posts', FeedbackClient.fetchFeedbacks)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
