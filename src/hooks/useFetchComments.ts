import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getCommentsByPost } from 'pages/comments/commentActions/actions'
import service from 'services/service'

export const useFetchComments = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const fetchComments = useCallback(async (postId: string) => {
    setLoading(true)

    const data = await service.getAll(`posts/${postId}/comments`)

    dispatch(getCommentsByPost(data.data, postId))

    setLoading(false)
  }, [])

  return {
    fetchComments,
    loading
  }
}