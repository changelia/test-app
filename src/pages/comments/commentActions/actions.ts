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

export function addCommentSuccess(data: CommentInterface, postId: string) {
  return {
    type: actionTypes.ADD_COMMENT_SUCCESS,
    data,
    postId
  }
}

export function addNewTag(tag: string[]) {
  return {
    type: actionTypes.ADD_NEW_TAG,
    tag
  }
}

export function addTagToComment(tags: string[], postId: string, commentId: string) {
  return {
    type: actionTypes.ADD_TAG_TO_COMMENT,
    tags,
    postId,
    commentId
  }
}

