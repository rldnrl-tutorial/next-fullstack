import { Table, Tag } from '@/libs/ui'
import type { Feedback, FeedbackType } from '../types/feedback'

interface FeedbackTableProps {
  readonly feedbacks: Feedback[]
}

export default function FeedbackTable({ feedbacks }: FeedbackTableProps) {
  const renderTag = (feedbackType: FeedbackType) => {
    switch (feedbackType) {
      case 'FEEDBACK':
        return <Tag className="bg-yellow-400">Feedback</Tag>
      case 'ISSUE':
        return <Tag className="bg-red-500">Issue</Tag>
      case 'IDEA':
        return <Tag className="bg-blue-500">Idea</Tag>
    }
  }

  return (
    <div className="w-full relative overflow-x auto shadow-md rounded sm:rounded-lg">
      <Table className="m-auto rounded">
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Message</Table.HeaderCell>
            <Table.HeaderCell>Feedback</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {feedbacks.map(({ id, name, email, message, feedbackType }) => (
            <Table.Row
              key={id}
              className="bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <Table.Cell className="px-6 py-4 whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {name}
              </Table.Cell>
              <Table.Cell className="px-6 py4">{email}</Table.Cell>
              <Table.Cell className="px-6 py4">{message}</Table.Cell>
              <Table.Cell className="px-6 py4">
                {renderTag(feedbackType)}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}
