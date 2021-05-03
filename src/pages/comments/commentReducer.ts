import * as actionTypes from './commentActions/types'

const initialState = {
  commentList: {}
}

export const commentReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case actionTypes.GET_COMMENTS_BY_POST:

      return { commentList: { ...state.commentList, [action.postId]: action.data } }

    default:
      return state
  }
}