import apiClient from '@/config/axios-default'
import { Feedback } from '../types/feedback'

export class FeedbackClient {
  static async create(data: Feedback) {
    const response = await apiClient.post('/create', data)

    return response
  }
}
