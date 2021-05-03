import http from './http'

interface Data {
  title?: string
  body: string
  postId: string
  email?: string
}

const getAll = (url: string) => {
  return http.get(`/${url}`)
};

const get = (url: string) => {
  return http.get(`users/1/${url}`)
};

const create = (url: string, data: Data) => {
  return http.post(`/${url}`, JSON.stringify(data))
};

export default {
  getAll,
  get,
  create,
}