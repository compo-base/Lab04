import type { studentInfo } from '@/student'
import axios from 'axios'
import type { AxiosInstance, AxiosResponse } from 'axios'

const apiClient: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3004',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
export default {
  getStudent(): Promise<AxiosResponse<studentInfo[]>> {
    return apiClient.get<studentInfo[]>('/students')
  }
}
