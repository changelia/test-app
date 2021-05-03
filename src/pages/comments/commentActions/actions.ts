import * as actionTypes from './types'

interface CommentInterface {
  body: string
  email: string
  postId: string
  id: string
}

export function getCommentsByPost(data: CommentInterface[], postId: string) {
  return {
    type: actionTypes.GET_COMMENTS_BY_POST,
    data,
    postId,
  }
}

export function addCommentSuccess(data: CommentInterface) {
  return {
    type: actionTypes.ADD_COMMENT_SUCCESS,
    data,
  }
}