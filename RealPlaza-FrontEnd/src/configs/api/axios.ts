import axios from 'axios'
import { getEnviroments } from '../getEnviroments'

const env = getEnviroments()

export const apiInstance = axios.create({
  baseURL: env.VITE_API_URL
})
