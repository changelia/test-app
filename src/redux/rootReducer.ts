import { combineReducers } from 'redux'
import { postReducer } from 'pages/posts/postReducer'
import { commentReducer } from 'pages/comments/commentReducer'

const rootReducer = combineReducers({
  posts: postReducer,
  comments: commentReducer
})

export default (state: any, action: any) => rootReducer(state, action)