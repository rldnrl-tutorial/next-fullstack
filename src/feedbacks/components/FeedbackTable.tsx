import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tag,
} from '@/common/ui'
import type { Feedback, FeedbackType } from '../types/feedback'

interface FeedbackTableProps {
  readonly feedbacks: Feedback[]
}

export default function FeedbackTable({ feedbacks }: FeedbackTableProps) {
  const renderTag = (feedbackType: FeedbackType) => {
    switch (feedbackType) {
      case 'FEEDBACK':
        return <Tag backgroundColor="yellowgreen">Feedback</Tag>
      case 'ISSUE':
        return <Tag backgroundColor="red.500">Issue</Tag>
      case 'IDEA':
        return <Tag backgroundColor="blue.500">Idea</Tag>
    }
  }

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Message</Th>
            <Th>Feedback</Th>
          </Tr>
        </Thead>
        <Tbody>
          {feedbacks.map(({ id, name, email, message, feedbackType }) => (
            <Tr key={id}>
              <Td>{name}</Td>
              <Td>{email}</Td>
              <Td>{message}</Td>
              <Td>{renderTag(feedbackType)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}
