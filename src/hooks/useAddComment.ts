import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCommentSuccess } from 'pages/comments/commentActions/actions'
import service from 'services/service'

interface PostInterface {
  body: string
  title: string
  userId: string
}

export const useAddComment = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const addComment = async (formData: any, postId: string, callBack: any) => {
    setLoading(true)

    const data = await service.create(`posts/${postId}/comments`, {
      postId,
      name: 'commenta name',
      email: 'email@meila.fwfwe',
      body: 'comment body'
    })

    dispatch(addCommentSuccess(data.data, postId))

    setLoading(false)
    callBack()
  }

  return {
    addComment,
    loading
  }
}