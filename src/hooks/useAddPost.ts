import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createPostSuccess } from 'pages/posts/postActins/actions'
import service from 'services/service'

interface PostInterface {
  body: string
  title: string
  userId: string
}

export const useAddPost = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const addPost = async (formData: PostInterface, callBack: any) => {
    setLoading(true)

    const data = await service.create('post', JSON.stringify(formData))

    dispatch(createPostSuccess(data.data))

    setLoading(false)
    callBack()
  }

  return {
    addPost,
    loading
  }
}