import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addCommentSuccess } from 'pages/comments/commentActions/actions'
import service from 'services/service'

interface commentInterface {
  body: string
  name: string
  postId: string
  email: string
}

export const useAddComment = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const addComment = useCallback(async (formData: commentInterface, postId: string, callBack: any) => {
    setLoading(true)

    const data = await service.create(`posts/${postId}/comments`, formData)

    dispatch(addCommentSuccess(data.data, postId))

    setLoading(false)
    callBack()
  }, [])

  return {
    addComment,
    loading
  }
}