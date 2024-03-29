import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { createPostSuccess } from 'pages/posts/postActins/actions'
import service from 'services/service'

interface Data {
  title?: string
  body: string
  postId: string
  email?: string
}

// you can add only 1 unique post to a specific user = free plan https://jsonplaceholder.typicode.com/ 

export const useAddPost = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const addPost = useCallback(async (formData: Data, callBack: any) => {
    setLoading(true)

    const data = await service.create('posts', formData)

    dispatch(createPostSuccess(data.data))

    setLoading(false)
    callBack()
  }, [])

  return {
    addPost,
    loading
  }
}