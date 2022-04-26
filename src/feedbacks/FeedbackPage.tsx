import FeedbackTable from './components/FeedbackTable'
import { Feedback } from './types/feedback'

interface FeedbackPageProps {
  readonly feedbacks: Feedback[]
}

export default function FeedbackPage({ feedbacks }: FeedbackPageProps) {
  return <FeedbackTable feedbacks={feedbacks} />
}
