import * as actionTypes from './commentActions/types'

const initialState = {
  commentList: {}
}

export const commentReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case actionTypes.GET_COMMENTS_BY_POST:
      return { commentList: { ...state.commentList, [action.postId]: action.data } }

    case actionTypes.ADD_COMMENT_SUCCESS:
      const { commentList }: any = state

      return {
        commentList: {
          ...state.commentList,
          [action.postId]: [action.data, ...commentList[action.postId]]
        }
      }

    default:
      return state
  }
}