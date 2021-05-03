import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getAllPostSuccess } from 'pages/posts/postActins/actions'
import service from 'services/service'

interface PostInterface {
  body: string
  title: string
  userId: string
}

export const useGetPosts = () => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const getPosts = async () => {
    setLoading(true)

    const data = await service.getAll('users/1/posts')

    dispatch(getAllPostSuccess(data.data))

    setLoading(false)
  }

  return {
    getPosts,
    loading
  }
}