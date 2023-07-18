import { API_HOST_URL } from '@/utils/envs'
import axios from 'axios'

export const api = axios.create({
  baseURL: API_HOST_URL,
})
