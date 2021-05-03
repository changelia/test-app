import * as actionTypes from './postActins/types'

const initialState = {
  postList: []
}

export const postReducer = (state = initialState, action: any) => {
  switch (action.type) {

    case actionTypes.GET_ALL_POST_SUCCESS:

      return { postList: [...action.data] }

    case actionTypes.CREATE_POST_SUCCESS:
      return { postList: [action.data, ...state.postList] }

    default:
      return state
  }
}