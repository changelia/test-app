
import http from './http'

const getAll = (url: string) => {
  return http.get(`users/1/${url}`)
};

const get = (url: string) => {
  return http.get(`users/1/${url}`)
};

const create = (url: string, data: any) => {
  return http.post(`/${url}`, data)
};

export default {
  getAll,
  get,
  create,
}