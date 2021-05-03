import * as actionTypes from './types'

export function getAllPostSuccess(data: any) {
  return {
    type: actionTypes.GET_ALL_POST_SUCCESS,
    data,
  }
}

export function createPostSuccess(data: any) {
  return {
    type: actionTypes.CREATE_POST_SUCCESS,
    data
  }
}