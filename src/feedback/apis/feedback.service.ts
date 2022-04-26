import apiClient from '@/config/axios-default'
import type { Feedback } from '../types/feedback'

export class FeedbackClient {
  static async fetchFeedbacks() {
    const response = await apiClient.get<Feedback[]>('/feedbacks')

    return response.data
  }
}
