import * as actionTypes from './commentActions/types'

const initialState = {
  commentList: {},
  tags: []
}

export const commentReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case actionTypes.GET_COMMENTS_BY_POST:
      return {
        commentList: { ...state.commentList, [action.postId]: action.data },
        tags: [...state.tags]
      }

    case actionTypes.ADD_COMMENT_SUCCESS:
      const { commentList }: any = state

      return {
        commentList: {
          ...commentList,
          [action.postId]: [action.data, ...commentList[action.postId]]
        },
        tags: [...state.tags]
      }

    case actionTypes.ADD_NEW_TAG:
      const tagsArray = Array.from(new Set([...state.tags, ...action.tag]))
      return { commentList: { ...state.commentList }, tags: tagsArray }

    case actionTypes.ADD_TAG_TO_COMMENT:
      const list: any = state.commentList
      const comment = list[action.postId].find((i: any) => i.id === action.commentId)
      comment.tags = action.tags
      return {
        ...state,
        commentList: {
          ...list,
          [action.postId]: [comment, ...list[action.postId].filter((i: any) => i.id !== action.commentId)]
        },
      }

    default:
      return state
  }
}