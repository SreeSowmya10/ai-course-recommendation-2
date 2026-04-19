import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
})

export const fetchMilestones = () => api.get('/milestones').then(r => r.data)
export const fetchTasks      = () => api.get('/tasks').then(r => r.data)
export const fetchStats      = () => api.get('/stats').then(r => r.data)
export const fetchHealth     = () => api.get('/health').then(r => r.data)

export default api
