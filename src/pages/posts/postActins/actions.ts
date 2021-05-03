import * as actionTypes from './types'

interface Data {
  title: string
  body: string
  id: string
  userId: string
}

export function getAllPostSuccess(data: Data[]) {
  return {
    type: actionTypes.GET_ALL_POST_SUCCESS,
    data,
  }
}

export function createPostSuccess(data: Data) {
  return {
    type: actionTypes.CREATE_POST_SUCCESS,
    data
  }
}